import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Recycle, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trust-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-eco-green to-professional-blue p-2 rounded-full">
                <Recycle className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">EcoWaste Pro</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Professional waste removal services committed to environmental sustainability and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-eco-green cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-eco-green cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-eco-green cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-eco-green cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-eco-green">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-eco-green">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-eco-green">Services</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-eco-green">Testimonials</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-eco-green">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-eco-green">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Residential Waste Removal</li>
              <li>Commercial Waste Management</li>
              <li>Construction Debris</li>
              <li>Recycling Services</li>
              <li>Hazardous Waste Disposal</li>
              <li>Emergency Cleanup</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-eco-green" />
                <span className="text-gray-300">1-800-ECO-WASTE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-eco-green" />
                <span className="text-gray-300">info@ecowastepro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-eco-green" />
                <span className="text-gray-300">123 Green Street, Eco City, EC 12345</span>
              </div>
            </div>
            <Button variant="cta" className="mt-4">
              Get Free Quote
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 EcoWaste Pro. All rights reserved. | 
            <Link to="/privacy" className="hover:text-eco-green ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-eco-green ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;