import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Globe, Users, Award, ArrowRight, Calendar, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Delv.ai style split layout */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Optimize your{' '}
                <span className="text-muted-foreground">diplomatic</span>{' '}
                potential with{' '}
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Neural MUN
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Experience the future of Model United Nations. Connect, debate, and lead with delegates from around the world in our innovative digital platform.
              </p>

              <div className="text-sm text-muted-foreground/80">
                Where Voices Ignite Visions.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
              >
                <Link to="/registration" className="inline-flex items-center gap-2">
                  Register Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="rounded-full border-border hover:bg-muted/50 transition-all duration-200"
              >
                <Link to="/committees">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-4">
              {/* Committee Preview Cards */}
              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-border transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">UNGA</h3>
                      <p className="text-sm text-muted-foreground">
                        Global digital sovereignty framework for AI regulation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-border transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">UNCSW</h3>
                      <p className="text-sm text-muted-foreground">
                        Universal paid parental leave for gender equality
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-border transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">AIPPM</h3>
                      <p className="text-sm text-muted-foreground">
                        Citizens' initiative for policy-making reform
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Conference Info Card */}
            <Card className="mt-6 bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>October 11-12, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>Online Platform</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">2 Days</div>
                    <div className="text-sm opacity-90">Full Conference</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">?+</div>
              <div className="text-sm text-muted-foreground">Global Delegates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4</div>
              <div className="text-sm text-muted-foreground">Active Committees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">2</div>
              <div className="text-sm text-muted-foreground">Full Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Online Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Experience Modern Diplomacy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the next generation of global leaders in our comprehensive digital platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-border transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Global Platform</h3>
                <p className="text-muted-foreground">
                  Connect with delegates worldwide in our comprehensive online environment
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-border transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  Learn from experienced diplomats and seasoned MUN participants
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-border transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Real Impact</h3>
                <p className="text-muted-foreground">
                  Tackle pressing global issues and develop solutions that matter
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Shape Global Policy?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join Neural MUN and become part of the next generation of diplomatic leaders
          </p>
          <Button 
            asChild 
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/registration">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;