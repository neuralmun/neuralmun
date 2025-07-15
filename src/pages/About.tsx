import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  const coreTeam = [
    {
      name: "Keshav Pandey",
      role: "Founder",
      image: "/keshav.png",
      initials: "KP"
    },
    {
      name: "Vaanya Awasthy",
      role: "Chief Advisor & President",
      image: "/vaanya.png",
      initials: "VA"
    }
  ];

  const secretariat = [
    {
      name: "Mehul",
      role: "Social Media & Content Writer",
      image: "",
      initials: "M"
    },
    {
      name: "Kartik Maheshwari ",
      role: "HR & Logistics Coordinator",
      image: "",
      initials: "KM"
    },
    {
      name: "Aman Rawat",
      role: "HOD Spamming",
      image: "",
      initials: "AR"
    },
    {
      name: "Daksh Birla",
      role: "HR",
      image: "",
      initials: "DB"
    },
    {
      name: "Rayansh Bhatnagar",
      role: "Spamming Coordinator",
      image: "",
      initials: "RB"
    },
    {
      name: "Lakshita Maheshwari",
      role: "Spamming",
      image: "",
      initials: "LM"
    },
    {
      name: "Sonam Gond",
      role: "Social Media",
      image: "",
      initials: "SG"
    },
    {
      name: "Jasmyra Kalra",
      role: "Social Media",
      image: "",
      initials: "JK"
    },
    {
      name: "Laavanya Bhatia",
      role: "Delegate & EB Affairs",
      image: "",
      initials: "LB"
    },
    {
      name: "Aradhya Rajgarhia",
      role: "Delegate & EB Affairs",
      image: "",
      initials: "AR"
    },
    {
      name: "Ayushi Prajapat",
      role: "PR & Marketing",
      image: "",
      initials: "AP"
    },
    {
      name: "Rashi Maharana",
      role: "PR & Marketing",
      image: "",
      initials: "RM"
    },
    {
      name: "Priyanshu Rawat",
      role: "Spamming",
      image: "",
      initials: "PR"
    },
    {
      name: "Ajitpal",
      role: "Spamming",
      image: "",
      initials: "AS"
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Our Mission</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Neural MUN is a global Model United Nations platform designed to foster leadership, 
                  negotiation, and diplomacy among students. We empower young minds to tackle real-world 
                  challenges with innovative thinking and collaborative spirit.
                </p>
              </div>
              
              <Card className="border-l-4 border-l-primary bg-primary/5 border-border/50">
                <CardContent className="p-6">
                  <p className="text-foreground italic">
                    "Where Voices Ignite Visions" - We believe every student has the potential to become 
                    a global leader and make a meaningful impact on the world.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-border/50 hover:border-border transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">Excellence</div>
                  <p className="text-muted-foreground">
                    Striving for the highest standards in committee sessions and delegate experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50 hover:border-border transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">Inclusivity</div>
                  <p className="text-muted-foreground">
                    Creating a welcoming environment for delegates from all backgrounds.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50 hover:border-border transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">Innovation</div>
                  <p className="text-muted-foreground">
                    Embracing new technologies to enhance the MUN experience for the digital age.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">The Core</h2>
            <p className="text-lg text-muted-foreground">
              Leadership team driving Neural MUN's vision
            </p>
          </div>

          <div className="grid gap-8 justify-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {coreTeam.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-border transition-all duration-300 text-center scale-105">
                <CardContent className="p-10">
                  <Avatar className="w-32 h-32 mx-auto mb-6">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-2xl font-semibold bg-primary text-primary-foreground">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{member.name}</h4>
                  <p className="text-base text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Secretariat Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Secretariat</h2>
            <p className="text-lg text-muted-foreground">
              Committee chairs and specialized coordinators
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {secretariat.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-border transition-all duration-300 text-center scale-105">
                <CardContent className="p-8">
                  <Avatar className="w-24 h-24 mx-auto mb-5">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-xl font-semibold bg-muted text-foreground">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{member.name}</h4>
                  <p className="text-base text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;