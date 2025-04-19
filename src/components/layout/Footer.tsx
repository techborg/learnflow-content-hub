
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h3 className="text-xl font-bold mb-4 text-purple-300">LearnFlow</h3>
          <p className="text-slate-300 mb-4">
            Empowering your learning journey with quality courses and insightful articles.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-slate-300">
            <li>
              <Link to="/" className="hover:text-purple-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-purple-300 transition-colors">
                All Courses
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-purple-300 transition-colors">
                Blog Articles
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-300 transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-4 text-white">Categories</h4>
          <ul className="space-y-2 text-slate-300">
            <li>
              <Link to="/courses?category=development" className="hover:text-purple-300 transition-colors">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/courses?category=design" className="hover:text-purple-300 transition-colors">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link to="/courses?category=marketing" className="hover:text-purple-300 transition-colors">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to="/courses?category=data" className="hover:text-purple-300 transition-colors">
                Data Science
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-4 text-white">Contact Us</h4>
          <address className="text-slate-300 not-italic">
            <p>Email: contact@learnflow.com</p>
            <p className="mt-2">Phone: +1 (555) 123-4567</p>
          </address>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-slate-300 hover:text-purple-300 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-slate-300 hover:text-purple-300 transition-colors">
              Facebook
            </a>
            <a href="#" className="text-slate-300 hover:text-purple-300 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-8 pt-8 border-t border-slate-800 px-4">
        <p className="text-center text-slate-400">
          © {new Date().getFullYear()} LearnFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
