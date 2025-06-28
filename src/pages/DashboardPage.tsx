import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import Custom Layout Components
import DashboardHeader from '@/components/layout/DashboardHeader';
import DashboardFooter from '@/components/layout/DashboardFooter';

// Import shadcn/ui Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

// Import Icons
import { LogOut } from 'lucide-react';

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you'd clear auth tokens here
    console.log("Logging out and redirecting to login page.");
    navigate('/'); // Navigate to LoginPage as per App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <DashboardHeader />
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6">
        <Card className="w-full max-w-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Welcome to Your Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6 pt-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
              <AvatarFallback>USER</AvatarFallback>
            </Avatar>
            <p className="text-center text-muted-foreground">
              You have successfully logged in. This is your main application area.
            </p>
            <Button onClick={handleLogout} className="w-full max-w-xs" size="lg">
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </Button>
          </CardContent>
        </Card>
      </main>
      <DashboardFooter />
    </div>
  );
};

export default DashboardPage;