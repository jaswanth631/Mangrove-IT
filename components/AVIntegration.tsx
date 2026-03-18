import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AVIntegration = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Video Conferencing",
      description:
        "Workplace communications are undergoing substantial transformations. Many people are now working remote, or from a home office. Corporate institutions are also finding they need to add more huddle and VC rooms in their head offices to accommodate rapid changes.",
    },
    {
      title: "Large PA & Line Arrays",
      description:
        "Our team has experience with the design and commissioning of Sound Reinforcement System for auditoriums, performing arts canters, houses of worship, community halls, sporting facilities and anywhere full music quality amplification is required.",
    },
    {
      title: "Projection",
      description:
        "We access to the latest Projection technologies including LCD and DLP units from all major manufacturers including Epson, Panasonic, Sony, Delta, Barco, BenQ, Optoma, Canon, NEC, Christie Digital.",
    },
    {
      title: "LED & Video Wall",
      description:
        "LED Screens can be used for major impact both indoors and outdoors. Advertising, Auditoriums, Sports Venues, Command Centres, Conference Rooms. Hotels, Churches, and Universities are all candidates for Led screens.",
    },
    {
      title: "Commercial TV Screens",
      description:
        "We distribute all major brands and sizes of Commercial TV screens. Leading products such as LG, Samsung, Sony, Panasonic, NEC, ViewSonic and Philips are available.",
    },
    {
      title: "Interactive Touch Screens",
      description:
        "The way you communicate and collaborate on an interactive display which combines high-quality advanced technology with a familiar user experience to enhance presentations, meetings, and in class lessons.",
    },
    {
      title: "Digital Signage",
      description:
        "We are at the forefront in offering Digital Signage Display Solutions. From a single Information Display with a Digital Media Player, to a fully networked site running multiple screens across the country.",
    },
    {
      title: "Stage & Concert Lighting",
      description:
        "Our team has extensive experience with consulting, design, installation, and operation of complex performance lighting systems. This covers venues including theatres, Auditoriums, performing arts centres, community halls and houses of worship.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">AV Integration Services</h2>
            <div className="accent-line my-6" />
            <p className="section-subtitle max-w-3xl mx-auto">
              Cutting-edge audio-visual solutions designed to transform your
              spaces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="card hover-lift group"
              >
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-sm mb-4">
                  {index + 1}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-navy-950">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AVIntegration;
