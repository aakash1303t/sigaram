import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

export default function VirtualTourSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="virtual-tour" 
      className="py-20 bg-gradient-to-br from-secondary to-white" 
      ref={ref}
      data-testid="virtual-tour-section"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4" data-testid="virtual-tour-title">
            Take a Virtual Tour
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="virtual-tour-subtitle">
            Explore our beautiful campus from the comfort of your home
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group" data-testid="video-container">
            <img
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675"
              alt="Virtual tour preview"
              className="w-full aspect-video object-cover"
              data-testid="video-thumbnail"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
              <motion.button
                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                data-testid="play-button"
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-display font-bold text-2xl mb-2">
                Welcome to Sigaram Montessori
              </h3>
              <p className="text-white/90">
                Join us on a journey through our classrooms, outdoor spaces, and learning areas
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <motion.div
              className="bg-white rounded-2xl p-6 text-center shadow-lg card-hover"
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255, 111, 15, 0.15)" }}
              data-testid="tour-feature-classrooms"
            >
              <h4 className="font-display font-bold text-foreground text-lg mb-2">
                Montessori Classrooms
              </h4>
              <p className="text-muted-foreground">
                See our beautifully prepared learning environments
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 text-center shadow-lg card-hover"
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255, 111, 15, 0.15)" }}
              data-testid="tour-feature-outdoor"
            >
              <h4 className="font-display font-bold text-foreground text-lg mb-2">
                Outdoor Spaces
              </h4>
              <p className="text-muted-foreground">
                Explore our gardens and play areas
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 text-center shadow-lg card-hover"
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255, 111, 15, 0.15)" }}
              data-testid="tour-feature-facilities"
            >
              <h4 className="font-display font-bold text-foreground text-lg mb-2">
                Special Facilities
              </h4>
              <p className="text-muted-foreground">
                Discover our library, art studio, and more
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
