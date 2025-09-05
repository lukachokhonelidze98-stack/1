import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import {
  Cloud,
  Settings,
  Building2,
  Stethoscope,
  ShoppingCart,
  GraduationCap,
  ArrowRight,
  Star,
  Sparkles,
  Zap,
  Award,
  TrendingUp,
  CheckCircle,
  Rocket,
} from "lucide-react"

export default function PortfolioPage() {
  const capabilities = [
    {
      icon: Building2,
      industry: "Financial Services",
      title: "Banking Infrastructure Modernization",
      description:
        "Complete IT infrastructure overhaul for regional banking institutions, including cloud migration and security enhancement.",
      technologies: ["AWS", "Cybersecurity", "Database Migration", "Compliance"],
      scope: "Enterprise-level project",
      duration: "6-12 months",
    },
    {
      icon: Stethoscope,
      industry: "Healthcare",
      title: "Medical Practice Management System",
      description:
        "Custom healthcare management solution with patient records, appointment scheduling, and HIPAA compliance.",
      technologies: ["Custom Software", "Database Design", "Security", "Integration"],
      scope: "Multi-location practice",
      duration: "4-8 months",
    },
    {
      icon: ShoppingCart,
      industry: "E-commerce",
      title: "Online Retail Platform Development",
      description:
        "Full-stack e-commerce solution with inventory management, payment processing, and analytics dashboard.",
      technologies: ["Web Development", "Payment Integration", "Analytics", "Mobile App"],
      scope: "Startup to mid-size",
      duration: "3-6 months",
    },
    {
      icon: GraduationCap,
      industry: "Education",
      title: "Educational Institution IT Setup",
      description:
        "Complete network infrastructure, learning management system integration, and student information systems.",
      technologies: ["Network Design", "LMS Integration", "Cloud Services", "Support"],
      scope: "K-12 or Higher Ed",
      duration: "2-4 months",
    },
    {
      icon: Settings,
      industry: "Manufacturing",
      title: "Industrial IoT Implementation",
      description: "Smart factory solutions with IoT sensors, data analytics, and automated reporting systems.",
      technologies: ["IoT", "Data Analytics", "Automation", "Monitoring"],
      scope: "Production facilities",
      duration: "4-10 months",
    },
    {
      icon: Cloud,
      industry: "Professional Services",
      title: "Cloud-First Office Setup",
      description:
        "Modern office infrastructure with cloud-based collaboration tools, security, and remote work capabilities.",
      technologies: ["Cloud Migration", "Collaboration Tools", "Security", "Remote Access"],
      scope: "Small to medium business",
      duration: "1-3 months",
    },
  ]

  const testimonials = [
    {
      quote:
        "HAN IT Solutions transformed our outdated systems into a modern, efficient infrastructure. Their expertise in cloud migration saved us both time and money.",
      author: "Sarah Johnson",
      title: "CTO, TechStart Inc.",
      company: "Technology Startup",
      avatar: "/images/sarah-johnson-avatar.jpg",
    },
    {
      quote:
        "The team's attention to security and compliance was exactly what our healthcare practice needed. They delivered a solution that exceeded our expectations.",
      author: "Dr. Michael Chen",
      title: "Practice Owner",
      company: "Miami Medical Group",
      avatar: "/images/michael-chen-avatar.jpg",
    },
    {
      quote:
        "Professional, reliable, and innovative. HAN IT Solutions helped us scale our e-commerce platform to handle 10x more traffic during peak seasons.",
      author: "Lisa Rodriguez",
      title: "Operations Manager",
      company: "Retail Solutions LLC",
      avatar: "/images/lisa-rodriguez-avatar.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-success/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full animate-pulse-slow"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm font-semibold text-foreground border border-blue-500/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <Sparkles className="w-4 h-4 text-blue-500" />
                Our Portfolio & Capabilities
                <Zap className="w-4 h-4 text-purple-500" />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance leading-tight">
                Innovative Projects &
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x">
                  Success Stories
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
                Explore the types of projects we excel at and see how we've helped businesses across various industries
                achieve their technology goals with innovative IT solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                variant="gradient"
                size="lg"
                className="shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 px-8 py-4 text-lg transform hover:scale-105"
              >
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 px-8 py-4 text-lg bg-white/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>

            <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                {
                  icon: Award,
                  text: "50+ Projects",
                  color: "from-yellow-500 to-orange-500",
                  iconColor: "text-yellow-600",
                },
                {
                  icon: TrendingUp,
                  text: "25+ Happy Clients",
                  color: "from-green-500 to-emerald-500",
                  iconColor: "text-green-600",
                },
                {
                  icon: CheckCircle,
                  text: "99% Success Rate",
                  color: "from-blue-500 to-cyan-500",
                  iconColor: "text-blue-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} shadow-lg`}>
                    <item.icon className={`w-5 h-5 text-white`} />
                  </div>
                  <span className="font-semibold text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-foreground border-green-500/30 text-sm font-semibold">
              <Settings className="w-4 h-4 mr-2" />
              Project Capabilities
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Representative Examples
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the types of projects we specialize in across different industries and see how we deliver
              innovative solutions that drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-sm hover:-translate-y-3 hover:scale-105 border-blue-500/20 border`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <Badge
                          variant="outline"
                          className="mb-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30 text-foreground"
                        >
                          {project.industry}
                        </Badge>
                        <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4 leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Technologies & Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 border-blue-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">Scope:</span>
                      <p className="text-muted-foreground">{project.scope}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Timeline:</span>
                      <p className="text-muted-foreground">{project.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-foreground border-blue-500/30 text-sm font-semibold backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2" />
              Client Testimonials
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hear from businesses that have transformed their operations with our innovative IT solutions and
              professional service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-sm hover:-translate-y-3 hover:scale-105 border-green-500/20 border`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current drop-shadow-sm" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-6 leading-relaxed text-center">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-center space-y-3">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={`${testimonial.author} avatar`}
                        width={64}
                        height={64}
                        className="rounded-full border-2 border-green-500/30 shadow-lg"
                      />
                    </div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-success/10"></div>

        <div className="relative max-w-5xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <Badge className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-foreground border-green-500/30 text-sm font-semibold backdrop-blur-sm">
              <Rocket className="w-4 h-4 mr-2" />
              Ready to Start Your Project?
            </Badge>

            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Transform Your Business
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Today
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with professional IT solutions? Let's discuss your project requirements
              and create a custom solution that fits your needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              variant="gradient"
              size="lg"
              className="shadow-2xl hover:shadow-green-500/25 transition-all duration-300 px-10 py-5 text-lg transform hover:scale-105"
            >
              <Link href="/contact">
                Get Project Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 px-10 py-5 text-lg backdrop-blur-sm bg-white/10 hover:shadow-lg transition-all duration-300"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
