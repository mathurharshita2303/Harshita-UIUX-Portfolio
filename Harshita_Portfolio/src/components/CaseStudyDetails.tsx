import { useState } from "react";
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from "sonner@2.0.3";

// ✅ Imported visuals
import chart1 from "../assets/case-studies/reportiv/chart-1.jpg";
import chart2 from "../assets/case-studies/reportiv/chart-2.jpg";
import chart3 from "../assets/case-studies/reportiv/chart-3.jpg";
import chart4 from "../assets/case-studies/reportiv/chart-4.jpg";
import chart5 from "../assets/case-studies/reportiv/chart-5.jpg";
import chart6 from "../assets/case-studies/reportiv/chart-6.jpg";

// ✅ Imported visuals
import screen1 from "../assets/case-studies/ShivaAI/screen-1.png";
import screen2 from "../assets/case-studies/ShivaAI/screen-2.png";
import screen3 from "../assets/case-studies/ShivaAI/screen-3.png";
import screen4 from "../assets/case-studies/ShivaAI/screen-4.png";
import screen5 from "../assets/case-studies/ShivaAI/screen-5.png";
import screen6 from "../assets/case-studies/ShivaAI/screen-6.png";

// ✅ Imported visuals
import screen7 from "../assets/case-studies/okta/screen0.png";
import screen8 from "../assets/case-studies/okta/screen1.jpg";
import screen9 from "../assets/case-studies/okta/screen2.jpg";
import screen10 from "../assets/case-studies/okta/screen3.png";
import screen11 from "../assets/case-studies/okta/screen4.png";
import screen12 from "../assets/case-studies/okta/screen5.jpg";

// ✅ Imported visuals
import screen13 from "../assets/case-studies/envision/screen6.png";
import screen14 from "../assets/case-studies/envision/screen1.png";
import screen15 from "../assets/case-studies/envision/screen2.png";
import screen16 from "../assets/case-studies/envision/screen3.png";
import screen17 from "../assets/case-studies/envision/screen4.png";
import screen18 from "../assets/case-studies/envision/screen5.png";

// ✅ Imported project images
import setuOamPing from '../assets/projects/setu-oam-ping.jpg';
import reportiv from '../assets/projects/reportiv-dashboard.png';
import shiva from '../assets/projects/Shiva.png';
import oktaui from '../assets/projects/oktaui.png';
import envision from '../assets/projects/envision.png';

// ✅ Export this so it can be used elsewhere
export const caseStudies = [
  {
    id: 1,
    title: "SETU Project (OAM → Ping Migration)",
    subtitle: "Enterprise IAM Migration Framework",
    description: "Designed comprehensive IAM dashboards for seamless legacy-to-modern migration with stakeholder alignment",
    image: setuOamPing,
    tags: ["IAM", "Migration", "Dashboard", "Enterprise"],
    problem:
      "Legacy OAM systems needed migration to modern Ping infrastructure with zero downtime. Teams lacked visibility into migration progress, mapping accuracy, and assessment results, creating risks and delays.",
    process:
      "Designed IAM dashboards for migration visibility including reports, mappings, and assessments. Created UI/UX presentations and videos for stakeholder alignment. Developed backend connectors (DB, API, CLI utilities) to support seamless migration workflows.",
    solution:
      "Delivered comprehensive migration dashboard with real-time progress tracking, automated mapping validation, assessment reporting, and stakeholder communication tools. Integrated CLI utilities with intuitive UI for technical teams.",
    impact:
      "Reduced migration timeline by 50%, eliminated manual mapping errors, improved stakeholder communication through visual reports, and achieved 99.9% uptime during transition period.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Resource Prediction Dashboards",
    subtitle: "Predictive IAM Resource Management",
    description: "Grafana dashboards with VAR/LSTM models for forecasting access trends and anomaly detection",
    image: reportiv,
    tags: ["Forecasting", "Grafana", "VAR/LSTM", "Analytics"],
    problem:
      "Organizations needed to predict resource access patterns and identify anomalies before they became security risks. Existing monitoring was reactive rather than predictive, missing critical trends.",
    process:
      "Designed Grafana dashboards for forecasting resource access trends. Built predictive models using VAR and LSTM algorithms to forecast access anomalies and patterns. Focused on UI flows for presenting complex data science outputs clearly to stakeholders.",
    solution:
      "Created intuitive forecasting dashboard with predictive modeling integration, anomaly detection alerts, trend visualization, and automated reporting. Made complex ML outputs accessible to non-technical stakeholders through clear visual storytelling.",
    impact:
      "Predicted 85% of access anomalies before they occurred, reduced security incidents by 40%, enabled proactive resource planning, and improved compliance reporting accuracy by 60%.",
    color: "from-emerald-500 to-teal-600",
    visuals: [chart1, chart2, chart3, chart4, chart5, chart6] // ✅ visuals attached
  },
  {
    id: 3,
    title: "SHIVA - Virtual IAM Assistant",
    subtitle: "AI-Powered Access Management",
    description:
      "UI design for intelligent virtual assistant simplifying complex IAM workflows and user support",
    image: shiva,
    tags: ["AI Assistant", "IAM", "Chat UI", "Automation"],
    problem:
      "Complex IAM processes required extensive training and expertise. Users struggled with access requests, troubleshooting, and understanding security policies, leading to delays and support bottlenecks.",
    process:
      "Designed conversational UI for virtual IAM assistant. Analyzed common user queries and pain points. Created intuitive chat flows that guide users through complex access management tasks with contextual help and automated suggestions.",
    solution:
      "Developed SHIVA's conversational interface with natural language processing for IAM queries, guided workflows for access requests, automated troubleshooting suggestions, and integration with existing IAM systems for seamless task execution.",
    impact:
      "Reduced support ticket volume by 65%, decreased average resolution time from 2 days to 30 minutes, improved user satisfaction scores to 4.8/5, and enabled 24/7 automated IAM support.",
    color: "from-purple-500 to-pink-600",
    visuals: [screen1, screen2, screen3, screen4, screen5, screen6]
  },
  {
    id: 4,
    title: "Mobile Banking App",
    subtitle: "Next-Gen FinTech UX",
    description: "User-centered design for next-generation mobile banking experience.",
    image: oktaui,
    tags: ["Mobile UX", "FinTech", "User Research"],
    problem:
      "The legacy banking interfaces were cluttered, inconsistent, and lacked trust indicators. Customers faced friction during login, MFA, and onboarding flows, leading to frustration and reduced engagement.",
    process:
      "Conducted user journey mapping, heuristic evaluation, and defined personas for retail and corporate users. Focused on accessibility, minimalism, and emotional design to instill trust while aligning with security requirements.",
    solution:
      "Designed a modern, user-centric banking app powered by CIAM. Created seamless authentication experiences, adaptive MFA, and contextual feedback with consistent visual language across devices.",
    impact:
      "Reduced user drop-offs during login and onboarding by 40%, improved trust and satisfaction scores, and increased task completion rates by 55%.",
    color: "from-blue-500 to-indigo-600",
    visuals: [screen7, screen8, screen9, screen10, screen11, screen12]
  },
  {
    id: 5,
    title: "SaaS Enterprise Platform",
    subtitle: "Unified Dashboard for Enterprise Insights",
    description:
      "Modern enterprise visualization platform improving data accessibility and decision-making.",
    image: envision,
    tags: ["Enterprise UX", "Data Visualization", "Scalability"],
    problem:
      "Enterprise admins struggled with fragmented dashboards and disjointed data views across multiple monitoring tools.",
    process:
      "Conducted stakeholder workshops, built IA maps, and designed low-fidelity prototypes focusing on data clarity, scalability, and consistency.",
    solution:
      "Designed a modular dashboard system consolidating IAM analytics, system health, and app insights into one cohesive interface.",
    impact:
      "Improved efficiency by 65%, reduced dashboard switching by 50%, and created a scalable design framework adaptable to future modules.",
    color: "from-orange-500 to-red-600",
    visuals: [screen13, screen14, screen15, screen16, screen17, screen18]
  }
];



// ✅ Props interface now supports visuals
interface CaseStudyDetailsProps {
  caseStudy: {
    id: number;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    tags: string[];
    problem: string;
    process: string;
    solution: string;
    impact: string;
    color: string;
    visuals?: string[];
  };
  onBack: () => void;
}

export function CaseStudyDetails({ caseStudy, onBack }: CaseStudyDetailsProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                {caseStudy.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-sm">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{caseStudy.subtitle}</p>
              <p className="text-lg mb-8">{caseStudy.description}</p>
            </div>

            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} rounded-2xl transform rotate-3`} />
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
            { title: "The Impact", text: caseStudy.impact, color: "text-purple-600" }
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

        {/* ✅ Visual Gallery Section with Click-to-Expand */}
        {caseStudy.visuals && caseStudy.visuals.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Project Visuals</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.visuals.map((url, i) => (
                <Card
                  key={i}
                  className="overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(url)} // ✅ Open image modal
                >
                  <CardContent className="p-0">
                    <ImageWithFallback
                      src={url}
                      alt={`${caseStudy.title} Visual ${i + 1}`}
                      className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ✅ Fullscreen Image Modal */}
            {selectedImage && (
              <motion.div
                className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)} // ✅ Close on click anywhere
              >
                <motion.img
                  src={selectedImage}
                  alt="Enlarged Visual"
                  className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl cursor-pointer"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )}
          </motion.div>
        )}

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
                  document.getElementById("getintouch")?.scrollIntoView({ behavior: "smooth" });
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
