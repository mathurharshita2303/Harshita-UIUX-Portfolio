import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Eye, ExternalLink, Filter, Search, Grid, List } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useState } from 'react';
import { toast } from "sonner@2.0.3";
import { caseStudies } from './CaseStudyDetails';
import setuOamPing from '../assets/projects/setu-oam-ping.jpg';
import reportiv from '../assets/projects/reportiv-dashboard.png';
import shiva from '../assets/projects/Shiva.png';
import oktaui from '../assets/projects/oktaui.png';
import envision from '../assets/projects/envision.png';

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


interface allProjects {
  onBack: () => void;
  onViewDetails: (caseStudy: any) => void;
}

interface AllProjectsProps {
  onBack: () => void;
  onViewDetails: (caseStudy: any) => void;
}

export function AllProjects({ onBack, onViewDetails }: AllProjectsProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const allProjects = [
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

  const categories = ['all', 'IAM Framework', 'Data Visualization', 'AI/UX Design', 'Brand Design', 'Mobile UX', 'Web Design', 'Healthcare UX', 'EdTech'];

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });




  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 hover:bg-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>

          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">All Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my complete portfolio of design and development projects spanning various industries and technologies.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-6 rounded-xl border">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {allProjects.length} projects
            </p>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Badge variant="secondary">
                            {project.year}
                          </Badge>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => {
                              toast.success(`Viewing ${project.title} details...`);
                              const caseStudy = mapProjectToCaseStudy(project);
                              onViewDetails(caseStudy);

                            }}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>

                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {project.duration}
                          </span>
                        </div>

                        <h3 className="font-bold mb-2 line-clamp-1">
                          {project.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-4 gap-6 items-center">
                        <div className="relative overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                          />

                        </div>

                        <div className="md:col-span-2">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {project.category}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {project.year}
                            </Badge>
                          </div>

                          <h3 className="font-bold mb-2">{project.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-1">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <p className="text-xs text-muted-foreground mb-2">
                            Duration: {project.duration}
                          </p>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                toast.success(`Viewing ${project.title} details...`);
                                const caseStudy = mapProjectToCaseStudy(project);
                                onViewDetails(caseStudy);
                              }}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Button>

                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="p-12 bg-gradient-to-br from-blue-50 to-indigo-50 from-blue-950/20 to-indigo-950/20">
            <CardContent>
              <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how my experience across these diverse projects can bring value to your next venture.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    document.getElementById('getintouch')?.scrollIntoView({ behavior: 'smooth' });
                    onBack();
                    toast.success("Let's start a conversation!");
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Start a Project
                </Button>

              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}