import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { ChatProvider } from '../context/ChatContext';
import DashboardSidebar from './DashboardSidebar';
import DashboardMain from './DashboardMain';
import DashboardHeader from './DashboardHeader';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground">Please log in to access the dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <ChatProvider>
      <div className="h-screen flex flex-col bg-background">
        <DashboardHeader />
        <div className="flex flex-1 overflow-hidden">
          <DashboardSidebar />
          <DashboardMain />
        </div>
      </div>
    </ChatProvider>
  );
};

export default Dashboard;