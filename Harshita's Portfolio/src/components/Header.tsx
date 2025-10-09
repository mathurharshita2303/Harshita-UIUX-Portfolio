import { useState } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../context/ThemeContext';
import { toast } from "sonner";

interface HeaderProps {
  onViewAllProjects: () => void;
  onViewPrivacyPolicy: () => void;
  onViewTermsOfService: () => void;
  onViewAnalytics: () => void;
}

export function Header({ onViewAllProjects, onViewPrivacyPolicy, onViewTermsOfService, onViewAnalytics }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    toast.success("Downloading Harshita's resume...");
    const link = document.createElement("a");
    link.href = "/resume.pdf";  // file path in public folder
    link.download = "Harshita_Mathur_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-semibold text-blue-600">
            Harshita Mathur
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('case-studies')}
                className="text-foreground"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection('showcase')}
                className="text-foreground"
              >
                Showcase
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-foreground"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground"
              >
                Contact
              </button>
              <button
                onClick={onViewAllProjects}
                className="text-foreground"
              >
                All Projects
              </button>
              <button
                onClick={onViewAnalytics}
                className="text-foreground"
              >
                Analytics
              </button>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hover:bg-accent"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadResume}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:bg-blue-950/20"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button & Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:bg-accent"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('case-studies')}
                className="text-left text-foreground"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection('showcase')}
                className="text-left text-foreground"
              >
                Showcase
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-foreground"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground"
              >
                Contact
              </button>
              <button
                onClick={onViewAllProjects}
                className="text-left text-foreground"
              >
                All Projects
              </button>
              <button
                onClick={onViewAnalytics}
                className="text-left text-foreground"
              >
                Analytics
              </button>

              {/* Mobile Resume Button */}
              <Button
                variant="outline"
                onClick={handleDownloadResume}
                className="mt-4 border-blue-600 text-blue-600 hover:bg-blue-50 hover:bg-blue-950/20"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}