"use client";

import { Search, Bell, ChevronDown, Menu, User, Settings, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="flex h-20 flex-shrink-0 items-center justify-between bg-white px-4 md:px-8 border-b border-slate-200 z-10">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>

        <div className="relative w-full max-w-[600px]">
          <div className="flex items-center rounded-xl bg-[#F1F2F7] px-4 py-2">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-transparent text-xs text-slate-600 focus:outline-none placeholder:text-slate-300"
            />
            <Search size={18} className="text-slate-300" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8 ml-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 md:gap-3 cursor-pointer outline-none hover:bg-slate-50 p-1 rounded-lg transition-colors">
              <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-orange-100/50 flex-shrink-0">
                <span className="text-base md:text-lg">🍔</span>
              </div>
              <span className="text-[13px] font-semibold text-slate-700 hidden sm:block">Delicious Burger</span>
              <ChevronDown size={16} className="text-slate-400 hidden sm:block" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 mt-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-none z-[100] rounded-2xl p-6 bg-white animate-in fade-in-0 zoom-in-95 duration-200">
            <DropdownMenuLabel className="text-xs">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-xs text-red-600 focus:text-red-700">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative cursor-pointer flex-shrink-0 p-2 hover:bg-[#F1F2F7] rounded-lg transition-colors outline-none">
              <Bell size={20} className="text-slate-400" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 mt-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-none z-[100] rounded-2xl p-6 bg-white animate-in fade-in-0 zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4">
              <DropdownMenuLabel className="p-0 text-sm font-bold text-slate-800">Notifications</DropdownMenuLabel>
              <span className="text-[10px] font-bold text-red-500 bg-red-50/50 px-2 py-0.5 rounded-full">3 NEW</span>
            </div>
            <DropdownMenuSeparator className="mb-4" />
            <div className="space-y-4">
              {[
                { title: "New Order received", time: "2 min ago", unread: true },
                { title: "Menu updated by Admin", time: "1 hour ago", unread: false },
                { title: "New Message from Kitchen", time: "3 hours ago", unread: true },
              ].map((notif, i) => (
                <DropdownMenuItem key={i} className="flex flex-col items-start gap-1 p-0 focus:bg-transparent cursor-pointer group">
                  <div className="flex w-full items-center justify-between">
                    <span className={`text-xs ${notif.unread ? "font-bold text-slate-800" : "font-medium text-slate-600"}`}>
                      {notif.title}
                    </span>
                    {notif.unread && <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>}
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">{notif.time}</span>
                </DropdownMenuItem>
              ))}
            </div>
            <DropdownMenuSeparator className="my-4" />
            <div className="text-center">
              <button className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">View all notifications</button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;