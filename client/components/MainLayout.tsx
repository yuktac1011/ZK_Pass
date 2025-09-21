import React from 'react';
import { Bell, UserCircle2 } from 'lucide-react';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col flex-1 min-h-0">
      
   {/* Main Content Area */}
      <main className="flex-1 overflow-hidden">
        <div className="h-full overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
};