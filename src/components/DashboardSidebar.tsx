import React, { useState } from 'react';
import { Plus, Pin, PinOff, Edit2, MessageSquare, MoreVertical, Trash2 } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import ConfirmDialog from './ConfirmDialog';

const DashboardSidebar: React.FC = () => {
  const { chats, currentChat, createNewChat, selectChat, renameChat, togglePinChat, deleteChat } = useChat();
  const [editingChatId, setEditingChatId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [chatToDelete, setChatToDelete] = useState<string | null>(null);

  const pinnedChats = chats.filter(chat => chat.isPinned);
  const unpinnedChats = chats.filter(chat => !chat.isPinned);

  const handleStartEdit = (chatId: string, currentName: string) => {
    setEditingChatId(chatId);
    setEditingName(currentName);
  };

  const handleSaveEdit = () => {
    if (editingChatId && editingName.trim()) {
      renameChat(editingChatId, editingName.trim());
    }
    setEditingChatId(null);
    setEditingName('');
  };

  const handleCancelEdit = () => {
    setEditingChatId(null);
    setEditingName('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  const handleDeleteClick = (chatId: string) => {
    setChatToDelete(chatId);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (chatToDelete) {
      deleteChat(chatToDelete);
      setChatToDelete(null);
    }
  };

  return (
    <aside className="w-80 bg-muted/20 border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <button
          onClick={createNewChat}
          className="w-full btn-hero flex items-center justify-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>New Chat</span>
        </button>
      </div>

      {/* Chat Lists */}
      <div className="flex-1 overflow-y-auto">
        {/* Pinned Chats */}
        {pinnedChats.length > 0 && (
          <div className="p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-3 px-2">
              Pinned Chats
            </h3>
            <div className="space-y-2">
              {pinnedChats.map((chat) => (
                <ChatItem
                  key={chat.id}
                  chat={chat}
                  isActive={currentChat?.id === chat.id}
                  isEditing={editingChatId === chat.id}
                  editingName={editingName}
                  onSelect={() => selectChat(chat.id)}
                  onStartEdit={handleStartEdit}
                  onSaveEdit={handleSaveEdit}
                  onCancelEdit={handleCancelEdit}
                  onTogglePin={() => togglePinChat(chat.id)}
                  onDelete={() => handleDeleteClick(chat.id)}
                  onNameChange={setEditingName}
                  onKeyPress={handleKeyPress}
                />
              ))}
            </div>
          </div>
        )}

        {/* History */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 px-2">
            History
          </h3>
          {unpinnedChats.length > 0 ? (
            <div className="space-y-2">
              {unpinnedChats.map((chat) => (
                <ChatItem
                  key={chat.id}
                  chat={chat}
                  isActive={currentChat?.id === chat.id}
                  isEditing={editingChatId === chat.id}
                  editingName={editingName}
                  onSelect={() => selectChat(chat.id)}
                  onStartEdit={handleStartEdit}
                  onSaveEdit={handleSaveEdit}
                  onCancelEdit={handleCancelEdit}
                  onTogglePin={() => togglePinChat(chat.id)}
                  onDelete={() => handleDeleteClick(chat.id)}
                  onNameChange={setEditingName}
                  onKeyPress={handleKeyPress}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-8">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">No chats yet</p>
              <p className="text-xs">Create your first chat to get started</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title="Delete Chat"
        description="Are you sure you want to delete this chat? This action cannot be undone."
        onConfirm={handleConfirmDelete}
      />
    </aside>
  );
};

interface ChatItemProps {
  chat: any;
  isActive: boolean;
  isEditing: boolean;
  editingName: string;
  onSelect: () => void;
  onStartEdit: (id: string, name: string) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
  onTogglePin: () => void;
  onDelete: () => void;
  onNameChange: (name: string) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

const ChatItem: React.FC<ChatItemProps> = ({
  chat,
  isActive,
  isEditing,
  editingName,
  onSelect,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onTogglePin,
  onDelete,
  onNameChange,
  onKeyPress,
}) => {
  return (
    <div
      className={`group relative p-3 rounded-lg cursor-pointer transition-all duration-200 ${
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'hover:bg-muted'
      }`}
      onClick={!isEditing ? onSelect : undefined}
    >
      {isEditing ? (
        <input
          type="text"
          value={editingName}
          onChange={(e) => onNameChange(e.target.value)}
          onKeyDown={onKeyPress}
          onBlur={onSaveEdit}
          className="w-full bg-transparent border-none outline-none text-sm font-medium"
          autoFocus
        />
      ) : (
        <>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium truncate flex-1 mr-2">
              {chat.name}
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className={`p-1 rounded hover:bg-background/20 transition-colors ${
                    isActive ? 'text-primary-foreground' : 'text-muted-foreground'
                  }`}
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    onStartEdit(chat.id, chat.name);
                  }}
                  className="cursor-pointer"
                >
                  <Edit2 className="w-4 h-4 mr-2" />
                  Rename
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    onTogglePin();
                  }}
                  className="cursor-pointer"
                >
                  {chat.isPinned ? (
                    <>
                      <PinOff className="w-4 h-4 mr-2" />
                      Unpin
                    </>
                  ) : (
                    <>
                      <Pin className="w-4 h-4 mr-2" />
                      Pin
                    </>
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                  }}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {chat.messages.length > 0 && (
            <div className={`text-xs mt-1 truncate ${
              isActive ? 'text-primary-foreground/70' : 'text-muted-foreground'
            }`}>
              {chat.messages[chat.messages.length - 1].content}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DashboardSidebar;