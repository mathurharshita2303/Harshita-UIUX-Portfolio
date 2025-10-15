import { motion } from 'motion/react';
import { Mail, Linkedin, Heart, ArrowUp, Phone } from 'lucide-react';
import { toast } from "sonner@2.0.3";

interface FooterProps {
  onViewPrivacyPolicy: () => void;
  onViewTermsOfService: () => void;
  onShowFeedbackForm: () => void;
}

export function Footer({ onViewPrivacyPolicy, onViewTermsOfService, onShowFeedbackForm }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const openGmail = () => {
      const email = "mathurharshita23@gmail.com";
      const subject = encodeURIComponent("Let's Connect / Project Discussion");
      const body = encodeURIComponent(
        "Hi Harshita,\n\nI would like to discuss a project/collaboration opportunity with you.\n\nBest regards,"
      );

      const gmailLink = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
      window.open(gmailLink, "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-light text-white">
              Harshita Mathur
            </h3>
            <p className="text-gray-300 leading-relaxed">
              UI/UX Designer & Analyst crafting intuitive digital experiences through 
              the perfect blend of design thinking and data-driven insights.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  openGmail();
                  toast.success("Opening email client...");
                }}
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </button>
              <button
                onClick={() => {
                  window.open("https://www.linkedin.com/in/harshita-mathur-564a76195", "_blank");
                  toast.success("Opening LinkedIn profile...");
                }}
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </button>
              <button
                onClick={() => {
                  window.location.href = "tel:+917014982933";
                  toast.success("Opening phone dialer...");
                }}
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone size={20} />
              </button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-medium text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              <button
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                About Me
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('case-studies');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Case Studies
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('showcase');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Portfolio
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('skills');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Skills & Tools
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </button>
              <button
                onClick={onShowFeedbackForm}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Leave Feedback
              </button>
            </div>
          </motion.div>

          {/* Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-medium text-white mb-6">Specializations</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>IAM Dashboard Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Data Visualization</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Forecasting Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Enterprise SaaS</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Accessibility Design</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} Harshita Mathur. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and attention to detail.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button 
                className="hover:text-blue-400 transition-colors"
                onClick={onViewPrivacyPolicy}
              >
                Privacy Policy
              </button>
              <button 
                className="hover:text-blue-400 transition-colors"
                onClick={onViewTermsOfService}
              >
                Terms of Service
              </button>
              <span>All rights reserved.</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}