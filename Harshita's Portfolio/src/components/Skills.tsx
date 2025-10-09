import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { 
  Figma, 
  Palette, 
  Code, 
  BarChart3, 
  Shield, 
  Eye, 
  Layers, 
  TrendingUp,
  Database,
  Smartphone,
  Monitor,
  Users
} from 'lucide-react';
import { toast } from "sonner@2.0.3";

const skillCategories = [
  {
    title: "Design Tools",
    skills: [
      { name: "Figma", icon: Figma, proficiency: 95, color: "text-purple-600" },
      { name: "Adobe XD", icon: Palette, proficiency: 90, color: "text-pink-600" },
      { name: "Sketch", icon: Layers, proficiency: 85, color: "text-orange-600" },
      { name: "Principle", icon: Smartphone, proficiency: 80, color: "text-blue-600" }
    ]
  },
  {
    title: "Development",
    skills: [
      { name: "Java", icon: Code, proficiency: 85, color: "text-red-600" },
      { name: "React", icon: Monitor, proficiency: 80, color: "text-blue-500" },
      { name: "HTML/CSS", icon: Code, proficiency: 90, color: "text-green-600" },
      { name: "JavaScript", icon: Code, proficiency: 75, color: "text-yellow-600" }
    ]
  },
  {
    title: "Analytics & Data",
    skills: [
      { name: "Grafana", icon: BarChart3, proficiency: 90, color: "text-orange-500" },
      { name: "Forecasting", icon: TrendingUp, proficiency: 85, color: "text-emerald-600" },
      { name: "Data Visualization", icon: BarChart3, proficiency: 88, color: "text-indigo-600" },
      { name: "SQL", icon: Database, proficiency: 75, color: "text-gray-600" }
    ]
  },
  {
    title: "Specializations",
    skills: [
      { name: "IAM Systems", icon: Shield, proficiency: 92, color: "text-red-500" },
      { name: "Accessibility", icon: Eye, proficiency: 85, color: "text-green-500" },
      { name: "User Research", icon: Users, proficiency: 88, color: "text-purple-500" },
      { name: "Enterprise UX", icon: Layers, proficiency: 90, color: "text-blue-700" }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-6">
            Skills & Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning design, development, and analytics to deliver end-to-end solutions
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium text-blue-900 mb-6 text-center">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center space-x-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        onClick={() => {
                          toast.success(`${skill.name} - ${skill.proficiency}% proficiency. Click to learn more about my experience!`);
                        }}
                      >
                        <div className={`p-2 rounded-lg bg-gray-100 ${skill.color}`}>
                          <skill.icon size={20} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-800">{skill.name}</span>
                            <span className="text-sm text-gray-600">{skill.proficiency}%</span>
                          </div>
                          
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional certifications/achievements */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-medium text-blue-900 mb-4">
              Certifications & Achievements
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-medium text-gray-800 mb-2">IAM Specialist</h4>
              <p className="text-sm text-gray-600">Certified in Identity Access Management systems</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Eye className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-medium text-gray-800 mb-2">Accessibility Expert</h4>
              <p className="text-sm text-gray-600">WCAG 2.1 AA compliance specialist</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-medium text-gray-800 mb-2">Data Analytics</h4>
              <p className="text-sm text-gray-600">Advanced forecasting and visualization</p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}