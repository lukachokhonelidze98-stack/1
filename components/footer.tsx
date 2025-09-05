import Link from "next/link"
import { Monitor, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-sidebar-primary-foreground" />
              </div>
              <span className="font-bold text-lg">HAN IT Solutions</span>
            </div>
            <p className="text-sidebar-foreground/80 text-sm">
              Professional IT consulting and solutions company serving businesses with cutting-edge technology services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-sidebar-primary" />
                <span className="text-sidebar-foreground/80">14301 SW 31st St, Miami, FL 33175</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sidebar-primary" />
                <span className="text-sidebar-foreground/80">(276) 444-9864</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sidebar-primary" />
                <span className="text-sidebar-foreground/80">info@hanitsolutions.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sm text-sidebar-foreground/60">
          <p>&copy; {currentYear} HAN IT Solutions, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
