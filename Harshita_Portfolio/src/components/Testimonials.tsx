import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Quote, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from "sonner@2.0.3";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Harshita's ability to bridge technical complexity with intuitive design is exceptional. The IAM dashboard she redesigned reduced our support tickets by 60% and significantly improved user satisfaction. Her attention to detail and stakeholder communication skills made the entire project seamless."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Engineering Lead",
    company: "DataFlow Analytics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Working with Harshita on the ReportIV forecasting platform was a game-changer. She transformed complex ML models into accessible visualizations that our business teams actually use daily. Her collaborative approach and technical understanding made her an invaluable partner throughout the development process."
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    role: "Chief Technology Officer",
    company: "SecureAuth Systems",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Harshita's expertise in enterprise security interfaces is unmatched. She doesn't just design beautiful UIs—she understands the underlying security principles and user workflows. Her work on our identity management tools has been praised by both our internal teams and enterprise clients."
  },
  {
    id: 4,
    name: "James Thompson",
    role: "VP of User Experience",
    company: "Innovation Labs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Harshita brings a unique analytical mindset to UX design. Her data-driven approach to design decisions and ability to validate concepts through user research sets her apart. The mobile applications she designed for us saw a 40% increase in user engagement within the first quarter."
  }
];

const collaborationHighlights = [
  {
    title: "Cross-functional Leadership",
    description: "Led design initiatives across engineering, product, and business teams",
    icon: "👥"
  },
  {
    title: "Stakeholder Alignment",
    description: "Facilitated design workshops with C-level executives and technical teams",
    icon: "🎯"
  },
  {
    title: "Agile Integration",
    description: "Seamlessly integrated design processes with agile development workflows",
    icon: "⚡"
  },
  {
    title: "Mentorship",
    description: "Mentored junior designers and established design system best practices",
    icon: "🌟"
  }
];

interface TestimonialsProps {
  onShowFeedbackForm: () => void;
}

export function Testimonials({ onShowFeedbackForm }: TestimonialsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-6">
            Client Testimonials & Collaboration
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What colleagues and clients say about working together to deliver exceptional results
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-2 -right-2 bg-blue-600 text-white p-1 rounded-full">
                        <Quote size={12} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                      <p className="text-blue-600 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      
                      <div className="flex items-center mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Collaboration Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-blue-900 mb-4">
              Collaboration Strengths
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Building strong partnerships and fostering collaborative environments for successful project outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
                  <div className="text-3xl mb-4">{highlight.icon}</div>
                  <h4 className="font-medium text-gray-900 mb-3">{highlight.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-xl font-medium text-blue-900 mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's work together to create exceptional user experiences that drive business results. 
              I'm always excited to take on new challenges and collaborate with amazing teams.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    toast.success("Let's start a conversation!");
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Start a Conversation
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('feedbackForm');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                  onShowFeedbackForm();
                  toast.success("Share your experience working with me!");
                }}
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Leave Your Feedback
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}