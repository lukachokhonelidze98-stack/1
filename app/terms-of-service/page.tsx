import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Terms of <span className="text-accent">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              These terms govern your use of our services and establish the legal framework for our business
              relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: FileText,
                title: "Service Agreement",
                description: "Clear terms for all IT consulting and technical services we provide.",
              },
              {
                icon: Scale,
                title: "Legal Framework",
                description: "Establishes rights, responsibilities, and legal protections for both parties.",
              },
              {
                icon: Shield,
                title: "Liability Protection",
                description: "Defines limitations and protections for service delivery and outcomes.",
              },
              {
                icon: AlertTriangle,
                title: "Important Notices",
                description: "Key information about service limitations and user responsibilities.",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By accessing our website or engaging our services, you agree to be bound by these Terms of Service and
                  all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
                  from using our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Services Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  HAN IT Solutions, LLC provides professional IT consulting, system integration, cybersecurity, cloud
                  solutions, and related technical services. Specific service details, deliverables, and timelines will
                  be outlined in separate service agreements or statements of work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Client Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Clients agree to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Provide accurate and complete information necessary for service delivery</li>
                  <li>• Grant appropriate access to systems and resources as required</li>
                  <li>• Maintain confidentiality of any proprietary information shared</li>
                  <li>• Pay all fees according to agreed payment terms</li>
                  <li>• Comply with all applicable laws and regulations</li>
                  <li>• Backup critical data before any system modifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Fees and Billing</h4>
                  <p className="text-muted-foreground">
                    Service fees will be specified in individual service agreements. Payment terms are typically net 30
                    days unless otherwise agreed. Late payments may incur additional charges.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Expenses</h4>
                  <p className="text-muted-foreground">
                    Clients are responsible for reimbursing reasonable expenses incurred in connection with service
                    delivery, including travel, software licenses, and third-party services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Client Data and Systems</h4>
                  <p className="text-muted-foreground">
                    Clients retain all rights to their data, systems, and pre-existing intellectual property. We claim
                    no ownership over client information or systems.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Our Methodologies</h4>
                  <p className="text-muted-foreground">
                    HAN IT Solutions retains ownership of our proprietary methodologies, tools, and general knowledge
                    developed independently of client engagements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Confidentiality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We maintain strict confidentiality regarding all client information and will not disclose confidential
                  information to third parties without written consent, except as required by law or court order.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our liability for any claims arising from our services is limited to the amount paid for the specific
                  services giving rise to the claim. We are not liable for indirect, consequential, or punitive damages.
                  Clients are responsible for maintaining appropriate backups and disaster recovery procedures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Service Warranties and Disclaimers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We warrant that our services will be performed in a professional manner consistent with industry
                  standards. However, we make no guarantees regarding specific outcomes, system performance, or
                  compatibility with third-party systems. All services are provided "as is" except for express
                  warranties in writing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Either party may terminate services with written notice as specified in the service agreement.
                  Termination does not relieve either party of obligations incurred prior to termination. Upon
                  termination, we will return or destroy client confidential information as requested.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  These terms are governed by the laws of the State of Florida. Any disputes will be resolved through
                  binding arbitration in Miami-Dade County, Florida, except for claims involving intellectual property
                  rights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">For questions about these Terms of Service, please contact us:</p>
                <div className="space-y-2 text-muted-foreground">
                  <p>HAN IT Solutions, LLC</p>
                  <p>14301 SW 31st Street, Miami, FL 33175</p>
                  <p>Phone: (276) 444-9864</p>
                  <p>Email: legal@hanitsolutions.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
