import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from "sonner@2.0.3";

// ✅ Add caseStudies constant here
const caseStudies = [
  {
    id: 1,
    title: "SETU Project (OAM → Ping Migration)",
    subtitle: "Enterprise IAM Migration Framework",
    description: "Designed comprehensive IAM dashboards for seamless legacy-to-modern migration with stakeholder alignment",
    image: "https://images.unsplash.com/photo-1732203971761-e9d4a6f5e93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MTc1ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTgyNDI2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzU4MjA2NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzU4MjA2NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Rebranding", "Mobile App", "Enterprise SaaS", "Design System"],
    problem: "Kawach needed modern brand identity to compete in the IAM market. Multiple design projects required cohesive approach across mobile and enterprise platforms while maintaining security-first user experience.",
    process: "Led complete Kawach rebranding with modernized design system. Designed Okta mobile app concept with mobile-first secure login and MFA flows. Created Envision enterprise SaaS dashboard. Focused on accessibility-first UI and biometric integration.",
    solution: "Delivered comprehensive rebrand for Kawach with new visual identity, design system, and marketing materials. Created mobile-optimized authentication flows for Okta app and sophisticated enterprise dashboard for Envision platform.",
    impact: "Increased Kawach brand recognition by 200%, improved mobile app user engagement by 75%, enhanced enterprise dashboard usability scores, and established consistent design language across all platforms.",
    color: "from-orange-500 to-red-600"
  }
];

interface CaseStudyDetailsProps {
  caseStudy: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tags: string[];
    problem: string;
    process: string;
    solution: string;
    impact: string;
    color: string;
  };
  onBack: () => void;
}

export function CaseStudyDetails({ caseStudy, onBack }: CaseStudyDetailsProps) {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Button variant="ghost" onClick={onBack} className="mb-8 hover:bg-accent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{caseStudy.subtitle}</p>
              <p className="text-lg mb-8">{caseStudy.description}</p>
            </div>

            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} rounded-2xl transform rotate-3`}></div>
              <ImageWithFallback
                src={caseStudy.image}
                alt={caseStudy.title}
                className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Detail Sections */}
        <div className="grid lg:grid-cols-2 gap-12">
          {[
            { title: "The Problem", text: caseStudy.problem, color: "text-red-600" },
            { title: "The Process", text: caseStudy.process, color: "text-blue-600" },
            { title: "The Solution", text: caseStudy.solution, color: "text-green-600" },
            { title: "The Impact", text: caseStudy.impact, color: "text-purple-600" },
          ].map((section, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <h2 className={`text-2xl font-bold mb-4 ${section.color}`}>{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="mt-16 text-center">
          <Card className="p-12 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent>
              <h2 className="text-3xl font-bold mb-4">Interested in collaborating?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how I can help bring your next project to life with thoughtful design and seamless user experiences.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById('getintouch')?.scrollIntoView({ behavior: 'smooth' });
                  onBack();
                  toast.success("Let's start a conversation!");
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Get in Touch
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
