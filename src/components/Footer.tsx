import { motion } from "framer-motion";
import { FluidNetworksLogo } from "./FluidNetworksLogo";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Managed IT Services", href: "#" },
    { label: "Cyber Security", href: "#" },
    { label: "Cloud Backups", href: "#" },
    { label: "Business Communications", href: "#" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Support", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Partners", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-fn-blue via-fn-cyan to-fn-green" />
      
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 py-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fn-green to-fn-cyan flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="6" x2="12" y2="12" strokeLinecap="round" />
                    <path d="M8 10 A 6 6 0 1 0 16 10" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-bold text-white font-display">FLUID</span>
                  <span className="text-lg font-bold text-fn-green font-display">NETWORKS</span>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                Empowering businesses with enterprise-grade IT solutions. 
                Your trusted technology partner for the digital age.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+11234567890" className="flex items-center gap-3 text-slate-400 hover:text-fn-cyan transition-colors">
                <Phone className="w-4 h-4" />
                (123) 456-7890
              </a>
              <a href="mailto:info@fluidnets.com" className="flex items-center gap-3 text-slate-400 hover:text-fn-cyan transition-colors">
                <Mail className="w-4 h-4" />
                info@fluidnets.com
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Tech Street, Suite 100<br />Los Angeles, CA 90001</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-fn-cyan transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-fn-cyan transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-fn-cyan transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-fn-cyan hover:to-fn-green hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Fluid Networks. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-fn-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-fn-cyan transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
