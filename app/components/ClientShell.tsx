"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-white text-slate-900 min-h-screen">
      <Sidebar 
        activeItem={activeItem} 
        onNavItemClick={(item) => {
          setActiveItem(item);
          setIsSidebarOpen(false); // Close sidebar on mobile after clicking
        }} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="flex-1 overflow-y-auto pb-8">
          {activeItem === 'Dashboard' ? children : (
            <div className="flex h-full items-center justify-center bg-white p-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-slate-200 uppercase tracking-widest">{activeItem}</h1>
                <p className="mt-4 text-slate-400">This section is currently empty.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
