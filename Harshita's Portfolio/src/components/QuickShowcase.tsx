import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from "sonner@2.0.3";
import setuOamPing from '../assets/projects/setu-oam-ping.jpg';

const showcaseProjects = [
  {
    id: 1,
    title: "Envision Enterprise Platform",
    category: "Enterprise SaaS",
    image: "https://images.unsplash.com/photo-1659035260002-11d486d6e9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgxNzI5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Enterprise SaaS dashboard showcasing advanced UI/UX design principles",
    tags: ["SaaS", "Dashboard"],
    problem: "Enterprise administrators struggled with fragmented dashboards and disjointed data views across multiple IAM and application monitoring tools. The lack of a unified visualization platform made it difficult to gain actionable insights, compare performance metrics, or identify cross-system dependencies quickly.",
    process: "Led stakeholder workshops to understand user journeys, business goals, and pain points across security, operations, and management teams. Created information architecture maps and low-fidelity prototypes focusing on data clarity, scalability, and consistency. Iteratively tested wireframes with users to refine navigation and interaction models for complex IAM datasets.",
    solution: "Designed Envision, a modular enterprise platform that consolidates IAM analytics, system health, and application insights into one cohesive interface. Built a clean, role-based dashboard system emphasizing readability, responsiveness, and real-time visualization. Applied a minimalist design system with consistent iconography, typography, and color logic to enhance usability and reduce cognitive load.",
    impact: "Increased user efficiency in monitoring and analysis tasks by 65%, reduced dashboard switching time by 50%, improved data comprehension across roles, and established a scalable design framework adaptable to future enterprise modules — positioning Envision as a unified command center for enterprise visibility.",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 2,
    title: "ReportIV - Forecasting Analytics",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODE4NjE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Real-time migration progress tracking and assessment visualization",
    tags: ["Migration", "Analytics"],
    problem: "Organizations needed to predict resource access patterns and identify anomalies before they became security risks. Existing monitoring was reactive rather than predictive, missing critical trends.",
    process: "Designed Grafana dashboards for forecasting resource access trends. Built predictive models using VAR and LSTM algorithms to forecast access anomalies and patterns. Focused on UI flows for presenting complex data science outputs clearly to stakeholders.",
    solution: "Created intuitive forecasting dashboard with predictive modeling integration, anomaly detection alerts, trend visualization, and automated reporting. Made complex ML outputs accessible to non-technical stakeholders through clear visual storytelling.",
    impact: "Predicted 85% of access anomalies before they occurred, reduced security incidents by 40%, enabled proactive resource planning, and improved compliance reporting accuracy by 60%.",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    title: "Okta Mobile App Concept",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1756576357697-13dfc5fff61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4MjQ5NDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Mobile-first secure login flows with biometric authentication",
    tags: ["Mobile", "Security"],
    problem: "The legacy banking interfaces were cluttered, inconsistent, and lacked trust indicators. Customers faced friction during login, MFA, and onboarding flows, leading to frustration, drop-offs, and reduced engagement.",
    process: "Conducted user journey mapping and heuristic evaluation of existing flows. Defined personas for retail and corporate customers to tailor experiences. Focused on accessibility, minimalism, and emotional design to instill trust while aligning with banking security requirements.",
    solution: "Designed a modern, user-centric banking app powered by Okta Customer Identity Management (CIM). Created seamless authentication experiences with clean UI, adaptive MFA screens, and contextual feedback. The interface emphasized trust through micro-interactions, clear messaging, and visual consistency across devices.",
    impact: "Reduced user drop-offs during login and onboarding by 40%, enhanced customer trust with transparent security flows, improved task completion rates by 55%, and elevated the overall digital experience — making secure banking feel effortless.",
    color: "from-blue-500 to-indigo-600"

  },
  {
    id: 4,
    title: "SETU Migration Portal",
    category: "Enterprise IAM",
    image: setuOamPing,
    description: "OAM to Ping migration interface with comprehensive reporting",
    tags: ["IAM", "Migration"],
    problem: "Legacy OAM systems needed migration to modern Ping infrastructure with zero downtime. Teams lacked visibility into migration progress, mapping accuracy, and assessment results, creating risks and delays.",
    process: "Designed IAM dashboards for migration visibility including reports, mappings, and assessments. Created UI/UX presentations and videos for stakeholder alignment. Developed backend connectors (DB, API, CLI utilities) to support seamless migration workflows.",
    solution: "Delivered comprehensive migration dashboard with real-time progress tracking, automated mapping validation, assessment reporting, and stakeholder communication tools. Integrated CLI utilities with intuitive UI for technical teams.",
    impact: "Reduced migration timeline by 50%, eliminated manual mapping errors, improved stakeholder communication through visual reports, and achieved 99.9% uptime during transition period.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 5,
    title: "SHIVA AI Assistant",
    category: "AI Interface",
    image: "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTgyNDI2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Virtual IAM assistant UI for simplified access management workflows",
    tags: ["AI", "IAM"],
    problem: "Complex IAM processes required extensive training and expertise. Users struggled with access requests, troubleshooting, and understanding security policies, leading to delays and support bottlenecks.",
    process: "Designed conversational UI for virtual IAM assistant. Analyzed common user queries and pain points. Created intuitive chat flows that guide users through complex access management tasks with contextual help and automated suggestions.",
    solution: "Developed SHIVA's conversational interface with natural language processing for IAM queries, guided workflows for access requests, automated troubleshooting suggestions, and integration with existing IAM systems for seamless task execution.",
    impact: "Reduced support ticket volume by 65%, decreased average resolution time from 2 days to 30 minutes, improved user satisfaction scores to 4.8/5, and enabled 24/7 automated IAM support.",
    color: "from-purple-500 to-pink-600"
  }
];

// Mapping function: QuickShowcase project → CaseStudy
function mapProjectToCaseStudy(project: any) {
  return {
    id: project.id,
    title: project.title,
    subtitle: project.category,
    description: project.description,
    image: project.image,
    tags: project.tags,
    problem: project.problem,
    process: project.process,
    solution: project.solution,
    impact: project.impact,
    color: "from-blue-500 to-indigo-600"
  };
}

interface QuickShowcaseProps {
  onViewDetails: (caseStudy: any) => void;
  onViewAllProjects: () => void;
}

export function QuickShowcase({ onViewDetails, onViewAllProjects }: QuickShowcaseProps) {
  return (
    <section id="showcase" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-6">
            Quick Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A curated selection of projects demonstrating versatility across different domains and platforms
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-colors"
                        onClick={() => {
                          toast.success(`Opening ${project.title} details...`);
                          const caseStudy = mapProjectToCaseStudy(project);
                          onViewDetails(caseStudy);
                        }}
                      >
                        <Eye size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 hover:bg-blue-950/20 rounded-full transition-colors"
            onClick={() => {
              toast.success("Redirecting to complete portfolio...");
              onViewAllProjects();
            }}
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}