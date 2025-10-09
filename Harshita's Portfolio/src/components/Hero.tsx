import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  onViewAllProjects: () => void;
}

export function Hero({ onViewAllProjects }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 from-gray-900 via-gray-800 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-blue-900 mb-6">
            Harshita Mathur
          </h1>
          
          <motion.p
            className="text-xl md:text-2xl text-blue-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            UI/UX Designer & Developer
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting intuitive digital experiences through the perfect blend of design thinking and data-driven insights
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white rounded-full px-6 py-3 shadow-md border border-blue-100">
              <span className="text-blue-800">UI/UX Design</span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-md border border-blue-100">
              <span className="text-blue-800">Java Coding</span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-md border border-blue-100">
              <span className="text-blue-800">AI/ML</span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-md border border-blue-100">
              <span className="text-blue-800">Data Visualization</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={() => scrollToSection('showcase')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              onClick={onViewAllProjects}
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:bg-blue-950/20 rounded-full px-8 py-3 transition-all duration-300"
            >
              All Projects
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="ghost"
              size="lg"
              className="text-blue-600 hover:bg-blue-50 hover:bg-blue-950/20 rounded-full px-8 py-3 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ChevronDown size={32} className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}