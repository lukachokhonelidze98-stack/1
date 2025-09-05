import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Monitor,
  Shield,
  Cloud,
  Settings,
  Users,
  Server,
  Database,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Rocket,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: "IT Consulting & Strategy",
      description:
        "Strategic technology planning and digital transformation guidance to align IT with your business goals.",
      features: [
        "Technology roadmap development",
        "Digital transformation planning",
        "IT infrastructure assessment",
        "Cost optimization strategies",
        "Vendor selection and management",
      ],
      pricing: "Starting at $150/hour",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "from-blue-500 to-cyan-500",
      border: "border-blue-500/20",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Comprehensive cloud services including migration, management, and optimization for scalability.",
      features: [
        "Cloud migration planning",
        "AWS, Azure, Google Cloud setup",
        "Cloud security implementation",
        "Performance optimization",
        "Cost management and monitoring",
      ],
      pricing: "Custom pricing",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconBg: "from-purple-500 to-pink-500",
      border: "border-purple-500/20",
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Protect your business with comprehensive security assessments and advanced protection strategies.",
      features: [
        "Security audits and assessments",
        "Firewall configuration",
        "Endpoint protection setup",
        "Security policy development",
        "Incident response planning",
      ],
      pricing: "Starting at $200/hour",
      gradient: "from-red-500/10 to-orange-500/10",
      iconBg: "from-red-500 to-orange-500",
      border: "border-red-500/20",
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration of business systems and applications for improved operational efficiency.",
      features: [
        "API development and integration",
        "Database synchronization",
        "Workflow automation",
        "Legacy system modernization",
        "Third-party software integration",
      ],
      pricing: "Project-based",
      gradient: "from-green-500/10 to-emerald-500/10",
      iconBg: "from-green-500 to-emerald-500",
      border: "border-green-500/20",
    },
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Complete management of your IT infrastructure including servers, networks, and storage systems.",
      features: [
        "Server setup and maintenance",
        "Network design and optimization",
        "Storage solutions",
        "Backup and disaster recovery",
        "Performance monitoring",
      ],
      pricing: "Monthly retainer available",
      gradient: "from-indigo-500/10 to-blue-500/10",
      iconBg: "from-indigo-500 to-blue-500",
      border: "border-indigo-500/20",
    },
    {
      icon: Smartphone,
      title: "Mobile & Web Development",
      description: "Custom application development for web and mobile platforms tailored to your business needs.",
      features: [
        "Responsive web applications",
        "Mobile app development",
        "E-commerce solutions",
        "Custom software development",
        "UI/UX design services",
      ],
      pricing: "Starting at $5,000",
      gradient: "from-yellow-500/10 to-orange-500/10",
      iconBg: "from-yellow-500 to-orange-500",
      border: "border-yellow-500/20",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Comprehensive data solutions including analytics, backup, and database optimization services.",
      features: [
        "Database design and optimization",
        "Data migration services",
        "Business intelligence setup",
        "Data backup solutions",
        "Analytics and reporting",
      ],
      pricing: "Custom pricing",
      gradient: "from-teal-500/10 to-cyan-500/10",
      iconBg: "from-teal-500 to-cyan-500",
      border: "border-teal-500/20",
    },
    {
      icon: Users,
      title: "Technical Support",
      description: "Reliable ongoing support and maintenance to keep your systems running smoothly 24/7.",
      features: [
        "Help desk support",
        "Remote troubleshooting",
        "System maintenance",
        "Software updates",
        "User training and documentation",
      ],
      pricing: "Starting at $100/hour",
      gradient: "from-violet-500/10 to-purple-500/10",
      iconBg: "from-violet-500 to-purple-500",
      border: "border-violet-500/20",
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
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-blue-500/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <Sparkles className="w-4 h-4 text-blue-300" />
                Comprehensive IT Services
                <Zap className="w-4 h-4 text-purple-300" />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance leading-tight">
                Professional IT Solutions for
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x">
                  Every Business Need
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
                From strategic consulting to hands-on technical implementation, we provide the complete range of IT
                services your business needs to succeed in today's digital landscape.
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
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 px-8 py-4 text-lg bg-white/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-white border-green-500/30 text-sm font-semibold">
              <Settings className="w-4 h-4 mr-2" />
              Our Services
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Complete IT Solutions Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional technology services designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:-translate-y-3 hover:scale-105 ${service.border} border`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.iconBg} rounded-2xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                        <Badge
                          variant="secondary"
                          className="mt-2 bg-gradient-to-r from-accent/10 to-primary/10 text-accent border-accent/20"
                        >
                          {service.pricing}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4 leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-success/10"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-blue-500/30 text-sm font-semibold">
              <Rocket className="w-4 h-4 mr-2" />
              Our Process
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Structured Approach to Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A proven methodology for delivering exceptional IT solutions tailored to your business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your current IT infrastructure and understand your business goals.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                step: "02",
                title: "Planning",
                description: "We develop a comprehensive strategy and roadmap tailored to your needs.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute the plan with minimal disruption to your daily operations.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                step: "04",
                title: "Support",
                description: "We provide ongoing support and optimization to ensure continued success.",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${process.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                >
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </div>
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
            <Badge className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white border-green-500/30 text-sm font-semibold backdrop-blur-sm">
              <Rocket className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </Badge>

            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Transform Your Business
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Today
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss your IT needs and receive a customized solution proposal tailored to your
              business.
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
                Request Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 px-10 py-5 text-lg backdrop-blur-sm bg-white/10 hover:shadow-lg transition-all duration-300"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
