import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Baby, HandHeart, Users, Brain, Lightbulb, Star, Heart } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Developing problem-solving skills through exploration",
      color: "bg-primary",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Nurturing imagination and self-expression",
      color: "bg-accent",
    },
    {
      icon: Star,
      title: "Independence",
      description: "Building confidence and self-reliance",
      color: "bg-primary",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Fostering empathy and respect for others",
      color: "bg-accent",
    },
  ];

  const features = [
    {
      icon: Baby,
      title: "Child-Centered Learning",
      description: "Each child learns at their own pace in a prepared environment designed for exploration.",
    },
    {
      icon: HandHeart,
      title: "Hands-On Materials",
      description: "Specially designed Montessori materials make abstract concepts tangible and engaging.",
    },
    {
      icon: Users,
      title: "Mixed-Age Classrooms",
      description: "Children learn from and with each other, building social skills and leadership.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref} data-testid="about-section">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4" data-testid="about-title">
            About Our School
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            Discover the Montessori difference that makes learning a joyful journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="about-image"
          >
            <img
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Montessori classroom environment"
              className="rounded-3xl shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-display font-bold text-foreground mb-6" data-testid="montessori-method-title">
              The Montessori Method
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="montessori-description">
              At Sigaram Montessori, we follow the authentic Montessori philosophy developed by Dr. Maria Montessori. 
              Our approach respects each child's unique developmental journey and fosters independence, curiosity, 
              and a lifelong love of learning.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className={`${index % 2 === 0 ? 'text-primary' : 'text-accent'} text-xl`} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-lg mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Cards */}
        <motion.div
          className="grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          data-testid="values-grid"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-secondary rounded-2xl p-6 text-center card-hover"
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255, 111, 15, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
              data-testid={`value-card-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <value.icon className="text-white text-2xl" />
              </div>
              <h4 className="font-display font-semibold text-foreground text-lg mb-2">
                {value.title}
              </h4>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
