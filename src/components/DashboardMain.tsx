import React, { useState, useRef, useEffect } from 'react';
import { Send, ChevronDown } from 'lucide-react';
import { useChat } from '../context/ChatContext';

const DashboardMain: React.FC = () => {
  const { currentChat, sendMessage, clearCurrentChat } = useChat();
  const [input, setInput] = useState('');
  const [category, setCategory] = useState<'general' | 'family' | 'business' | 'criminal'>('general');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    'How to draft an NDA?',
    'What are the tenets of contract law?',
    'How to handle intellectual property disputes?'
  ];

  const categories = [
    { value: 'general', label: 'General' },
    { value: 'family', label: 'Family' },
    { value: 'business', label: 'Business' },
    { value: 'criminal', label: 'Criminal' }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [currentChat?.messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = () => {
    if (input.trim() && currentChat) {
      sendMessage(input.trim(), category);
      setInput('');
    }
  };

  const { createNewChat } = useChat();

  const handleSuggestionClick = (suggestion: string) => {
    if (!currentChat) {
      createNewChat();
      // Small delay to ensure chat is created
      setTimeout(() => {
        sendMessage(suggestion, category);
      }, 100);
    } else {
      sendMessage(suggestion, category);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!currentChat) {
    return (
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center max-w-2xl">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl">🤖</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Welcome to Legal.AI</h2>
            <p className="text-muted-foreground mb-8">
              Start a conversation with our AI legal assistant. Ask questions, analyze documents, or get legal insights.
            </p>

            {/* Input Box */}
            <div className="card-feature p-6 mb-6">
              <div className="flex space-x-3">
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="appearance-none bg-muted border border-border rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
                
                <div className="flex-1 relative">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask a legal question..."
                    rows={1}
                    className="w-full resize-none bg-background border border-border rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-muted/50 transition-all duration-200 text-left"
                >
                  <span className="text-muted-foreground mr-2">💡</span>
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {currentChat.messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-3xl p-4 rounded-2xl ${
                message.isUser
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isUser ? 'bg-primary-foreground/20' : 'bg-primary/10'
                }`}>
                  <span className="text-sm">
                    {message.isUser ? '👤' : '🤖'}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`text-sm font-medium ${
                      message.isUser ? 'text-primary-foreground' : 'text-foreground'
                    }`}>
                      {message.isUser ? 'You' : 'Legal.AI'}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      message.isUser 
                        ? 'bg-primary-foreground/20 text-primary-foreground' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {message.category}
                    </span>
                  </div>
                  <p className={`leading-relaxed ${
                    message.isUser ? 'text-primary-foreground' : 'text-foreground'
                  }`}>
                    {message.content}
                  </p>
                  <div className={`text-xs mt-2 ${
                    message.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-border p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-3">
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="appearance-none bg-background border border-border rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
            
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                rows={1}
                className="w-full resize-none bg-background border border-border rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <Send className="w-4 h-4 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMain;