import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl transform rotate-3"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU4MTY5NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional workspace"
                className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                I'm a passionate UI/UX Designer & Developer who thrives at the intersection of design and coding. 
                My unique approach combines creative design thinking with analytical rigor to create solutions that 
                are not only beautiful but also data-driven and user-centered.
              </p>
              
              <p className="text-lg leading-relaxed">
                With extensive experience in enterprise SaaS environments, I specialize in Identity Access Management (IAM) 
                systems and complex data visualization challenges. My work spans from crafting intuitive user interfaces 
                to developing sophisticated forecasting dashboards that turn complex data into actionable insights.
              </p>
              
              <p className="text-lg leading-relaxed">
                I believe that great design is more than aesthetics—it's about solving real problems and creating 
                meaningful experiences that bridge the gap between human needs and technical capabilities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-light text-blue-600 mb-2">2</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-blue-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-blue-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Specializations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}