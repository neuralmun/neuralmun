import { Link } from 'react-router-dom';
import { Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Neural MUN</h3>
            <p className="text-primary-foreground/80">
              Where Voices Ignite Visions. Empowering the next generation of global leaders through diplomacy and debate.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/committees" className="block hover:text-accent transition-colors">
                Committees
              </Link>
              <Link to="/registration" className="block hover:text-accent transition-colors">
                Registration
              </Link>
              <Link to="/contact" className="block hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>neuralmun@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Global Platform</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Neural MUN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;