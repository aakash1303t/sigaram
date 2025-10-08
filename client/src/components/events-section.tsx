import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      date: "15",
      month: "Oct",
      title: "Vijayadashami Celebrations",
      time: "9:00 AM - 12:00 PM",
      location: "School Auditorium",
      description: "Join us for our special Vijayadashami celebration with cultural performances and traditional activities.",
      color: "bg-primary"
    },
    {
      date: "20",
      month: "Oct",
      title: "Parent-Teacher Meeting",
      time: "2:00 PM - 5:00 PM",
      location: "Individual Classrooms",
      description: "Discuss your child's progress and development with our Montessori-certified teachers.",
      color: "bg-accent"
    },
    {
      date: "28",
      month: "Oct",
      title: "Outdoor Learning Day",
      time: "8:30 AM - 3:30 PM",
      location: "School Garden & Park",
      description: "A special day of nature exploration, outdoor activities, and environmental learning.",
      color: "bg-primary"
    },
    {
      date: "05",
      month: "Nov",
      title: "Art & Craft Exhibition",
      time: "10:00 AM - 4:00 PM",
      location: "Art Studio",
      description: "Showcase of creative work by our students. Parents and family members are welcome to attend.",
      color: "bg-accent"
    },
    {
      date: "12",
      month: "Nov",
      title: "Diwali Festival",
      time: "9:00 AM - 1:00 PM",
      location: "School Grounds",
      description: "Celebrate the festival of lights with traditional activities, rangoli making, and cultural programs.",
      color: "bg-primary"
    },
    {
      date: "25",
      month: "Nov",
      title: "Winter Concert",
      time: "5:00 PM - 7:00 PM",
      location: "School Auditorium",
      description: "Annual music and movement performance by our students, featuring songs, dances, and instrumental pieces.",
      color: "bg-accent"
    },
  ];

  return (
    <section 
      id="events" 
      className="py-20 bg-white" 
      ref={ref}
      data-testid="events-section"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4" data-testid="events-title">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="events-subtitle">
            Stay updated with our school activities and celebrations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-secondary rounded-3xl overflow-hidden shadow-lg card-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(255, 111, 15, 0.15)" 
              }}
              data-testid={`event-card-${index}`}
            >
              <div className="flex">
                <div className={`${event.color} text-white p-6 flex flex-col items-center justify-center min-w-[100px]`}>
                  <span className="text-3xl font-display font-bold" data-testid={`event-date-${index}`}>
                    {event.date}
                  </span>
                  <span className="text-sm font-semibold uppercase" data-testid={`event-month-${index}`}>
                    {event.month}
                  </span>
                </div>

                <div className="p-6 flex-1">
                  <h3 className="font-display font-bold text-foreground text-xl mb-3" data-testid={`event-title-${index}`}>
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      <span data-testid={`event-time-${index}`}>{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span data-testid={`event-location-${index}`}>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`event-description-${index}`}>
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-muted-foreground flex items-center justify-center">
            <Calendar className="w-5 h-5 mr-2 text-primary" />
            More events will be added throughout the year. Stay tuned!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
