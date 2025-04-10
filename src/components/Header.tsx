import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, PawPrint } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/favorites', label: 'Favorites' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Paw Naturals</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-600 hover:text-blue-600 transition-colors ${
                  location.pathname === item.path ? 'text-blue-600 font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cart" className="text-gray-600 hover:text-blue-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/signin" className="text-gray-600 hover:text-blue-600 transition-colors">
              <User className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-gray-600 hover:text-blue-600 transition-colors ${
                    location.pathname === item.path ? 'text-blue-600 font-medium' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-6 pt-4">
                <Link to="/cart" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <ShoppingCart className="h-6 w-6" />
                </Link>
                <Link to="/signin" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <User className="h-6 w-6" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;