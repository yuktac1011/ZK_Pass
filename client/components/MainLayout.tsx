import React from 'react';
import { Sidebar } from './Sidebar';
import { Bell, UserCircle2 } from 'lucide-react';

type MainLayoutProps = {
    children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content-wrapper">
                <header className="top-header">
                    <div className="header-icons">
                        <Bell size={22} strokeWidth={1.5} />
                        <UserCircle2 size={32} strokeWidth={1.5} />
                    </div>
                </header>
                <main className="page-content">
                    {children}
                </main>
            </div>
        </div>
    );
};