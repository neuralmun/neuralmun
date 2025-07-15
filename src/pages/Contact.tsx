import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link to neuralmun@gmail.com
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:neuralmun@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened!",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about Neural MUN? We'd love to hear from you. 
            Reach out to us and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Connect with our team through any of the following channels. 
                  We're here to help make your Neural MUN experience exceptional.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="border-border/50 hover:border-border transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">neuralmun@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:border-border transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Response Time</h3>
                        <p className="text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:border-border transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Platform</h3>
                        <p className="text-muted-foreground">Global Online Conference</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/20 rounded-lg border-border/50 border">
                    <h4 className="font-semibold text-foreground mb-2">What experience level is required?</h4>
                    <p className="text-muted-foreground text-sm">
                      Neural MUN welcomes delegates of all experience levels, from complete beginners to seasoned participants.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg border-border/50 border">
                    <h4 className="font-semibold text-foreground mb-2">How does the online format work?</h4>
                    <p className="text-muted-foreground text-sm">
                      We use a comprehensive online platform that replicates the traditional MUN experience with interactive features.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg border-border/50 border">
                    <h4 className="font-semibold text-foreground mb-2">Can I register as an individual?</h4>
                    <p className="text-muted-foreground text-sm">
                      Absolutely! We welcome both individual registrations and secretariat applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="border-border/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-border/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                        className="border-border/50"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Join Neural MUN?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't wait – secure your spot in our upcoming conference today!
          </p>
          <Button 
            asChild 
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="/registration">Register Now</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;