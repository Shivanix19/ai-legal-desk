import React, { createContext, useContext, useState, useEffect } from 'react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  category: 'general' | 'family' | 'business' | 'criminal';
}

interface Chat {
  id: string;
  name: string;
  messages: Message[];
  isPinned: boolean;
  createdAt: Date;
  lastMessage?: Date;
}

interface ChatContextType {
  chats: Chat[];
  currentChat: Chat | null;
  createNewChat: () => string;
  selectChat: (chatId: string) => void;
  sendMessage: (content: string, category: Message['category']) => void;
  renameChat: (chatId: string, newName: string) => void;
  togglePinChat: (chatId: string) => void;
  deleteChat: (chatId: string) => void;
  clearCurrentChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

const generateChatName = (): string => {
  const topics = [
    'Contract Review', 'Legal Research', 'Document Analysis', 'Case Study',
    'Compliance Check', 'Legal Advice', 'Policy Review', 'Risk Assessment'
  ];
  const date = new Date().toLocaleDateString('en-US', { 
    day: '2-digit', 
    month: 'short' 
  }).replace(' ', '');
  
  return `${topics[Math.floor(Math.random() * topics.length)]} ${date}`;
};

const generateAIResponse = (userMessage: string, category: string): string => {
  const responses = {
    general: [
      "Based on general legal principles, I can provide some insights on this matter.",
      "Let me analyze this from a legal perspective and provide relevant information.",
      "This is an interesting legal question. Here's what you should know:"
    ],
    family: [
      "In family law matters, it's important to consider various factors including jurisdiction and specific circumstances.",
      "Family law can be complex and varies by state. Here are some general considerations:",
      "This family law issue requires careful attention to detail. Let me explain the key points:"
    ],
    business: [
      "From a business law perspective, there are several important considerations here.",
      "Business legal matters often involve compliance and risk management. Here's my analysis:",
      "This business law question touches on important regulatory and commercial aspects:"
    ],
    criminal: [
      "Criminal law matters are serious and require immediate attention. Here's what you need to know:",
      "In criminal law, understanding your rights and the legal process is crucial:",
      "This criminal law question involves important constitutional and procedural considerations:"
    ]
  };

  const categoryResponses = responses[category as keyof typeof responses] || responses.general;
  return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
};

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);

  useEffect(() => {
    const storedChats = localStorage.getItem('legalai_chats');
    if (storedChats) {
      const parsedChats = JSON.parse(storedChats).map((chat: any) => ({
        ...chat,
        createdAt: new Date(chat.createdAt),
        lastMessage: chat.lastMessage ? new Date(chat.lastMessage) : undefined,
        messages: chat.messages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }))
      }));
      setChats(parsedChats);
    }
  }, []);

  useEffect(() => {
    if (chats.length > 0) {
      localStorage.setItem('legalai_chats', JSON.stringify(chats));
    }
  }, [chats]);

  const createNewChat = (): string => {
    const newChat: Chat = {
      id: Date.now().toString(),
      name: generateChatName(),
      messages: [],
      isPinned: false,
      createdAt: new Date(),
    };

    setChats(prev => [newChat, ...prev]);
    setCurrentChat(newChat);
    return newChat.id;
  };

  const selectChat = (chatId: string) => {
    const chat = chats.find(c => c.id === chatId);
    if (chat) {
      setCurrentChat(chat);
    }
  };

  const sendMessage = (content: string, category: Message['category']) => {
    if (!currentChat) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
      category,
    };

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: generateAIResponse(content, category),
      isUser: false,
      timestamp: new Date(),
      category,
    };

    setChats(prev => prev.map(chat => 
      chat.id === currentChat.id 
        ? {
            ...chat,
            messages: [...chat.messages, userMessage, aiResponse],
            lastMessage: new Date(),
          }
        : chat
    ));

    setCurrentChat(prev => prev ? {
      ...prev,
      messages: [...prev.messages, userMessage, aiResponse],
      lastMessage: new Date(),
    } : null);
  };

  const renameChat = (chatId: string, newName: string) => {
    setChats(prev => prev.map(chat =>
      chat.id === chatId ? { ...chat, name: newName } : chat
    ));

    if (currentChat?.id === chatId) {
      setCurrentChat(prev => prev ? { ...prev, name: newName } : null);
    }
  };

  const togglePinChat = (chatId: string) => {
    setChats(prev => prev.map(chat =>
      chat.id === chatId ? { ...chat, isPinned: !chat.isPinned } : chat
    ));

    if (currentChat?.id === chatId) {
      setCurrentChat(prev => prev ? { ...prev, isPinned: !prev.isPinned } : null);
    }
  };

  const deleteChat = (chatId: string) => {
    setChats(prev => prev.filter(chat => chat.id !== chatId));
    
    if (currentChat?.id === chatId) {
      setCurrentChat(null);
    }
  };

  const clearCurrentChat = () => {
    setCurrentChat(null);
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        currentChat,
        createNewChat,
        selectChat,
        sendMessage,
        renameChat,
        togglePinChat,
        deleteChat,
        clearCurrentChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};