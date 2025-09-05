import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Database } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Privacy <span className="text-accent">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Shield,
                title: "Data Protection",
                description: "We use industry-standard security measures to protect your information.",
              },
              {
                icon: Eye,
                title: "Transparency",
                description: "We clearly explain what data we collect and how we use it.",
              },
              {
                icon: Lock,
                title: "Secure Storage",
                description: "Your data is encrypted and stored securely in compliance with regulations.",
              },
              {
                icon: Database,
                title: "Limited Collection",
                description: "We only collect data necessary to provide our services effectively.",
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

          {/* Policy Sections */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us, such as when you contact us, request services, or
                    fill out forms on our website. This may include your name, email address, phone number, company
                    information, and project details.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technical Information</h4>
                  <p className="text-muted-foreground">
                    We automatically collect certain technical information when you visit our website, including your IP
                    address, browser type, operating system, and pages visited. This helps us improve our website and
                    services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Provide and improve our IT consulting and technical services</li>
                  <li>• Respond to your inquiries and communicate about our services</li>
                  <li>• Send you relevant information about our services and industry updates</li>
                  <li>• Analyze website usage to improve user experience</li>
                  <li>• Comply with legal obligations and protect our business interests</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except in the following circumstances:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• With trusted service providers who assist us in operating our business</li>
                  <li>• When required by law or to protect our rights and safety</li>
                  <li>• In connection with a business transfer or merger</li>
                  <li>• With your explicit consent for specific purposes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures
                  include encryption, secure servers, and regular security assessments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">You have the right to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Access and review the personal information we have about you</li>
                  <li>• Request corrections to inaccurate or incomplete information</li>
                  <li>• Request deletion of your personal information</li>
                  <li>• Opt out of marketing communications</li>
                  <li>• Request a copy of your data in a portable format</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our website uses cookies and similar technologies to enhance your browsing experience, analyze site
                  traffic, and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>HAN IT Solutions, LLC</p>
                  <p>14301 SW 31st Street, Miami, FL 33175</p>
                  <p>Phone: (276) 444-9864</p>
                  <p>Email: privacy@hanitsolutions.com</p>
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
