import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Linkedin, MapPin, Phone, Send, Calendar } from 'lucide-react';
import { useState } from 'react';
import { toast } from "sonner@2.0.3";
import { useAnalytics } from "../context/AnalyticsContext";
import API_BASE from "../config";


export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackContactSubmission } = useAnalytics();

  /* const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Track contact submission
      await trackContactSubmission({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        source: 'contact-form'
      });

      toast.success("Message sent successfully! I'll get back to you within 24 hours.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }; */

  const openGoogleCalendar = () => {
    const title = encodeURIComponent("30-Minute Chat with Harshita");
    const details = encodeURIComponent("Let's discuss your project, collaboration idea, or any questions you might have.");
    const location = encodeURIComponent("Virtual / Google Meet");

    // Set date & time for default, e.g., today 3 PM IST
    const startDate = new Date();
    startDate.setHours(15, 0, 0); // 3:00 PM
    const endDate = new Date(startDate.getTime() + 30*60000); // +30 minutes

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d\d\d/g,"");
    }

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${formatDate(startDate)}/${formatDate(endDate)}`;

    window.open(calendarUrl, "_blank");
  };

  const openGmail = () => {
    const email = "mathurharshita23@gmail.com";
    const subject = encodeURIComponent("Let's Connect / Project Discussion");
    const body = encodeURIComponent(
      "Hi Harshita,\n\nI would like to discuss a project/collaboration opportunity with you.\n\nBest regards,"
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailLink, "_blank");
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("${API_BASE}/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),  // ✅ send subject too
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("⚠️ Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether it's a new project, collaboration opportunity, or just a conversation about design and technology, 
            I'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            id="getintouch"
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-blue-900 mb-6">Get In Touch</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm always open to discussing new opportunities, sharing insights about UX/UI design, 
                  or exploring how we can work together to solve complex design challenges.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <button 
                      onClick={() => {
                        toast.success("Opening email client...");
                        openGmail();
                      }}
                      className="text-blue-600 hover:text-blue-800 transition-colors text-left"
                    >
                      mathurharshita23@gmail.com
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <button 
                      onClick={() => {
                        window.open("https://www.linkedin.com/in/harshita-mathur-564a76195", "_blank");
                        toast.success("Opening LinkedIn profile...");
                      }}
                      className="text-blue-600 hover:text-blue-800 transition-colors text-left"
                    >
                      linkedin.com/in/harshita-mathur-564a76195
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <button 
                      onClick={() => {
                        window.location.href = "tel:+917014982933";
                        toast.success("Opening phone dialer...");
                      }}
                      className="text-blue-600 hover:text-blue-800 transition-colors text-left"
                    >
                      +91 7014982933
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Schedule a Call</p>
                    <button
                      onClick={() => {
                        toast.success("Redirecting to calendar booking...");
                        openGoogleCalendar();
                      }}
                      className="text-blue-600 hover:text-blue-800 transition-colors text-left"
                    >
                      Book a 30-minute chat
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-medium text-gray-900 mb-4">Response Time</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email</span>
                    <span className="text-blue-600">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">LinkedIn</span>
                    <span className="text-blue-600">Same day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Project Inquiries</span>
                    <span className="text-blue-600">Within 48 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-blue-900 mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What would you like to discuss?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, collaboration idea, or any questions you might have..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <p className="text-sm text-gray-500">
                      I'll get back to you within 24 hours
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-light text-blue-900 mb-4">
              Prefer a Different Way to Connect?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm active on various platforms and always happy to connect through your preferred channel.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/harshita-mathur-564a76195", "_blank");
                  toast.success("Opening LinkedIn for messaging...");
                }}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn Message
              </Button>
              
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => {
                  toast.success("Opening Google Calendar to schedule your call...");
                  openGoogleCalendar();
                }}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Call
              </Button>
              
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => {
                  toast.success("Opening email client with pre-filled message...");
                  openGmail();
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
                Direct Email
              </Button>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}