import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Phone, Menu, X, Recycle, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleGetQuote = () => {
    navigate('/prices');
  };

  const handleCallNow = () => {
    window.open('tel:1-800-326-9278', '_self');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-eco-green to-professional-blue p-2 rounded-full">
              <Recycle className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-trust-navy">EcoWaste Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              if (item.name === "Services") {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className={`px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-1 ${
                      isActive(item.href) || isActive('/prices')
                        ? "text-eco-green border-b-2 border-eco-green"
                        : "text-foreground hover:text-eco-green"
                    }`}>
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border shadow-lg">
                      <DropdownMenuItem asChild>
                        <Link to="/services" className="w-full">
                          Our Services
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/prices" className="w-full">
                          Pricing & Quotes
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-eco-green border-b-2 border-eco-green"
                      : "text-foreground hover:text-eco-green"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Call CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleCallNow}
              className="flex items-center space-x-2 text-trust-navy hover:text-eco-green transition-colors cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">1-800-ECO-WASTE</span>
            </button>
            <Button variant="cta" size="sm" onClick={handleGetQuote}>
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                if (item.name === "Services") {
                  return (
                    <div key={item.name} className="px-3">
                      <div className="text-sm font-medium text-foreground mb-2">Services</div>
                      <Link
                        to="/services"
                        className={`block px-3 py-2 text-sm ${
                          isActive("/services")
                            ? "text-eco-green bg-eco-green-light"
                            : "text-foreground hover:text-eco-green hover:bg-eco-green-light"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Our Services
                      </Link>
                      <Link
                        to="/prices"
                        className={`block px-3 py-2 text-sm ${
                          isActive("/prices")
                            ? "text-eco-green bg-eco-green-light"
                            : "text-foreground hover:text-eco-green hover:bg-eco-green-light"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pricing & Quotes
                      </Link>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium ${
                      isActive(item.href)
                        ? "text-eco-green bg-eco-green-light"
                        : "text-foreground hover:text-eco-green hover:bg-eco-green-light"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="px-3 py-2">
                <button 
                  onClick={handleCallNow}
                  className="flex items-center space-x-2 text-trust-navy hover:text-eco-green transition-colors cursor-pointer mb-2"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">1-800-ECO-WASTE</span>
                </button>
                <Button variant="cta" size="sm" className="w-full" onClick={handleGetQuote}>
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;