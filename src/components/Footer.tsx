import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-current" /> by{' '}
            <span className="gradient-text font-semibold">Abdullah Bajwa</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;