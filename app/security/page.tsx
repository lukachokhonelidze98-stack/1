import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shield, Lock, Eye, Server, FileCheck, Users, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"

export default function SecurityPage() {
  const securityMeasures = [
    {
      icon: Lock,
      title: "Data Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption.",
      status: "Implemented",
    },
    {
      icon: Shield,
      title: "Access Controls",
      description: "Multi-factor authentication and role-based access controls protect all systems and data.",
      status: "Implemented",
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Our systems are hosted on secure, compliant cloud infrastructure with regular security updates.",
      status: "Implemented",
    },
    {
      icon: Eye,
      title: "Monitoring & Logging",
      description: "24/7 security monitoring and comprehensive logging of all system activities.",
      status: "Implemented",
    },
    {
      icon: FileCheck,
      title: "Regular Audits",
      description: "Quarterly security audits and penetration testing to identify and address vulnerabilities.",
      status: "Ongoing",
    },
    {
      icon: Users,
      title: "Staff Training",
      description: "Regular security awareness training for all team members and contractors.",
      status: "Ongoing",
    },
  ]

  const certifications = [
    {
      title: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for security, availability, and confidentiality.",
      status: "In Progress",
    },
    {
      title: "ISO 27001",
      description: "International standard for information security management systems.",
      status: "Planned",
    },
    {
      title: "NIST Framework",
      description: "Following NIST Cybersecurity Framework guidelines and best practices.",
      status: "Implemented",
    },
  ]

  const policies = [
    {
      title: "Incident Response Plan",
      description: "Comprehensive plan for detecting, responding to, and recovering from security incidents.",
    },
    {
      title: "Data Retention Policy",
      description: "Clear guidelines for data storage, retention periods, and secure disposal procedures.",
    },
    {
      title: "Vendor Security Assessment",
      description: "Rigorous security evaluation process for all third-party vendors and partners.",
    },
    {
      title: "Business Continuity Plan",
      description: "Detailed procedures to ensure service continuity during disruptions or emergencies.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Security & <span className="text-accent">Compliance</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Your security is our priority. Learn about our comprehensive security measures, compliance standards, and
              commitment to protecting your data and systems.
            </p>
          </div>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link href="/contact">
              Discuss Security Requirements
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Security Measures</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security controls to protect your data and ensure service reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMeasures.map((measure, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <measure.icon className="w-5 h-5 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{measure.title}</CardTitle>
                    </div>
                    <Badge variant={measure.status === "Implemented" ? "default" : "secondary"} className="text-xs">
                      {measure.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{measure.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Compliance & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain compliance with industry standards and are working toward additional certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <Badge variant={cert.status === "Implemented" ? "default" : "outline"} className="mt-2">
                    {cert.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{cert.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Policies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Security Policies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive policies and procedures to ensure consistent security practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent" />
                    <CardTitle className="text-xl">{policy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{policy.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Commitment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Security Commitment</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  At HAN IT Solutions, security is not an afterthought—it's built into everything we do. We understand
                  that our clients trust us with their most valuable digital assets, and we take that responsibility
                  seriously.
                </p>
                <p>
                  Our security program is designed to protect against evolving threats while maintaining the flexibility
                  and performance our clients need. We continuously monitor the threat landscape and update our security
                  measures accordingly.
                </p>
                <p>
                  We believe in transparency and are committed to keeping our clients informed about our security
                  practices and any incidents that may affect them.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-accent" />
                    <span>Security Incident Reporting</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    If you discover a security vulnerability or have security concerns, please contact us immediately:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold text-foreground">Security Team</p>
                    <p className="text-muted-foreground">Email: security@hanitsolutions.com</p>
                    <p className="text-muted-foreground">Phone: (276) 444-9864 (24/7 Emergency Line)</p>
                    <p className="text-muted-foreground">Response Time: Within 4 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We regularly update our security measures and will notify clients of any changes that may affect
                    their services. Subscribe to our security bulletins for the latest updates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Questions About Our Security?</h2>
          <p className="text-lg text-muted-foreground">
            We're happy to discuss our security measures in detail and address any specific requirements you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Contact Security Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
