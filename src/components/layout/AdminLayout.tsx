
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BookText, 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Settings,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="bg-slate-950 text-white w-64 flex-shrink-0">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-purple-300">LearnFlow</h1>
          </Link>
        </div>
        
        <nav className="px-3 py-6">
          <ul className="space-y-1">
            <li>
              <Link 
                to="/admin" 
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive('/admin') && location.pathname === '/admin' ? 'bg-purple-400 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/courses" 
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive('/admin/courses') ? 'bg-purple-400 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
              >
                <BookOpen className="h-5 w-5" />
                <span>Courses</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/blog" 
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive('/admin/blog') ? 'bg-purple-400 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
              >
                <BookText className="h-5 w-5" />
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/users" 
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive('/admin/users') ? 'bg-purple-400 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
              >
                <Users className="h-5 w-5" />
                <span>Users</span>
              </Link>
            </li>
          </ul>
          
          <div className="mt-auto pt-8">
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/admin/settings" 
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive('/admin/settings') ? 'bg-purple-400 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-slate-300 hover:bg-slate-800 hover:text-white px-3 py-2 h-auto font-normal"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  <span>Logout</span>
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Admin header */}
        <header className="bg-white border-b py-4 px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">Admin User</span>
            </div>
          </div>
        </header>
        
        {/* Admin content */}
        <main className="flex-1 p-6 bg-slate-50">
          {children}
        </main>
      </div>
    </div>
  );
};
