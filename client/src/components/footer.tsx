import { GraduationCap, Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#gallery", label: "Gallery" },
  ];

  const programs = [
    "Toddler (18m - 3y)",
    "Primary (3 - 6y)",
    "Elementary (6 - 12y)",
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/sigarammontessori/", name: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/sigarammontessorinanmang/", name: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@SigaramMontessorischool/shorts", name: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-white py-12" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <GraduationCap className="text-white" />
              </div>
              <span className="text-xl font-display font-bold">Sigaram Montessori</span>
            </motion.div>
            <p className="text-white/70">
              Nurturing young minds through authentic Montessori education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/70 hover:text-primary transition-colors text-left"
                    whileHover={{ x: 5 }}
                    data-testid={`footer-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index} className="text-white/70" data-testid={`footer-program-${index}`}>
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`social-${social.name.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70" data-testid="footer-copyright">
            &copy; 2024 Sigaram Montessori. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
