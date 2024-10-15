import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, Building2, Newspaper } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">My Portfolio</Link>
          <div className="flex space-x-4">
            <NavLink to="/" icon={<Home size={20} />} text="Home" />
            <NavLink to="/projects" icon={<Briefcase size={20} />} text="Projects" />
            <NavLink to="/company" icon={<Building2 size={20} />} text="Company" />
            <NavLink to="/tech-news" icon={<Newspaper size={20} />} text="Tech News" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center hover:text-blue-200 transition-colors duration-200">
    {icon}
    <span className="ml-1">{text}</span>
  </Link>
);

export default Navbar;