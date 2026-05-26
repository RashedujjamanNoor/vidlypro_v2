import { motion } from "framer-motion";

import Container from "../common/Container";
import MagneticButton from "../common/MagneticButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-lime-400/20 blur-[180px]" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[180px]" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            {/* Small Badge */}
            <MagneticButton>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-lime-400" />

                <span className="text-sm text-gray-300 tracking-wide">
                  Editing For Fitness Coaches
                </span>
              </motion.div>
            </MagneticButton>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black leading-[1.05]"
            >
              We Turn Fitness Coaches Into{" "}
              <span className="text-lime-400">Viral Personal Brands</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-8 text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Premium short-form video editing designed to grow your audience,
              increase engagement, and bring more clients to your fitness brand.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <MagneticButton>
                <a
                  href="#contact"
                  className="bg-lime-400 text-black px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
                >
                  Book A Call
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#portfolio"
                  className="border border-white/10 bg-white/5 px-7 py-4 rounded-full font-semibold hover:bg-white/10 transition"
                >
                  View Work
                </a>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="flex gap-10 mt-14"
            >
              <div>
                <h3 className="text-3xl font-bold">50M+</h3>
                <p className="text-gray-400 mt-1">Views Generated</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">120+</h3>
                <p className="text-gray-400 mt-1">Videos Edited</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-gray-400 mt-1">Fitness Clients</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Main Video Card */}
            <div className="relative rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[700px] object-cover"
              >
                <source src="/videos/demo.mp4" type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -top-10 -left-10 bg-black/80 border border-white/10 backdrop-blur-xl p-5 rounded-2xl">
              <h4 className="text-2xl font-bold">+340%</h4>
              <p className="text-gray-400 text-sm">Audience Growth</p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-10 -right-10 bg-black/80 border border-white/10 backdrop-blur-xl p-5 rounded-2xl">
              <h4 className="text-2xl font-bold">12M Views</h4>
              <p className="text-gray-400 text-sm">Viral Reels</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
