import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Monitor,
  Shield,
  Cloud,
  Settings,
  Users,
  ArrowRight,
  Sparkles,
  Rocket,
  Globe,
  Code,
  Database,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div>

        {/* Floating geometric elements */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-primary/10 rounded-full floating-element blur-xl"></div>
        <div
          className="absolute bottom-32 right-1/3 w-48 h-48 bg-secondary/10 rounded-full floating-element blur-2xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-accent/15 rotate-45 floating-element"></div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="asymmetric-grid items-center">
            {/* Left column - minimal */}
            <div className="space-y-8">
              <div className="w-2 h-32 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              <div className="text-sm font-mono text-muted-foreground rotate-90 origin-left">EST. 2023</div>
            </div>

            {/* Center column - main content */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20 interactive-glow">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-foreground font-mono">Miami-Based IT Innovation</span>
                  <Sparkles className="w-4 h-4 text-secondary" />
                </div>

                <h1 className="text-6xl md:text-8xl font-bold text-foreground text-balance leading-none font-sans">
                  TECH
                  <span className="block text-primary text-reveal">REVOLUTION</span>
                  <span className="block text-4xl md:text-6xl text-muted-foreground font-mono">starts here</span>
                </h1>

                <div className="max-w-2xl">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-mono text-pretty">
                    We don't just solve problems—we reimagine possibilities.
                    <span className="text-primary font-semibold"> HAN IT Solutions</span> transforms businesses through
                    innovative technology.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full morphing-card dynamic-shadow"
                >
                  <Link href="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-full backdrop-blur-sm interactive-glow bg-transparent"
                >
                  <Link href="/services">Explore Solutions</Link>
                </Button>
              </div>
            </div>

            {/* Right column - stats */}
            <div className="space-y-8 text-right">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary font-sans">2+</div>
                <div className="text-sm text-muted-foreground font-mono">Years Excellence</div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-secondary font-sans">100%</div>
                <div className="text-sm text-muted-foreground font-mono">Client Satisfaction</div>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-transparent to-primary"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8 diagonal-section bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="w-16 h-1 bg-primary rounded-full"></div>
                <h2 className="text-5xl md:text-6xl font-bold text-foreground font-sans">
                  SERVICES
                  <span className="block text-3xl text-muted-foreground font-mono">that matter</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed font-mono max-w-lg">
                Every solution is crafted with precision, designed for impact, and built for the future.
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, color: "bg-primary", label: "Development" },
                  { icon: Shield, color: "bg-secondary", label: "Security" },
                  { icon: Cloud, color: "bg-accent", label: "Cloud" },
                  { icon: Database, color: "bg-primary", label: "Data" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${item.color} p-8 rounded-2xl morphing-card text-center space-y-3 floating-element`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <item.icon className="w-8 h-8 text-white mx-auto" />
                    <div className="text-white font-semibold font-mono">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Strategic Consulting",
                description: "Transform your vision into actionable technology roadmaps.",
                accent: "border-l-primary",
              },
              {
                icon: Cloud,
                title: "Cloud Architecture",
                description: "Scalable, secure, and intelligent cloud solutions.",
                accent: "border-l-secondary",
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Fortress-level protection for your digital assets.",
                accent: "border-l-accent",
              },
              {
                icon: Settings,
                title: "System Integration",
                description: "Seamless connectivity across all your platforms.",
                accent: "border-l-primary",
              },
              {
                icon: Users,
                title: "Technical Support",
                description: "24/7 expert support when you need it most.",
                accent: "border-l-secondary",
              },
              {
                icon: Globe,
                title: "Digital Innovation",
                description: "Cutting-edge solutions for tomorrow's challenges.",
                accent: "border-l-accent",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group morphing-card bg-card/50 backdrop-blur-sm border-l-4 ${service.accent} hover:shadow-2xl transition-all duration-500 interactive-glow`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground font-sans">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground font-mono">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-semibold text-primary font-mono uppercase tracking-wider">
                    Ready to Transform?
                  </div>
                </div>

                <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight font-sans">
                  LET'S BUILD
                  <span className="block text-primary">THE FUTURE</span>
                  <span className="block text-3xl text-muted-foreground font-mono">together</span>
                </h2>

                <p className="text-xl text-muted-foreground leading-relaxed font-mono max-w-2xl">
                  Your next breakthrough is just one conversation away. Let's discuss how we can revolutionize your
                  business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold rounded-full morphing-card dynamic-shadow"
                >
                  <Link href="/contact">
                    Start Conversation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 px-10 py-6 text-lg rounded-full interactive-glow bg-transparent"
                >
                  <Link href="/portfolio">View Our Impact</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center floating-element border border-primary/20 backdrop-blur-sm">
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center mx-auto dynamic-shadow">
                      <Monitor className="w-16 h-16 text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary font-sans">Innovation</div>
                      <div className="text-muted-foreground font-mono">Delivered Daily</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
