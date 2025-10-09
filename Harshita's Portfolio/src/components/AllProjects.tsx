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

interface AllProjectsProps {
  onBack: () => void;
  onViewDemo: (project: any) => void;
}

export function AllProjects({ onBack, onViewDemo }: AllProjectsProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const allProjects = [
    {
      id: 1,
      title: 'SETU - OAM to Ping Migration',
      category: 'IAM Framework',
      description: 'Enterprise-level identity and access management framework migration from Oracle Access Manager to Ping Identity.',
      image: 'https://images.unsplash.com/photo-1732203971761-e9d4a6f5e93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MTc1ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Enterprise IAM', 'Migration', 'Security'],
      status: 'completed',
      year: '2024',
      duration: '8 months'
    },
    {
      id: 2,
      title: 'ReportIV Forecasting Dashboards',
      category: 'Data Visualization',
      description: 'Advanced analytics dashboards for financial forecasting with machine learning integration.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODE4NjE5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Analytics', 'ML Integration', 'Finance'],
      status: 'completed',
      year: '2024',
      duration: '6 months'
    },
    {
      id: 3,
      title: 'SHIVA Virtual IAM Assistant',
      category: 'AI/UX Design',
      description: 'AI-powered virtual assistant for identity and access management with natural language processing.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFzc2lzdGFudCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgyNDk0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['AI Assistant', 'NLP', 'Chatbot UI'],
      status: 'in-progress',
      year: '2024',
      duration: 'Ongoing'
    },
    {
      id: 4,
      title: 'Kawach Rebranding',
      category: 'Brand Design',
      description: 'Complete rebranding and visual identity redesign for cybersecurity platform.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGN5YmVyc2VjdXJpdHl8ZW58MXx8fHwxNzU4MjQ5NDYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Branding', 'Visual Identity', 'Cybersecurity'],
      status: 'completed',
      year: '2023',
      duration: '4 months'
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      category: 'Mobile UX',
      description: 'User-centered design for next-generation mobile banking experience.',
      image: 'https://images.unsplash.com/photo-1756576357697-13dfc5fff61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4MjQ5NDYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Mobile UX', 'FinTech', 'User Research'],
      status: 'prototype',
      year: '2024',
      duration: '3 months'
    },
    {
      id: 6,
      title: 'E-commerce Platform',
      category: 'Web Design',
      description: 'Modern e-commerce platform with focus on accessibility and conversion optimization.',
      image: 'https://images.unsplash.com/photo-1659035260002-11d486d6e9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgxNzI5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['E-commerce', 'Accessibility', 'Conversion'],
      status: 'completed',
      year: '2023',
      duration: '5 months'
    },
    {
      id: 7,
      title: 'Healthcare Portal',
      category: 'Healthcare UX',
      description: 'Patient-centered healthcare portal with telemedicine integration.',
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09131aca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODI0OTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Healthcare', 'Telemedicine', 'Accessibility'],
      status: 'completed',
      year: '2023',
      duration: '6 months'
    },
    {
      id: 8,
      title: 'Learning Management System',
      category: 'EdTech',
      description: 'Modern LMS interface design with gamification and progress tracking.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MjQ5NDYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['EdTech', 'Gamification', 'Learning'],
      status: 'prototype',
      year: '2024',
      duration: '4 months'
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 bg-green-900/20 text-green-400';
      case 'in-progress': return 'bg-blue-100 text-blue-800 bg-blue-900/20 text-blue-400';
      case 'prototype': return 'bg-orange-100 text-orange-800 bg-orange-900/20 text-orange-400';
      default: return 'bg-gray-100 text-gray-800 bg-gray-900/20 text-gray-400';
    }
  };

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
                        <div className="absolute top-4 left-4">
                          <Badge className={getStatusColor(project.status)}>
                            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                          </Badge>
                        </div>
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
                            }}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => {
                              toast.success(`Opening ${project.title} demo...`);
                              onViewDemo(project);
                            }}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
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
                          <div className="absolute top-2 left-2">
                            <Badge className={getStatusColor(project.status)} size="sm">
                              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                            </Badge>
                          </div>
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
                              }}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => {
                                toast.success(`Opening ${project.title} demo...`);
                                onViewDemo(project);
                              }}
                            >
                              <ExternalLink className="h-4 w-4" />
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
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    onBack();
                    toast.success("Let's start a conversation!");
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Start a Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    toast.success("Downloading complete portfolio...");
                  }}
                >
                  Download Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}