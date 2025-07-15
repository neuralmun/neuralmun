import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Globe, Gavel, Newspaper } from 'lucide-react';

const Committees = () => {
  const committees = [
    {
      name: "UNGA",
      fullName: "United Nations General Assembly",
      topic: "Establishing a global digital sovereignty framework to regulate AI and protect human rights.",
      icon: Globe,
      description: "The General Assembly is the main deliberative, policymaking and representative organ of the UN. Address one of the most pressing issues of our time.",
      difficulty: "Standard Difficulty",
      delegates: "120+"
    },
    {
      name: "UNCSW",
      fullName: "UN Commission on the Status of Women",
      topic: "Mandating universal paid parental leave to dismantle systemic gender inequality worldwide.",
      icon: Users,
      description: "The principal global intergovernmental body exclusively dedicated to the promotion of gender equality and the empowerment of women.",
      difficulty: "Standard Difficulty",
      delegates: "60+"
    },
    {
      name: "AIPPM",
      fullName: "All India Political Parties Meet",
      topic: "Implementing a nationwide citizens' initiative for policy-making to disrupt traditional party dominance.",
      icon: Gavel,
      description: "A unique committee focusing on Indian domestic politics, bringing together representatives from various political parties.",
      difficulty: "Standard Difficulty",
      delegates: "40+"
    },
    {
      name: "International Press",
      fullName: "International Press Corps",
      topic: "Covering and analyzing all committee proceedings in real-time for global audiences.",
      icon: Newspaper,
      description: "For aspiring journalists and media professionals. Report on committee sessions and conduct interviews.",
      difficulty: "All Levels",
      delegates: "20+"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Intermediate":
        return "bg-muted text-foreground border-border";
      case "Advanced":
        return "bg-primary/10 text-primary border-primary/20";
      case "Expert":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-accent/10 text-accent-foreground border-accent/20";
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Committees</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of committees, each tackling critical global issues 
            that shape our world today.
          </p>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <Card 
                key={index} 
                className="border-border/50 hover:border-border transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <committee.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{committee.name}</h3>
                        <p className="text-sm text-muted-foreground">{committee.fullName}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge className={getDifficultyColor(committee.difficulty)}>
                        {committee.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-border/50">
                        {committee.delegates}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Committee Topic:</h4>
                    <p className="text-foreground italic bg-muted/20 p-4 rounded-lg border-l-4 border-primary">
                      "{committee.topic}"
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">About This Committee:</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {committee.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Committee Experience</h2>
            <p className="text-lg text-muted-foreground">
              Each committee offers a unique opportunity to engage with complex global issues
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/50 text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Research</h3>
                <p className="text-muted-foreground">
                  Deep dive into your committee's topic and develop comprehensive position papers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Debate</h3>
                <p className="text-muted-foreground">
                  Engage in formal debate sessions following proper UN parliamentary procedure.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Negotiate</h3>
                <p className="text-muted-foreground">
                  Work collaboratively to draft resolutions that address real-world challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Committees;