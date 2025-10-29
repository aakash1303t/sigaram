import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our admissions team",
      contact: "+91 95000 10676",
      link: "tel:+919500010676",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Mail,
      title: "Email Us", 
      description: "Send us your questions",
      contact: "sigarammontessori@gmail.com",
      link: "mailto:sigarammontessori@gmail.com",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Plot No 4 Ram Nagar 1st Street, Backside to Ponniyamman Temple, Ponni Amman Koil Main Rd, Nanmangalam-Kovilambakkam-600129",
      contact: "Get Directions",
      link: "https://www.google.com/maps/search/?api=1&query=12.9397067,80.1776035",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-secondary to-white"
      ref={ref}
      data-testid="contact-section"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4" data-testid="contact-title">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-subtitle">
            Visit us or reach out to learn more about enrollment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="bg-white rounded-3xl p-8 text-center card-hover shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(255, 111, 15, 0.15)"
              }}
              data-testid={`contact-card-${info.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <info.icon className={`${index === 1 ? 'text-accent' : 'text-primary'} text-2xl`} />
              </div>
              
              <h3 className="font-display font-bold text-foreground text-xl mb-3">
                {info.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 whitespace-pre-line">
                {info.description}
              </p>
              
              <motion.a
                href={info.link}
                className={`${index === 1 ? 'text-accent hover:text-accent/80' : 'text-primary hover:text-primary/80'} font-semibold text-lg transition-colors inline-block`}
                whileHover={{ scale: 1.05 }}
                data-testid={`contact-link-${info.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {info.contact}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Office Hours */}
        <motion.div
          className="bg-white rounded-3xl p-8 max-w-3xl mx-auto mt-8 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="office-hours"
        >
          <h3 className="font-display font-bold text-foreground text-2xl mb-6 text-center">
            Office Hours
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center justify-between p-4 bg-secondary rounded-xl">
              <span className="font-semibold text-foreground">Monday - Friday</span>
              <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-secondary rounded-xl">
              <span className="font-semibold text-foreground">Saturday</span>
              <span className="text-muted-foreground">9:00 AM - 1:00 PM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
