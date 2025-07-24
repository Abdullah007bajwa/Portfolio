import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  X,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'subject':
        return value.length < 3 ? 'Subject must be at least 3 characters' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTouched({});
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abdullah.bajwa.co@gmail.com',
      href: 'mailto:abdullah.bajwa.co@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 325 4749164',
      href: 'tel:+923254749164'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdullah--bajwa/',
      color: 'hover:text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Abdullah007bajwa',
      color: 'hover:text-gray-400'
    },
    {
      icon: X,
      label: 'X',
      href: 'https://x.com/MAbdullahBajwa',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your AI project to life? Let's discuss how we can work together 
            to create innovative solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or simply chat about the latest developments in AI and technology.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card 
                  key={item.label}
                  className="hover-lift bg-gradient-card border-border/50 hover:border-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4">
                    <a
                      href={item.href}
                      className="flex items-center gap-4 group"
                      target={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground ${social.color} transition-all hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="hover-lift bg-gradient-card border-border/50 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Your full name"
                        required
                        className={`bg-background/50 border-border/50 focus:border-primary transition-colors ${
                          errors.name && touched.name ? 'border-destructive focus:border-destructive' : ''
                        } ${
                          !errors.name && touched.name && formData.name ? 'border-green-500 focus:border-green-500' : ''
                        }`}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {!errors.name && touched.name && formData.name && (
                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500" />
                      )}
                      {errors.name && touched.name && (
                        <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-destructive" />
                      )}
                    </div>
                    {errors.name && touched.name && (
                      <p id="name-error" className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="your.email@example.com"
                        required
                        className={`bg-background/50 border-border/50 focus:border-primary transition-colors ${
                          errors.email && touched.email ? 'border-destructive focus:border-destructive' : ''
                        } ${
                          !errors.email && touched.email && formData.email ? 'border-green-500 focus:border-green-500' : ''
                        }`}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {!errors.email && touched.email && formData.email && (
                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500" />
                      )}
                      {errors.email && touched.email && (
                        <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-destructive" />
                      )}
                    </div>
                    {errors.email && touched.email && (
                      <p id="email-error" className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <div className="relative">
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="What's this about?"
                      required
                      className={`bg-background/50 border-border/50 focus:border-primary transition-colors ${
                        errors.subject && touched.subject ? 'border-destructive focus:border-destructive' : ''
                      } ${
                        !errors.subject && touched.subject && formData.subject ? 'border-green-500 focus:border-green-500' : ''
                      }`}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {!errors.subject && touched.subject && formData.subject && (
                      <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500" />
                    )}
                    {errors.subject && touched.subject && (
                      <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-destructive" />
                    )}
                  </div>
                  {errors.subject && touched.subject && (
                    <p id="subject-error" className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      required
                      className={`bg-background/50 border-border/50 focus:border-primary resize-none transition-colors ${
                        errors.message && touched.message ? 'border-destructive focus:border-destructive' : ''
                      } ${
                        !errors.message && touched.message && formData.message ? 'border-green-500 focus:border-green-500' : ''
                      }`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {!errors.message && touched.message && formData.message && (
                      <CheckCircle className="absolute right-3 top-3 w-4 h-4 text-green-500" />
                    )}
                    {errors.message && touched.message && (
                      <AlertCircle className="absolute right-3 top-3 w-4 h-4 text-destructive" />
                    )}
                  </div>
                  {errors.message && touched.message && (
                    <p id="message-error" className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-primary text-white font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;