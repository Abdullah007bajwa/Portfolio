import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const MobileBottomNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'projects', 'contact'], 80);

  useEffect(() => {
    const checkMobile = () => {
      setIsVisible(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Work', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-background/95 backdrop-blur-md border-t border-border/50 px-4 py-2">
        <div className="flex justify-around items-center max-w-sm mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                aria-label={`Navigate to ${item.label}`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;