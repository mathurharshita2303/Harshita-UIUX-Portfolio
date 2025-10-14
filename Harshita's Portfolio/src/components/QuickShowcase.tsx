import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from "sonner@2.0.3";
import { caseStudies } from './CaseStudyDetails';
import setuOamPing from '../assets/projects/setu-oam-ping.jpg';
import reportiv from '../assets/projects/reportiv-dashboard.png';
import shiva from '../assets/projects/Shiva.png';
import oktaui from '../assets/projects/oktaui.png';
import envision from '../assets/projects/envision.png';

const showcaseProjects = [
  {
          id: 1,
          title: 'Migration Framework',
          category: 'Identity & Access Management',
          description: 'Enterprise-level identity and access management framework migration from Oracle Access Manager to Ping Identity.',
          image: setuOamPing,
          tags: ['Enterprise IAM', 'Migration', 'Security'],
          year: '2025',
          duration: '1 year',
          problem: "Legacy OAM systems needed migration to modern Ping infrastructure with zero downtime. Teams lacked visibility into migration progress, mapping accuracy, and assessment results, creating risks and delays.",
                                  process: "Designed IAM dashboards for migration visibility including reports, mappings, and assessments. Created UI/UX presentations and videos for stakeholder alignment. Developed backend connectors (DB, API, CLI utilities) to support seamless migration workflows.",
                                  solution: "Delivered comprehensive migration dashboard with real-time progress tracking, automated mapping validation, assessment reporting, and stakeholder communication tools. Integrated CLI utilities with intuitive UI for technical teams.",
                                  impact: "Reduced migration timeline by 90%, eliminated manual mapping errors, improved stakeholder communication through visual reports, and achieved 99.9% uptime during transition period.",
                                  color: "from-blue-500 to-indigo-600"
        },
        {
          id: 2,
          title: 'Resource Prediction Dashboards',
          category: 'Data Visualization',
          description: 'Advanced analytics dashboards for financial forecasting with machine learning integration.',
          image: reportiv,
          tags: ['Analytics', 'ML Integration', 'Finance'],
          year: '2024',
          duration: '2 months',
                                  problem: "Organizations needed to predict resource access patterns and identify anomalies before they became security risks. Existing monitoring was reactive rather than predictive, missing critical trends.",
                                  process: "Designed Grafana dashboards for forecasting resource access trends. Built predictive models using VAR and LSTM algorithms to forecast access anomalies and patterns. Focused on UI flows for presenting complex data science outputs clearly to stakeholders.",
                                  solution: "Created intuitive forecasting dashboard with predictive modeling integration, anomaly detection alerts, trend visualization, and automated reporting. Made complex ML outputs accessible to non-technical stakeholders through clear visual storytelling.",
                                  impact: "Predicted 85% of access anomalies before they occurred, reduced security incidents by 40%, enabled proactive resource planning, and improved compliance reporting accuracy by 60%.",
                                  color: "from-emerald-500 to-teal-600"
        },
        {
          id: 3,
          title: 'Virtual IAM Assistant',
          category: ['AI', 'UX Design'],
          description: 'AI-powered virtual assistant for identity and access management with natural language processing.',
          image: shiva,
          tags: ['AI Assistant', 'NLP', 'Chatbot UI'],
          year: '2024',
          duration: '1 month',
          problem: "Complex IAM processes required extensive training and expertise. Users struggled with access requests, troubleshooting, and understanding security policies, leading to delays and support bottlenecks.",
              process: "Designed conversational UI for virtual IAM assistant. Analyzed common user queries and pain points. Created intuitive chat flows that guide users through complex access management tasks with contextual help and automated suggestions.",
              solution: "Developed virtual IAM assistant's conversational interface with natural language processing for IAM queries, guided workflows for access requests, automated troubleshooting suggestions, and integration with existing IAM systems for seamless task execution.",
              impact: "Reduced support ticket volume by 65%, decreased average resolution time from 2 days to 30 minutes, improved user satisfaction scores to 4.8/5, and enabled 24/7 automated IAM support.",
              color: "from-purple-500 to-pink-600"
        },
        {
          id: 4,
          title: 'Mobile Banking App',
          category: 'Mobile UX',
          description: 'User-centered design for next-generation mobile banking experience.',
          image: oktaui,
          tags: ['Mobile UX', 'FinTech', 'User Research'],
          year: '2024',
          duration: '3 months',
                                  problem: "The legacy banking interfaces were cluttered, inconsistent, and lacked trust indicators. Customers faced friction during login, MFA, and onboarding flows, leading to frustration, drop-offs, and reduced engagement.",
                                  process: "Conducted user journey mapping and heuristic evaluation of existing flows. Defined personas for retail and corporate customers to tailor experiences. Focused on accessibility, minimalism, and emotional design to instill trust while aligning with banking security requirements.",
                                  solution: "Designed a modern, user-centric banking app powered by Customer Identity & Access Management (CIAM). Created seamless authentication experiences with clean UI, adaptive MFA screens, and contextual feedback. The interface emphasized trust through micro-interactions, clear messaging, and visual consistency across devices.",
                                  impact: "Reduced user drop-offs during login and onboarding by 40%, enhanced customer trust with transparent security flows, improved task completion rates by 55%, and elevated the overall digital experience — making secure banking feel effortless.",
                                  color: "from-blue-500 to-indigo-600"
        },
        {
          id: 5,
          title: 'Saas Enterprise Platform',
          category: 'Web Design',
          description: 'Modern e-commerce platform with focus on accessibility and conversion optimization.',
          image: envision,
          tags: ['E-commerce', 'Accessibility', 'Conversion'],
          year: '2024',
          duration: '5 months',
                                  problem: "Enterprise administrators struggled with fragmented dashboards and disjointed data views across multiple IAM and application monitoring tools. The lack of a unified visualization platform made it difficult to gain actionable insights, compare performance metrics, or identify cross-system dependencies quickly.",
                                  process: "Led stakeholder workshops to understand user journeys, business goals, and pain points across security, operations, and management teams. Created information architecture maps and low-fidelity prototypes focusing on data clarity, scalability, and consistency. Iteratively tested wireframes with users to refine navigation and interaction models for complex IAM datasets.",
                                  solution: "Designed a modular enterprise platform that consolidates IAM analytics, system health, and application insights into one cohesive interface. Built a clean, role-based dashboard system emphasizing readability, responsiveness, and real-time visualization. Applied a minimalist design system with consistent iconography, typography, and color logic to enhance usability and reduce cognitive load.",
                                  impact: "Increased user efficiency in monitoring and analysis tasks by 65%, reduced dashboard switching time by 50%, improved data comprehension across roles, and established a scalable design framework adaptable to future enterprise modules — positioning it as a unified command center for enterprise visibility.",
                                  color: "from-orange-500 to-red-600"

        }
];

function mapProjectToCaseStudy(project: any) {
  const matchedStudy = caseStudies.find(cs => cs.id === project.id);

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
    color: project.color || "from-blue-500 to-indigo-600",
    visuals: matchedStudy?.visuals || [] // ✅ Add visuals safely
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