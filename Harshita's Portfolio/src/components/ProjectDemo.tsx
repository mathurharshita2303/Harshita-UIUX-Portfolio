import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Play, Pause, RotateCcw, Download, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from "sonner@2.0.3";
import { useState } from 'react';

interface ProjectDemoProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    tags: string[];
  };
  onBack: () => void;
}

export function ProjectDemo({ project, onBack }: ProjectDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const demoSteps = [
    {
      id: 1,
      title: "Dashboard Overview",
      description: "Navigate through the main dashboard interface with real-time data visualization and key metrics.",
      image: "https://images.unsplash.com/photo-1732203971761-e9d4a6f5e93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MTc1ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "User Flow Demonstration",
      description: "Experience the complete user journey from login to task completion with smooth transitions.",
      image: "https://images.unsplash.com/photo-1659035260002-11d486d6e9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgxNzI5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "Interactive Features",
      description: "Explore interactive elements, animations, and responsive design across different screen sizes.",
      image: "https://images.unsplash.com/photo-1756576357697-13dfc5fff61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4MjQ5NDYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      title: "Results & Analytics",
      description: "View comprehensive analytics and reporting features that provide actionable insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODE4NjE5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      toast.success("Starting interactive demo...");
      // In a real app, this would start the demo
    } else {
      toast.info("Demo paused");
    }
  };

  const handleResetDemo = () => {
    setCurrentStep(1);
    setIsPlaying(false);
    toast.success("Demo reset to beginning");
  };

  const handleDownloadAssets = () => {
    toast.success("Downloading demo assets and documentation...");
    // In a real app, this would download assets
  };

  const handleLiveDemo = () => {
    toast.success("Opening live interactive demo in new tab...");
    // In a real app, this would open the live demo
  };

  const nextStep = () => {
    if (currentStep < demoSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-8 hover:bg-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </motion.div>

        {/* Demo Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {project.title} Demo
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience the interactive features and user flows of this project through our guided demonstration.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={handlePlayDemo}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isPlaying ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
              {isPlaying ? 'Pause Demo' : 'Start Demo'}
            </Button>
            <Button
              variant="outline"
              onClick={handleResetDemo}
              size="lg"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button
              variant="outline"
              onClick={handleLiveDemo}
              size="lg"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </div>
        </motion.div>

        {/* Demo Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {/* Demo Screen */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 text-white">
                <div className="aspect-video bg-white rounded-lg overflow-hidden relative">
                  <ImageWithFallback
                    src={demoSteps[currentStep - 1].image}
                    alt={demoSteps[currentStep - 1].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Demo Controls Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 rounded-full p-4">
                      <Play className="h-8 w-8 text-gray-800" />
                    </div>
                  </div>
                  
                  {/* Step Indicator */}
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                    Step {currentStep} of {demoSteps.length}
                  </div>
                </div>
                
                {/* Demo Progress Bar */}
                <div className="mt-6">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(currentStep / demoSteps.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Demo Description */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {demoSteps[currentStep - 1].title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {demoSteps[currentStep - 1].description}
                    </p>
                    
                    {/* Navigation Controls */}
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                      >
                        Previous
                      </Button>
                      <Button
                        onClick={nextStep}
                        disabled={currentStep === demoSteps.length}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  
                  {/* Step List */}
                  <div className="space-y-4">
                    {demoSteps.map((step, index) => (
                      <div
                        key={step.id}
                        className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-colors ${
                          currentStep === step.id
                            ? 'bg-blue-50 bg-blue-950/20 border border-blue-200 border-blue-800'
                            : 'hover:bg-accent'
                        }`}
                        onClick={() => setCurrentStep(step.id)}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          currentStep === step.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {step.id}
                        </div>
                        <div>
                          <h4 className="font-medium">{step.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <h3 className="font-bold mb-2">Download Assets</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get design files, documentation, and resources
              </p>
              <Button
                variant="outline"
                onClick={handleDownloadAssets}
                className="w-full"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </CardContent>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <h3 className="font-bold mb-2">Technical Details</h3>
              <p className="text-sm text-muted-foreground mb-4">
                View implementation notes and technical specifications
              </p>
              <Button
                variant="outline"
                onClick={() => toast.info("Technical documentation coming soon!")}
                className="w-full"
              >
                View Details
              </Button>
            </CardContent>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <h3 className="font-bold mb-2">Discuss Project</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule a call to discuss this project in detail
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  onBack();
                  toast.success("Let's discuss this project!");
                }}
                className="w-full"
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