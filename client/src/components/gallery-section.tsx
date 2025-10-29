import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/sigaram1.jpg",
      alt: "Classroom environment"
    },
    {
      src: "/sigaram2.png",
      alt: "Children doing art activities"
    },
    {
      src: "/sigaram3.png",
      alt: "Outdoor play area"
    },
    {
      src: "/sigaram4.png",
      alt: "Math learning activity"
    },
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

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
              className="card-hover cursor-pointer"
              onClick={() => setSelectedImage(index)}
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

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none" data-testid="lightbox-dialog">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              data-testid="lightbox-close"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {selectedImage !== null && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  data-testid="lightbox-previous"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <motion.img
                  key={selectedImage}
                  src={galleryImages[selectedImage].src.replace('w=500&h=500', 'w=1200&h=1200')}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full max-h-[90vh] object-contain"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  data-testid="lightbox-image"
                />

                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  data-testid="lightbox-next"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-center px-4">
                  {galleryImages[selectedImage].alt}
                </p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
