import { motion } from "framer-motion";

import Container from "../common/Container";

import { services } from "../../data/services";

const Services = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lime-400/10 blur-[180px]" />

      <Container>
        {/* Heading */}
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lime-400 uppercase tracking-[0.3em] text-sm"
          >
            Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mt-4 leading-tight"
          >
            Content Systems Built For{" "}
            <span className="text-lime-400">Fitness Coaches</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg mt-6 max-w-2xl"
          >
            We create premium short-form content that helps fitness creators
            grow faster, build authority, and attract high-paying clients.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden hover:border-lime-400/40 transition"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-lime-400/10 via-transparent to-transparent" />

              {/* Number */}
              <div className="text-5xl font-black text-white/10 mb-8">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed relative z-10">
                {service.description}
              </p>

              {/* Bottom Line */}
              <div className="w-0 group-hover:w-full h-[2px] bg-lime-400 mt-8 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
