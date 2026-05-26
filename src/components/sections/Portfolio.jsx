import { motion } from "framer-motion";

import Container from "../common/Container";

import { portfolioItems } from "../../data/portfolio";

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px]" />

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
            Portfolio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mt-4 leading-tight"
          >
            Viral Content That{" "}
            <span className="text-lime-400">Drives Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg mt-6 max-w-2xl"
          >
            We help fitness creators grow faster using cinematic short-form
            editing designed for engagement and conversions.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Video */}
              <div className="relative overflow-hidden">
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Floating Metric */}
                <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full">
                  <p className="text-sm font-semibold text-lime-400">
                    {item.views}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-gray-500">
                      {item.category}
                    </p>

                    <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                  </div>

                  <div className="text-right">
                    <p className="text-lime-400 font-bold">{item.result}</p>
                  </div>
                </div>

                {/* Bottom Line */}
                <div className="w-0 group-hover:w-full h-[2px] bg-lime-400 mt-8 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
