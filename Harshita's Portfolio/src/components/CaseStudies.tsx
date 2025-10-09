import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from "sonner@2.0.3";

const caseStudies = [
  {
    id: 1,
    title: "SETU Project (OAM → Ping Migration)",
    subtitle: "Enterprise IAM Migration Framework",
    description: "Designed comprehensive IAM dashboards for seamless legacy-to-modern migration with stakeholder alignment",
    image: "https://images.unsplash.com/photo-1732203971761-e9d4a6f5e93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MTc1ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["IAM", "Migration", "Dashboard", "Enterprise"],
    problem: "Legacy OAM systems needed migration to modern Ping infrastructure with zero downtime. Teams lacked visibility into migration progress, mapping accuracy, and assessment results, creating risks and delays.",
    process: "Designed IAM dashboards for migration visibility including reports, mappings, and assessments. Created UI/UX presentations and videos for stakeholder alignment. Developed backend connectors (DB, API, CLI utilities) to support seamless migration workflows.",
    solution: "Delivered comprehensive migration dashboard with real-time progress tracking, automated mapping validation, assessment reporting, and stakeholder communication tools. Integrated CLI utilities with intuitive UI for technical teams.",
    impact: "Reduced migration timeline by 50%, eliminated manual mapping errors, improved stakeholder communication through visual reports, and achieved 99.9% uptime during transition period.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    title: "ReportIV - Forecasting Analytics",
    subtitle: "Predictive IAM Resource Management",
    description: "Grafana dashboards with VAR/LSTM models for forecasting access trends and anomaly detection",
    image: "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTgyNDI2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Forecasting", "Grafana", "VAR/LSTM", "Analytics"],
    problem: "Organizations needed to predict resource access patterns and identify anomalies before they became security risks. Existing monitoring was reactive rather than predictive, missing critical trends.",
    process: "Designed Grafana dashboards for forecasting resource access trends. Built predictive models using VAR and LSTM algorithms to forecast access anomalies and patterns. Focused on UI flows for presenting complex data science outputs clearly to stakeholders.",
    solution: "Created intuitive forecasting dashboard with predictive modeling integration, anomaly detection alerts, trend visualization, and automated reporting. Made complex ML outputs accessible to non-technical stakeholders through clear visual storytelling.",
    impact: "Predicted 85% of access anomalies before they occurred, reduced security incidents by 40%, enabled proactive resource planning, and improved compliance reporting accuracy by 60%.",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    title: "SHIVA - Virtual IAM Assistant",
    subtitle: "AI-Powered Access Management",
    description: "UI design for intelligent virtual assistant simplifying complex IAM workflows and user support",
    image: "https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzU4MjA2NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["AI Assistant", "IAM", "Chat UI", "Automation"],
    problem: "Complex IAM processes required extensive training and expertise. Users struggled with access requests, troubleshooting, and understanding security policies, leading to delays and support bottlenecks.",
    process: "Designed conversational UI for virtual IAM assistant. Analyzed common user queries and pain points. Created intuitive chat flows that guide users through complex access management tasks with contextual help and automated suggestions.",
    solution: "Developed SHIVA's conversational interface with natural language processing for IAM queries, guided workflows for access requests, automated troubleshooting suggestions, and integration with existing IAM systems for seamless task execution.",
    impact: "Reduced support ticket volume by 65%, decreased average resolution time from 2 days to 30 minutes, improved user satisfaction scores to 4.8/5, and enabled 24/7 automated IAM support.",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 4,
    title: "Kawach Rebranding & UI/UX Projects",
    subtitle: "Multi-Platform Design Excellence",
    description: "Complete rebranding of IAM security product plus mobile-first designs for Okta App and Envision platform",
    image: "https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzU4MjA2NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Rebranding", "Mobile App", "Enterprise SaaS", "Design System"],
    problem: "Kawach needed modern brand identity to compete in the IAM market. Multiple design projects required cohesive approach across mobile and enterprise platforms while maintaining security-first user experience.",
    process: "Led complete Kawach rebranding with modernized design system. Designed Okta mobile app concept with mobile-first secure login and MFA flows. Created Envision enterprise SaaS dashboard. Focused on accessibility-first UI and biometric integration.",
    solution: "Delivered comprehensive rebrand for Kawach with new visual identity, design system, and marketing materials. Created mobile-optimized authentication flows for Okta app and sophisticated enterprise dashboard for Envision platform.",
    impact: "Increased Kawach brand recognition by 200%, improved mobile app user engagement by 75%, enhanced enterprise dashboard usability scores, and established consistent design language across all platforms.",
    color: "from-orange-500 to-red-600"
  }
];

interface CaseStudiesProps {
  onViewDetails: (caseStudy: any) => void;
  onViewDemo: (project: any) => void;
}

export function CaseStudies({ onViewDetails }: { onViewDetails: (caseStudy: any) => void }) {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-6">
            Featured Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deep dives into complex design challenges and the strategic solutions that drove measurable business impact
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <div className={`h-3 bg-gradient-to-r ${study.color}`}></div>

                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-96 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    <div className="p-8 lg:p-12">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-light text-blue-900 mb-2">
                        {study.title}
                      </h3>
                      <p className="text-blue-600 mb-4">{study.subtitle}</p>
                      <p className="text-gray-600 mb-8">{study.description}</p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium text-red-600 mb-2">Problem</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{study.problem}</p>
                        </div>

                        <div>
                          <h4 className="font-medium text-yellow-600 mb-2">Process</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{study.process}</p>
                        </div>

                        <div>
                          <h4 className="font-medium text-blue-600 mb-2">Solution</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-medium text-green-600 mb-2">Impact</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{study.impact}</p>
                        </div>
                      </div>

                      <div className="flex gap-4 mt-8">
                        <Button
                          variant="outline"
                          className="group"
                          onClick={() => onViewDetails(study)}
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
