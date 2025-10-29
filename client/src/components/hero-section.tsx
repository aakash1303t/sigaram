import { motion } from "framer-motion";
import { Star, ArrowRight, ChevronRight, Heart, Award } from "lucide-react";

export default function HeroSection() {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-secondary to-white"
      data-testid="hero-section"
    >
      {/* Decorative Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Admission Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary/10 border-2 border-primary/30 rounded-full px-6 py-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              data-testid="admission-badge"
            >
              <Star className="text-primary text-lg" />
              <span className="font-display font-semibold text-primary text-lg">
                Admissions Open for Vijayadashami
              </span>
              <Star className="text-primary text-lg" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-testid="hero-title"
            >
              Where Little{" "}
              <span className="text-primary">Minds</span>{" "}
              Grow Big
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="hero-description"
            >
              Nurturing curiosity, independence, and a love for learning through the authentic Montessori method.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={handleScrollToContact}
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 111, 15, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                data-testid="button-enroll"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={handleScrollToAbout}
                className="inline-flex items-center space-x-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                data-testid="button-learn-more"
              >
                <span>Learn More</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.img
              src="/sigaram2.png"
              alt="Happy children in Montessori classroom"
              className="rounded-3xl shadow-2xl w-full"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              data-testid="hero-image"
            />

            {/* Floating Cards */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              data-testid="stat-card-families"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Heart className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-lg">50+</p>
                  <p className="text-sm text-muted-foreground">Happy Families</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              data-testid="stat-card-certified"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Award className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-lg">AMI Certified</p>
                  <p className="text-sm text-muted-foreground">Teachers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="wave-path"
          />
        </svg>
      </div>
    </section>
  );
}
