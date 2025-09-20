import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, LayoutDashboard, Library, FileText, Settings, KeyRound } from 'lucide-react';

const navLinks = [
    { to: '/', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/credentials', label: 'Credentials', icon: Library },
    { to: '/templates', label: 'Templates', icon: FileText },
    { to: '/revocations', label: 'Revocations', icon: KeyRound },
    { to: '/settings', label: 'Settings', icon: Settings },
];

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <Shield size={28} className="logo-icon" />
                <h1>ZK-Pass</h1>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    {navLinks.map(({ to, label, icon: Icon }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            >
                                <Icon size={20} />
                                <span>{label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};