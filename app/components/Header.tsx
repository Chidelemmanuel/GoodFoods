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
        {/* Hamburger Menu - Mobile Only */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>

        {/* Search Bar */}
        <div className="relative w-full max-w-[600px]">
          <div className="flex items-center rounded-xl bg-slate-50 px-4 py-2.5">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-transparent text-sm text-slate-600 focus:outline-none placeholder:text-slate-300"
            />
            <Search size={18} className="text-slate-300" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-8 ml-4">
        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 md:gap-3 cursor-pointer outline-none hover:bg-slate-50 p-1 rounded-lg transition-colors">
              <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-orange-100/50 flex-shrink-0">
                <span className="text-base md:text-lg">🍔</span>
              </div>
              <span className="text-sm font-bold text-slate-700 hidden sm:block">Delicious Burger</span>
              <ChevronDown size={16} className="text-slate-400 hidden sm:block" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
            <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-700">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notification */}
        <div className="relative cursor-pointer flex-shrink-0">
          <Bell size={20} className="text-slate-400" />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;