import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Akash Deivasigamoni",
      rating: 5,
      text: "One of the best preschools in Chennai , and honestly their handwriting classes are absolutely fantastic. It's the best preschool for kids."
    },
    {
      name: "Habeeb Salman",
      rating: 5,
      text: "Having very good experience at this Thiruvanmiyur day care! Teachers are caring and encouraging kids to try new activities. My kid enjoys going there, so that's a thumbs up from me and kudos to the team"
    },
    {
      name: "Preethi Natarajan",
      rating: 5,
      text: "Best preschool near kottivakkam. My daughter Maghilini studied past one year she is doing well and her performance is very good in writing and speaking."
    },
    {
      name: "Divya Rajendran",
      rating: 5,
      text: "Sigaram Montessori is the best place for every children to groom their talents and their unique methods which helps them to learn things practically and have self confidence which is most important for all the children’s growth. Thank you Sigaram for helping my son to know the values and basic ground skill development. We see lot of improvements and see him doing things independently 😊😊😊"
    },
  ];

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gradient-to-b from-white to-secondary" 
      ref={ref}
      data-testid="testimonials-section"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4" data-testid="testimonials-title">
            What Parents Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-subtitle">
            Hear from families who trust us with their children's education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl card-hover relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(255, 111, 15, 0.15)" 
              }}
              data-testid={`testimonial-card-${index}`}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Quote className="text-white w-6 h-6" />
              </div>

              <div className="flex items-center mb-6">
                
                <div>
                  <h4 className="font-display font-bold text-foreground text-lg" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  
                </div>
              </div>

              <div className="flex mb-4" data-testid={`testimonial-rating-${index}`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed" data-testid={`testimonial-text-${index}`}>
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
