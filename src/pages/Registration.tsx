import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Clock, Users, Star } from 'lucide-react';

const Registration = () => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Register Now</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure your spot in Neural MUN 2025 and join hundreds of delegates from around the world 
            in this transformative diplomatic experience.
          </p>
        </div>
      </section>

      {/* Registration Info */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Deadline Notice */}
          <Card className="mb-12 border-l-4 border-l-destructive bg-destructive/5 border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4">
                <div className="bg-destructive/10 rounded-full p-3">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Registration Alert</h3>
                  <p className="text-lg text-muted-foreground">
                    Delegate Early Bird Registration will start soon. <strong>  </strong>
                  </p>
                  
                  <p className="text-sm text-destructive mt-2">
                    Delegate Regular Registration will start soon.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registration Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-border/50 hover:border-border transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Individual Delegation</CardTitle>
                  <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-primary">350Rs - Early Bird</div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-foreground" />
                    <span>Full committee participation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-foreground" />
                    <span>Certificate of participation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-foreground" />
                    <span>Access to all social events</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-border transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Secretariat Applications</CardTitle>
                  <Badge className="bg-accent text-accent-foreground">Leadership</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-primary">Application</div>
                <div className="text-sm text-muted-foreground">Competitive selection process</div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-foreground" />
                    <span>Leadership roles in committees</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-foreground" />
                    <span>Chair and crisis staff positions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-foreground" />
                    <span>Exclusive training workshops</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-foreground" />
                    <span>Certificate of leadership</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Conference Details */}
          <Card className="mb-12 bg-muted/10 border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Conference Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Dates</h4>
                  <p className="text-muted-foreground">October 11-12, 2025</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Format</h4>
                  <p className="text-muted-foreground">Online Platform</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                  <p className="text-muted-foreground">2 Full Days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registration CTA */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Card className="p-8 border-border/50 max-w-md w-full">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Begin?</h3>
                  <p className="text-muted-foreground">
                    Complete your registration through our secure form
                  </p>
                </div>
                <Button 
                  asChild 
                  size="lg" 
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                >
                  <a 
                    href="" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2"
                  >
                    <span>Complete Delegate Registration</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
            <Card className="p-8 border-border/50 max-w-md w-full">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Secretariat Registration</h3>
                  <p className="text-muted-foreground">
                    Apply for Secretariat roles through our secure form
                  </p>
                </div>
                <Button 
                  asChild 
                  size="lg" 
                  className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200"
                >
                  <a 
                    href="https://forms.gle/eNWnBB1S68bk1Htv7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2"
                  >
                    <span>Complete Secretariat Registration</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>

    
  );
};

export default Registration;