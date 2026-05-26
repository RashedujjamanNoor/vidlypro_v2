import { motion } from "framer-motion";

import Container from "../common/Container";

import { testimonials } from "../../data/testimonials";

const stats = [
  {
    number: "50M+",
    label: "Views Generated",
  },

  {
    number: "120+",
    label: "Videos Edited",
  },

  {
    number: "15+",
    label: "Fitness Clients",
  },

  {
    number: "98%",
    label: "Client Satisfaction",
  },
];

const Results = () => {
  return (
    <section id="results" className="relative py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-lime-400/10 blur-[180px]" />

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
            Results
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mt-4 leading-tight"
          >
            Trusted By Fitness Creators{" "}
            <span className="text-lime-400">Worldwide</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg mt-6 max-w-2xl"
          >
            We help fitness coaches scale their audience and create content
            systems that consistently perform.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <h3 className="text-4xl md:text-5xl font-black text-lime-400">
                {stat.number}
              </h3>

              <p className="text-gray-400 mt-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-6 mt-20">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden hover:border-lime-400/30 transition"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-lime-400/10 via-transparent to-transparent" />

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lime-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-300 leading-relaxed relative z-10">
                “{item.feedback}”
              </p>

              {/* User */}
              <div className="mt-8 relative z-10">
                <h4 className="font-bold text-lg">{item.name}</h4>

                <p className="text-gray-500 text-sm mt-1">{item.role}</p>
              </div>

              {/* Bottom Line */}
              <div className="w-0 group-hover:w-full h-[2px] bg-lime-400 mt-8 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Results;
