import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Monitor, Target, Users, Award, Calendar, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that drive business growth.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with our clients as trusted partners, not just service providers.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from planning to implementation.",
    },
    {
      icon: Monitor,
      title: "Reliability",
      description: "Our clients depend on us for consistent, dependable IT solutions and support.",
    },
  ]

  const timeline = [
    {
      year: "2023",
      title: "Company Founded",
      description:
        "HAN IT Solutions, LLC was established in Miami, Florida with a vision to help businesses leverage technology for growth.",
    },
    {
      year: "2023",
      title: "First Clients",
      description: "Successfully onboarded our first clients and delivered comprehensive IT consulting services.",
    },
    {
      year: "2024",
      title: "Service Expansion",
      description: "Expanded our service offerings to include cloud solutions, cybersecurity, and custom development.",
    },
    {
      year: "2025",
      title: "Continued Growth",
      description: "Building on our success with a growing client base and expanding team of technology experts.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Navigation />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-success/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-accent to-success bg-clip-text text-transparent text-balance">
                About{" "}
                <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
                  HAN IT Solutions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Founded in 2023, we are a Miami-based technology consulting company dedicated to helping businesses
                navigate the complex world of modern IT infrastructure and digital transformation.
              </p>
              <Button
                asChild
                size="lg"
                variant="gradient"
                className="bg-gradient-to-r from-accent to-success hover:from-accent/90 hover:to-success/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="relative animate-float">
              <div className="aspect-square bg-gradient-to-br from-accent/20 via-success/10 to-accent/5 rounded-2xl flex items-center justify-center shadow-2xl border border-accent/20 backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <Monitor className="w-32 h-32 text-accent mx-auto drop-shadow-lg animate-pulse" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                      Professional IT Services
                    </h3>
                    <p className="text-muted-foreground">Since January 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-muted/30 via-accent/5 to-success/5 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              To bridge the gap between complex technology and practical business solutions, empowering organizations to
              achieve their goals through innovative IT services and strategic guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-accent/5 border-accent/20 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-success/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <value.icon className="w-6 h-6 text-accent group-hover:text-success transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-accent/5 via-transparent to-success/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet the founder and driving force behind HAN IT Solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-accent/20 bg-gradient-to-br from-card via-card to-accent/5 hover:shadow-3xl transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                <div className="md:col-span-1">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 via-success/10 to-accent/5 rounded-xl flex items-center justify-center shadow-lg border border-accent/20">
                    <div className="text-center space-y-2">
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto shadow-lg border-2 border-accent/30">
                        <Image
                          src="/images/stefan-araujo.jpg"
                          alt="Stefan Philippe Araujo, Founder & CEO of HAN IT Solutions"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                        Stefan Philippe Araujo
                      </h3>
                      <p className="text-muted-foreground">Founder & CEO</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                    Stefan Philippe Araujo
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At 26 years old, Stefan brings a fresh perspective to the IT consulting industry. Born on July 28,
                    1999, he founded HAN IT Solutions with a vision to make advanced technology accessible and practical
                    for businesses of all sizes.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Stefan's approach combines technical expertise with business acumen, ensuring that every solution
                    not only works technically but also drives real business value. His commitment to staying current
                    with emerging technologies allows HAN IT Solutions to offer cutting-edge solutions that keep clients
                    ahead of the competition.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center space-x-2 bg-accent/10 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Founded Company: January 2023</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-success/10 px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4 text-success" />
                      <span className="text-sm text-muted-foreground">Based in Miami, FL</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-muted/30 via-accent/5 to-success/5 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From startup to trusted IT partner - see how we've grown since our founding.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-success rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <span className="text-sm font-bold text-white">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow bg-card/50 p-6 rounded-lg border border-accent/20 group-hover:shadow-lg transition-all duration-300 group-hover:bg-card/80">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-success/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card/50 p-8 rounded-xl border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mb-6">
                Company Information
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground">Legal Name</h3>
                  <p className="text-muted-foreground">HAN IT Solutions, LLC</p>
                </div>
                <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                  <h3 className="font-semibold text-foreground">Incorporation Date</h3>
                  <p className="text-muted-foreground">January 4, 2023</p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground">Headquarters</h3>
                  <p className="text-muted-foreground">14301 SW 31st Street, Miami, FL 33175</p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-xl border border-success/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-success bg-clip-text text-transparent mb-6">
                Why Choose Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="w-2 h-2 bg-gradient-to-r from-accent to-success rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Local Expertise:</strong> Based in Miami, we understand the
                    unique needs of Florida businesses.
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-success/5 rounded-lg border border-success/20">
                  <div className="w-2 h-2 bg-gradient-to-r from-success to-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Fresh Perspective:</strong> As a newer company, we bring
                    innovative approaches to traditional IT challenges.
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="w-2 h-2 bg-gradient-to-r from-accent to-success rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Personal Service:</strong> Direct access to leadership and
                    personalized attention to your business needs.
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-success/5 rounded-lg border border-success/20">
                  <div className="w-2 h-2 bg-gradient-to-r from-success to-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Modern Solutions:</strong> We focus on current technologies and
                    best practices for optimal results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-success/5 to-accent/5 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-accent to-success bg-clip-text text-transparent">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Let's discuss how HAN IT Solutions can help your business achieve its technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="gradient"
              className="bg-gradient-to-r from-accent to-success hover:from-accent/90 hover:to-success/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent/30 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
