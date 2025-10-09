import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 bg-blue-900/20 p-4 rounded-full">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              How I collect, use, and protect your information
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: December 19, 2024
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray prose-invert max-w-none">
                <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
                  <Eye className="h-6 w-6 text-blue-600" />
                  Information I Collect
                </h2>
                
                <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                <p className="text-muted-foreground mb-4">
                  When you contact me through this portfolio website, I may collect the following information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Name and email address (when you fill out the contact form)</li>
                  <li>Subject and message content</li>
                  <li>LinkedIn profile information (if you connect via LinkedIn)</li>
                  <li>Phone number (if you choose to provide it)</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Browser type and version</li>
                  <li>Device information and screen resolution</li>
                  <li>Pages visited and time spent on the site</li>
                  <li>Referring website or source</li>
                  <li>General location (city/country level)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray prose-invert max-w-none">
                <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                  How I Use Your Information
                </h2>
                
                <p className="text-muted-foreground mb-4">
                  I use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>To respond to your inquiries and communication requests</li>
                  <li>To discuss potential collaboration opportunities</li>
                  <li>To improve the user experience of this portfolio website</li>
                  <li>To analyze website traffic and user behavior patterns</li>
                  <li>To prevent spam and protect against malicious activities</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Legal Basis for Processing</h3>
                <p className="text-muted-foreground mb-4">
                  I process your personal information based on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Consent:</strong> When you voluntarily provide information through contact forms</li>
                  <li><strong>Legitimate Interest:</strong> To respond to inquiries and improve website functionality</li>
                  <li><strong>Contract:</strong> When necessary for potential business discussions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray prose-invert max-w-none">
                <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Information Sharing and Disclosure
                </h2>
                
                <p className="text-muted-foreground mb-4">
                  I do not sell, trade, or rent your personal information to third parties. I may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>With your explicit consent</li>
                  <li>When required by law or legal process</li>
                  <li>To protect my rights, property, or safety</li>
                  <li>With service providers who assist in website operations (under strict confidentiality agreements)</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Third-Party Services</h3>
                <p className="text-muted-foreground mb-4">
                  This website may use third-party services for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Analytics:</strong> To understand website usage patterns</li>
                  <li><strong>Hosting:</strong> To ensure website availability and performance</li>
                  <li><strong>Email Services:</strong> To facilitate communication</li>
                  <li><strong>External Links:</strong> LinkedIn, email clients, and other platforms</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Data Security and Retention</h2>
                
                <h3 className="text-lg font-semibold mb-3">Security Measures</h3>
                <p className="text-muted-foreground mb-4">
                  I implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Secure HTTPS encryption for all data transmission</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Limited access to personal information</li>
                  <li>Secure backup and recovery procedures</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Data Retention</h3>
                <p className="text-muted-foreground mb-4">
                  I retain personal information only as long as necessary:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Contact form data: Retained for up to 2 years for business purposes</li>
                  <li>Analytics data: Anonymized and retained for website improvement</li>
                  <li>Email communications: Retained as part of business records</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
                
                <p className="text-muted-foreground mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li><strong>Access:</strong> Request a copy of the personal information I hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Cookies and Tracking</h3>
                <p className="text-muted-foreground mb-4">
                  This website uses minimal cookies and tracking technologies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Essential cookies for website functionality</li>
                  <li>Theme preference storage (light/dark mode)</li>
                  <li>Analytics cookies (anonymized data only)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or want to exercise your rights, please contact me:
                </p>
                
                <div className="bg-blue-50 bg-blue-900/20 p-6 rounded-lg">
                  <p className="text-foreground mb-2"><strong>Email:</strong> mathurharshita23@gmail.com</p>
                  <p className="text-foreground mb-2"><strong>LinkedIn:</strong> linkedin.com/in/harshita-mathur-564a76195</p>
                  <p className="text-foreground mb-2"><strong>Phone:</strong> +91 7014982933</p>
                  <p className="text-muted-foreground text-sm mt-4">
                    I will respond to your privacy-related requests within 30 days.
                  </p>
                </div>

                <h3 className="text-lg font-semibold mb-3 mt-6">Updates to This Policy</h3>
                <p className="text-muted-foreground mb-4">
                  I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last modified" date. 
                  I encourage you to review this policy periodically to stay informed about how I protect your information.
                </p>

                <p className="text-muted-foreground">
                  For significant changes, I will provide additional notice through the website or direct communication.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 from-blue-950/20 to-indigo-950/20">
            <CardContent>
              <h3 className="text-xl font-bold mb-4">Questions about Privacy?</h3>
              <p className="text-muted-foreground mb-6">
                I'm committed to transparency and protecting your privacy. Feel free to reach out with any concerns.
              </p>
              <Button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  onBack();
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Contact Me
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}