import { 
  LayoutDashboard, 
  ShoppingCart, 
  FileText, 
  MessageSquare, 
  Settings, 
  CreditCard, 
  User, 
  Info,
  Hexagon,
  X,
  LucideIcon
} from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  onNavItemClick: (item: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ activeItem, onNavItemClick, isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Food Order', icon: ShoppingCart },
    { name: 'Manage Menu', icon: FileText },
    { name: 'Customer Review', icon: MessageSquare },
  ];

  const otherItems = [
    { name: 'Settings', icon: Settings },
    { name: 'Payment', icon: CreditCard },
    { name: 'Accounts', icon: User },
    { name: 'Help', icon: Info },
  ];

  const NavItem = ({ item }: { item: { name: string; icon: LucideIcon } }) => {
    const isActive = activeItem === item.name;
    const Icon = item.icon;

    return (
      <button
        onClick={() => onNavItemClick(item.name)}
        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 ${
          isActive 
            ? 'bg-indigo-50 text-indigo-600 shadow-sm' 
            : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
        }`}
      >
        <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
        <span className={`text-sm ${isActive ? 'font-bold' : 'font-medium'}`}>{item.name}</span>
      </button>
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <div className={`fixed inset-y-0 left-0 z-50 flex h-screen flex-col justify-between border-r border-slate-200 bg-[#F1F2F7] w-64 font-sans transition-transform lg:sticky lg:top-0 lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
          <div className="flex flex-col gap-10">
              {/* Logo Section matching Header Height */}
              <div className="flex h-20 items-center justify-between border-b border-slate-200 px-8">
                  <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                          <Hexagon size={18} fill="currentColor" />
                      </div>
                      <span className="text-sm font-black tracking-tighter text-indigo-900 border-b-2 border-indigo-600">GOODFOOD</span>
                  </div>
                  <button onClick={onClose} className="text-slate-400 lg:hidden">
                    <X size={20} />
                  </button>
              </div>

              <div className="flex flex-col gap-8 p-6 pt-0">
                  {/* Menu Section */}
                  <div className="flex flex-col gap-2">
                      <h3 className="px-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Menu</h3>
                      <nav className="flex flex-col gap-1.5">
                          {menuItems.map(item => <NavItem key={item.name} item={item} />)}
                      </nav>
                  </div>

                  {/* Others Section */}
                  <div className="flex flex-col gap-2">
                      <h3 className="px-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Others</h3>
                      <nav className="flex flex-col gap-1.5">
                          {otherItems.map(item => <NavItem key={item.name} item={item} />)}
                      </nav>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default Sidebar;
