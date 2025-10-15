import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Scale, FileCheck, AlertTriangle, Users } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
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
                <Scale className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Terms and conditions for using this portfolio website
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
                  <FileCheck className="h-6 w-6 text-blue-600" />
                  Agreement to Terms
                </h2>
                
                <p className="text-muted-foreground mb-4">
                  By accessing and using this portfolio website ("Service"), you accept and agree to be bound by the terms and 
                  provision of this agreement. This website is owned and operated by Harshita Mathur ("I", "me", "my").
                </p>

                <p className="text-muted-foreground mb-4">
                  If you do not agree to abide by the above, please do not use this service. These Terms of Service constitute 
                  the entire agreement between you and Harshita Mathur regarding the use of this website.
                </p>

                <h3 className="text-lg font-semibold mb-3">Acceptance of Terms</h3>
                <p className="text-muted-foreground">
                  By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these 
                  Terms of Service and any future modifications.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray prose-invert max-w-none">
                <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                  Use License and Permitted Activities
                </h2>
                
                <h3 className="text-lg font-semibold mb-3">Permitted Use</h3>
                <p className="text-muted-foreground mb-4">
                  You are granted a limited, non-exclusive, non-transferable license to access and use this website for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Viewing my portfolio and professional work</li>
                  <li>Learning about my skills and experience</li>
                  <li>Contacting me for legitimate business inquiries</li>
                  <li>Sharing my portfolio with others for professional purposes</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Prohibited Activities</h3>
                <p className="text-muted-foreground mb-4">
                  You may not use this website for any of the following:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Copying, reproducing, or distributing content without permission</li>
                  <li>Using automated systems to access or scrape the website</li>
                  <li>Attempting to gain unauthorized access to any part of the website</li>
                  <li>Transmitting malicious code, viruses, or harmful software</li>
                  <li>Using the contact forms for spam or unsolicited marketing</li>
                  <li>Impersonating me or falsely representing your affiliation with me</li>
                  <li>Using the website for any illegal or unauthorized purpose</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Content Usage Rights</h3>
                <p className="text-muted-foreground">
                  All portfolio content, including case studies, project descriptions, and design work, is for viewing purposes only. 
                  Any use of this content requires my explicit written permission.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
                
                <h3 className="text-lg font-semibold mb-3">Ownership</h3>
                <p className="text-muted-foreground mb-4">
                  All content on this website, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Text, graphics, images, and design elements</li>
                  <li>Portfolio case studies and project documentation</li>
                  <li>Code samples and technical implementations</li>
                  <li>User interface designs and prototypes</li>
                  <li>Branding and visual identity elements</li>
                </ul>

                <p className="text-muted-foreground mb-4">
                  ...are the intellectual property of Harshita Mathur or used with permission from their respective owners.
                </p>

                <h3 className="text-lg font-semibold mb-3">Third-Party Content</h3>
                <p className="text-muted-foreground mb-4">
                  Some images and resources used on this website are sourced from third-party providers under appropriate licenses. 
                  These remain the property of their respective owners.
                </p>

                <h3 className="text-lg font-semibold mb-3">Client Work</h3>
                <p className="text-muted-foreground">
                  Portfolio projects shown may be subject to client confidentiality agreements. All sensitive information has been 
                  removed or anonymized in compliance with professional obligations.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray prose-invert max-w-none">
                <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
                  <AlertTriangle className="h-6 w-6 text-blue-600" />
                  Disclaimers and Limitations
                </h2>
                
                <h3 className="text-lg font-semibold mb-3">Website Availability</h3>
                <p className="text-muted-foreground mb-4">
                  While I strive to maintain website availability, I do not guarantee that the service will be uninterrupted, 
                  timely, secure, or error-free. The website may be temporarily unavailable due to maintenance, updates, or 
                  technical issues.
                </p>

                <h3 className="text-lg font-semibold mb-3">Information Accuracy</h3>
                <p className="text-muted-foreground mb-4">
                  I make every effort to ensure the accuracy of information presented on this website. However, I do not warrant 
                  the completeness, reliability, or accuracy of any information, and I reserve the right to update or modify 
                  content at any time.
                </p>

                <h3 className="text-lg font-semibold mb-3">External Links</h3>
                <p className="text-muted-foreground mb-4">
                  This website may contain links to external sites. I am not responsible for the content, privacy practices, 
                  or terms of service of these external websites.
                </p>

                <h3 className="text-lg font-semibold mb-3">Limitation of Liability</h3>
                <p className="text-muted-foreground">
                  In no event shall Harshita Mathur be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                  resulting from your use of this website.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Professional Services and Communication</h2>
                
                <h3 className="text-lg font-semibold mb-3">No Professional Relationship</h3>
                <p className="text-muted-foreground mb-4">
                  Visiting this website or contacting me through the provided forms does not establish a professional or 
                  contractual relationship. Any potential collaboration or professional services would require separate 
                  written agreements.
                </p>

                <h3 className="text-lg font-semibold mb-3">Communication Guidelines</h3>
                <p className="text-muted-foreground mb-4">
                  When contacting me through this website:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Provide accurate and truthful information</li>
                  <li>Keep communications professional and relevant</li>
                  <li>Respect my response time and availability</li>
                  <li>Do not share confidential information without prior agreement</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Project Inquiries</h3>
                <p className="text-muted-foreground">
                  All project discussions are preliminary until formalized through proper contracts. Estimates, timelines, 
                  and project details shared through initial communications are subject to change upon detailed project analysis.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Privacy and Data Protection</h2>
                
                <p className="text-muted-foreground mb-4">
                  Your privacy is important to me. Please review my Privacy Policy for detailed information about how I collect, 
                  use, and protect your personal information when you use this website.
                </p>

                <h3 className="text-lg font-semibold mb-3">Cookies and Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  This website uses minimal cookies and analytics to improve user experience and understand website usage patterns. 
                  By using this website, you consent to the use of these technologies as described in the Privacy Policy.
                </p>

                <h3 className="text-lg font-semibold mb-3">Data Security</h3>
                <p className="text-muted-foreground">
                  While I implement appropriate security measures to protect your information, no method of transmission over 
                  the internet or electronic storage is 100% secure. I cannot guarantee absolute security of your data.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Modifications and Termination</h2>
                
                <h3 className="text-lg font-semibold mb-3">Terms Modification</h3>
                <p className="text-muted-foreground mb-4">
                  I reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately 
                  upon posting on this page with an updated "Last modified" date. Your continued use of the website after 
                  changes are posted constitutes acceptance of the modified terms.
                </p>

                <h3 className="text-lg font-semibold mb-3">Service Termination</h3>
                <p className="text-muted-foreground mb-4">
                  I may terminate or suspend access to this website at any time, without prior notice or liability, for any 
                  reason, including breach of these Terms of Service.
                </p>

                <h3 className="text-lg font-semibold mb-3">Governing Law</h3>
                <p className="text-muted-foreground">
                  These Terms of Service shall be governed by and construed in accordance with the laws of India, without 
                  regard to its conflict of law provisions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-gray prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact me:
                </p>
                
                <div className="bg-blue-50 bg-blue-900/20 p-6 rounded-lg">
                  <p className="text-foreground mb-2"><strong>Email:</strong> mathurharshita23@gmail.com</p>
                  <p className="text-foreground mb-2"><strong>LinkedIn:</strong> linkedin.com/in/harshita-mathur-564a76195</p>
                  <p className="text-foreground mb-2"><strong>Phone:</strong> +91 7014982933</p>
                  <p className="text-muted-foreground text-sm mt-4">
                    I will respond to your terms-related questions within 7 business days.
                  </p>
                </div>

                <h3 className="text-lg font-semibold mb-3 mt-6">Severability</h3>
                <p className="text-muted-foreground mb-4">
                  If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be 
                  limited or eliminated to the minimum extent necessary so that these Terms of Service shall otherwise remain 
                  in full force and effect.
                </p>

                <h3 className="text-lg font-semibold mb-3">Entire Agreement</h3>
                <p className="text-muted-foreground">
                  These Terms of Service, together with the Privacy Policy, constitute the entire agreement between you and 
                  Harshita Mathur regarding the use of this website.
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
              <h3 className="text-xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                Now that you understand the terms, I'd love to discuss how we can work together on your next project.
              </p>
              <Button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  onBack();
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}