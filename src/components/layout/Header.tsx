
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-purple-400">LearnFlow</h1>
          </Link>
          
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-foreground hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-foreground hover:text-purple-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground hover:text-purple-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/admin">
            <Button variant="outline" className="hidden md:flex">
              Admin
            </Button>
          </Link>
          <Link to="/admin/login">
            <Button className="bg-purple-400 hover:bg-purple-500">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
