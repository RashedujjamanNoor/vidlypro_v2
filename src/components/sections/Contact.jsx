import { motion } from "framer-motion";

import Container from "../common/Container";
import MagneticButton from "../common/MagneticButton";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-lime-400/10 blur-[200px]" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lime-400 uppercase tracking-[0.3em] text-sm"
            >
              Let’s Work
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mt-4 leading-tight"
            >
              Ready To Grow Your{" "}
              <span className="text-lime-400">Fitness Brand?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg mt-6 max-w-xl leading-relaxed"
            >
              We help fitness creators scale their audience with cinematic
              short-form content built for engagement and conversions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <MagneticButton>
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-lime-400 text-black px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
                >
                  Book Strategy Call
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="mailto:hello@fitcut.com"
                  className="border border-white/10 bg-white/5 px-7 py-4 rounded-full font-semibold hover:bg-white/10 transition"
                >
                  Send Email
                </a>
              </MagneticButton>
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              className="flex gap-10 mt-14"
            >
              <div>
                <h3 className="text-3xl font-black text-lime-400">24H</h3>

                <p className="text-gray-400 mt-2">Response Time</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-lime-400">100%</h3>

                <p className="text-gray-400 mt-2">Custom Edits</p>
              </div>
            </motion.div>
          </div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10"
          >
            <h3 className="text-3xl font-black mb-8">Start Your Project</h3>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="text-sm text-gray-400 block mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Carter"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-lime-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-400 block mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-lime-400 transition"
                />
              </div>

              {/* Platform */}
              <div>
                <label className="text-sm text-gray-400 block mb-2">
                  Main Platform
                </label>

                <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-lime-400 transition">
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>YouTube Shorts</option>
                  <option>Multi Platform</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-400 block mb-2">
                  Tell Us About Your Brand
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your content goals..."
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-lime-400 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-lime-400 text-black py-4 rounded-2xl font-bold hover:scale-[1.02] transition"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
