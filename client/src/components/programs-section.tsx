import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

export default function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programs = [
    {
      age: "18 months - 3 years",
      title: "Toddler Program",
      description: "A nurturing environment where toddlers develop independence, language skills, and motor coordination through age-appropriate activities.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      features: [
        "Practical life activities",
        "Sensorial exploration", 
        "Language development",
        "Social skills building"
      ],
      badgeColor: "bg-primary/10 text-primary",
    },
    {
      age: "3 - 6 years",
      title: "Primary Program",
      description: "Our core program where children master fundamental skills in language, mathematics, culture, and develop a strong academic foundation.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      features: [
        "Mathematics & geometry",
        "Reading & writing",
        "Cultural studies", 
        "Scientific exploration"
      ],
      badgeColor: "bg-accent/10 text-accent",
    },
    {
      age: "6 - 12 years", 
      title: "Elementary Program",
      description: "Advanced curriculum fostering critical thinking, collaborative learning, and deep exploration of academic subjects and the world.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      features: [
        "Advanced mathematics",
        "Research projects",
        "World cultures & history",
        "Leadership development"
      ],
      badgeColor: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-b from-secondary to-white"
      ref={ref}
      data-testid="programs-section"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4" data-testid="programs-title">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="programs-subtitle">
            Age-appropriate programs designed for optimal development at every stage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="bg-white rounded-3xl overflow-hidden shadow-xl card-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(255, 111, 15, 0.15)" 
              }}
              data-testid={`program-card-${program.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <img
                src={program.image}
                alt={`${program.title} activities`}
                className="w-full h-56 object-cover"
              />
              
              <div className="p-8">
                <div className={`inline-block ${program.badgeColor} px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                  {program.age}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <CheckCircle className={`${index === 1 ? 'text-accent' : 'text-primary'} mr-3 w-5 h-5`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
