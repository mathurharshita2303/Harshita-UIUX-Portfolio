import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { QuickShowcase } from './components/QuickShowcase';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyDetails } from './components/CaseStudyDetails';
import { ProjectDemo } from './components/ProjectDemo';
import { AllProjects } from './components/AllProjects';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { UserFeedbackForm } from './components/UserFeedbackForm';
import { PageTracker } from './components/PageTracker';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './context/ThemeContext';
import { AnalyticsProvider } from './context/AnalyticsContext';
import { useAnalytics } from "../context/AnalyticsContext";


type Page = 'home' | 'case-study-details' | 'project-demo' | 'all-projects' | 'privacy-policy' | 'terms-of-service' | 'analytics';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const handleViewCaseStudy = (caseStudy: any) => {
    setSelectedCaseStudy(caseStudy);
    setCurrentPage('case-study-details');
  };

  const handleViewDemo = (project: any) => {
    setSelectedProject(project);
    setCurrentPage('project-demo');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedCaseStudy(null);
    setSelectedProject(null);
  };

  const handleViewAllProjects = () => {
    setCurrentPage('all-projects');
  };

  const handleViewPrivacyPolicy = () => {
    setCurrentPage('privacy-policy');
  };

  const handleViewTermsOfService = () => {
    setCurrentPage('terms-of-service');
  };

  const handleViewAnalytics = () => {
    setCurrentPage('analytics');
  };

  const handleShowFeedbackForm = () => {
    setShowFeedbackForm(true);
  };

  const handleCloseFeedbackForm = () => {
    setShowFeedbackForm(false);
  };

  return (
    <ThemeProvider>
      <AnalyticsProvider>
        <div className="min-h-screen bg-background text-foreground">
          <PageTracker page={currentPage} />

          <Header
            onViewAllProjects={handleViewAllProjects}
            onViewPrivacyPolicy={handleViewPrivacyPolicy}
            onViewTermsOfService={handleViewTermsOfService}
            onViewAnalytics={handleViewAnalytics}
          />

          {currentPage === 'home' && (
            <main>
              <Hero onViewAllProjects={handleViewAllProjects} />
              <About />
              <QuickShowcase onViewDetails={handleViewCaseStudy} onViewAllProjects={handleViewAllProjects} />
              <Skills />
              <Testimonials onShowFeedbackForm={handleShowFeedbackForm} />
              <Contact />
            </main>
          )}

          {currentPage === 'case-study-details' && selectedCaseStudy && (
            <CaseStudyDetails
              caseStudy={selectedCaseStudy}
              onBack={handleBackToHome}
            />
          )}

          {currentPage === 'project-demo' && selectedProject && (
            <ProjectDemo
              project={selectedProject}
              onBack={handleBackToHome}
            />
          )}

          {currentPage === 'all-projects' && (
            <AllProjects
              onBack={handleBackToHome}
              onViewDemo={handleViewDemo}
            />
          )}

          {currentPage === 'privacy-policy' && (
            <PrivacyPolicy onBack={handleBackToHome} />
          )}

          {currentPage === 'terms-of-service' && (
            <TermsOfService onBack={handleBackToHome} />
          )}

          {currentPage === 'analytics' && (
            <AnalyticsDashboard onBack={handleBackToHome} />
          )}

          <Footer
            onViewPrivacyPolicy={handleViewPrivacyPolicy}
            onViewTermsOfService={handleViewTermsOfService}
            onShowFeedbackForm={handleShowFeedbackForm}
          />

          <UserFeedbackForm
            isOpen={showFeedbackForm}
            onClose={handleCloseFeedbackForm}
          />

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </div>
      </AnalyticsProvider>
    </ThemeProvider>
  );
}