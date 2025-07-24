import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useScrollDirection } from '@/hooks/useScrollDirection';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollDirection, scrollY } = useScrollDirection();
  const activeSection = useScrollSpy(['hero', 'about', 'projects', 'contact'], 80);

  const isScrolled = scrollY > 50;
  const isHidden = scrollDirection === 'down' && scrollY > 200 && !isMobileMenuOpen;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return Sun;
      case 'dark': return Moon;
      default: return Monitor;
    }
  };

  const ThemeIcon = getThemeIcon();

  const cycleTheme = () => {
    const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        switch (e.key) {
          case 'a':
            e.preventDefault();
            scrollToSection('about');
            break;
          case 'p':
            e.preventDefault();
            scrollToSection('projects');
            break;
          case 'c':
            e.preventDefault();
            scrollToSection('contact');
            break;
          case 't':
            e.preventDefault();
            cycleTheme();
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [theme]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      } ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold gradient-text">Abdullah</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 relative ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            ))}
            
            <div className="flex items-center gap-2 ml-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={cycleTheme}
                className="w-9 h-9 hover:bg-muted/50"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
              >
                <ThemeIcon className="w-4 h-4" />
              </Button>
                <a
                  href="/Curriculum Vitae.pdf"
                  download
                  className="gap-2 inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium border-primary/20 hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="Download resume"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>

            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={cycleTheme}
              className="w-9 h-9 hover:bg-muted/50"
              aria-label="Toggle theme"
            >
              <ThemeIcon className="w-4 h-4" />
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-6 space-y-2">
              {[
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <a
                  href="/Curriculum Vitae.pdf"
                  download
                  className="w-full justify-center gap-2 inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium border-primary/20 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;