"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-success/10 animate-pulse" />
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-accent to-success bg-clip-text text-transparent text-balance animate-float">
              Get In{" "}
              <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Ready to transform your business with professional IT solutions? Contact us today for a free consultation
              and discover how we can help you achieve your technology goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/30 animate-float">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                      <CheckCircle className="w-16 h-16 text-accent mx-auto animate-bounce" />
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-foreground font-medium">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            placeholder="Your full name"
                            className="border-border/50 focus:border-accent/50 transition-colors duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            placeholder="your.email@company.com"
                            className="border-border/50 focus:border-accent/50 transition-colors duration-300"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-foreground font-medium">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            placeholder="Your company name"
                            className="border-border/50 focus:border-accent/50 transition-colors duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-foreground font-medium">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="(555) 123-4567"
                            className="border-border/50 focus:border-accent/50 transition-colors duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-foreground font-medium">
                          Service Interest
                        </Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger className="border-border/50 focus:border-accent/50 transition-colors duration-300">
                            <SelectValue placeholder="Select a service you're interested in" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consulting">IT Consulting & Strategy</SelectItem>
                            <SelectItem value="cloud">Cloud Solutions</SelectItem>
                            <SelectItem value="security">Cybersecurity Services</SelectItem>
                            <SelectItem value="integration">System Integration</SelectItem>
                            <SelectItem value="infrastructure">Infrastructure Management</SelectItem>
                            <SelectItem value="development">Mobile & Web Development</SelectItem>
                            <SelectItem value="data">Data Management</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground font-medium">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                          placeholder="Tell us about your project or IT needs..."
                          rows={5}
                          className="border-border/50 focus:border-accent/50 transition-colors duration-300 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        variant="gradient"
                        className="w-full bg-gradient-to-r from-accent to-success hover:from-accent/90 hover:to-success/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="group hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-card to-card/80 border-border/50 hover:border-accent/30 animate-float">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                    Contact Information
                  </CardTitle>
                  <CardDescription>Get in touch with us directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3 group/item hover:bg-accent/5 p-2 rounded-lg transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        14301 SW 31st Street
                        <br />
                        Miami, FL 33175
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 group/item hover:bg-accent/5 p-2 rounded-lg transition-colors duration-300">
                    <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground text-sm">(276) 444-9864</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 group/item hover:bg-accent/5 p-2 rounded-lg transition-colors duration-300">
                    <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground text-sm">info@hanitsolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 group/item hover:bg-accent/5 p-2 rounded-lg transition-colors duration-300">
                    <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="font-semibold text-foreground">Business Hours</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="group hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-card to-card/80 border-border/50 hover:border-accent/30 animate-float"
                style={{ animationDelay: "0.2s" }}
              >
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-foreground to-success bg-clip-text text-transparent">
                    Quick Response
                  </CardTitle>
                  <CardDescription>We're committed to fast communication</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 group/item hover:bg-success/5 p-2 rounded-lg transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-accent group-hover/item:text-success group-hover/item:scale-110 transition-all duration-300" />
                    <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                      Email responses within 4 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 group/item hover:bg-success/5 p-2 rounded-lg transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-accent group-hover/item:text-success group-hover/item:scale-110 transition-all duration-300" />
                    <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                      Phone calls returned same day
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 group/item hover:bg-success/5 p-2 rounded-lg transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-accent group-hover/item:text-success group-hover/item:scale-110 transition-all duration-300" />
                    <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                      Free consultation available
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 group/item hover:bg-success/5 p-2 rounded-lg transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-accent group-hover/item:text-success group-hover/item:scale-110 transition-all duration-300" />
                    <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                      Emergency support available
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-muted/30 via-accent/5 to-success/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Our Location
            </h2>
            <p className="text-muted-foreground">Visit us at our Miami headquarters</p>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-accent/20 group hover:shadow-2xl transition-all duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.8947234567!2d-80.4234567!3d25.7234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c3e12345678%3A0x1234567890abcdef!2s14301%20SW%2031st%20St%2C%20Miami%2C%20FL%2033175!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HAN IT Solutions Location - 14301 SW 31st Street, Miami, FL 33175"
              className="group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/20">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">
                HAN IT Solutions, LLC - 14301 SW 31st Street, Miami, FL 33175
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
