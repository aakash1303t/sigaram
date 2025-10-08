import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Classroom environment"
    },
    {
      src: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Children doing art activities"
    },
    {
      src: "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Outdoor play area"
    },
    {
      src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Math learning activity"
    },
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Reading corner"
    },
    {
      src: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Music and movement class"
    },
    {
      src: "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Science exploration area"
    },
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Lunch time"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white" ref={ref} data-testid="gallery-section">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4" data-testid="gallery-title">
            Our School in Pictures
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="gallery-subtitle">
            Take a visual tour of our vibrant learning environment
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="gallery-grid"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                boxShadow: "0 20px 40px rgba(255, 111, 15, 0.15)" 
              }}
              className="card-hover"
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
