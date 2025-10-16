import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Star, MessageSquare, X } from 'lucide-react';
import { toast } from "sonner@2.0.3";
import API_BASE from "../config";

interface UserFeedbackFormProps {
  onClose: () => void;
  isOpen: boolean;
}


export function UserFeedbackForm({ onClose, isOpen }: UserFeedbackFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    rating: 0,
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (isOpen && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isOpen]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.feedback || formData.rating === 0) {
      toast.error("Please fill in all required fields and provide a rating.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("${API_BASE}/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("✅ Thank you for your feedback! Your impression has been recorded and emailed.");
        setFormData({ name: "", role: "", company: "", rating: 0, feedback: "" });
        onClose();
      } else {
        toast.error("❌ Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      toast.error("⚠️ Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  if (!isOpen) return null;


  return (
    <motion.div
      id="feedbackForm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        ref={formRef}
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="w-full max-w-lg"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Share Your Impression
                </CardTitle>
                <p className="text-muted-foreground mt-1">
                  Help others discover this portfolio by sharing your thoughts
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating */}
              <div>
                <Label className="text-sm font-medium mb-3 block">
                  Overall Rating *
                </Label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= formData.rating
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300 hover:text-yellow-400'
                        } transition-colors`}
                      />
                    </button>
                  ))}
                  {formData.rating > 0 && (
                    <span className="ml-2 text-sm text-muted-foreground">
                      {formData.rating}/5
                    </span>
                  )}
                </div>
              </div>

              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-sm font-medium">
                  Your Name *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="mt-1"
                  required
                />
              </div>

              {/* Role */}
              <div>
                <Label htmlFor="role" className="text-sm font-medium">
                  Your Role
                </Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  placeholder="e.g., Senior Product Manager, UX Designer"
                  className="mt-1"
                />
              </div>

              {/* Company */}
              <div>
                <Label htmlFor="company" className="text-sm font-medium">
                  Company
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="e.g., Google, Microsoft, Startup Inc."
                  className="mt-1"
                />
              </div>

              {/* Feedback */}
              <div>
                <Label htmlFor="feedback" className="text-sm font-medium">
                  Your Feedback *
                </Label>
                <Textarea
                  id="feedback"
                  value={formData.feedback}
                  onChange={(e) => setFormData(prev => ({ ...prev, feedback: e.target.value }))}
                  placeholder="Share your thoughts about this portfolio, design quality, UX, or any project that impressed you..."
                  className="mt-1 min-h-[120px]"
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Your feedback will be displayed publicly to help others discover this portfolio.
                </p>
              </div>

              {/* Privacy Notice */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Privacy Notice:</strong> Your name, role, company, and feedback will be displayed publicly.
                  We will not share your contact information. You can request removal of your feedback at any time.
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
