import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-black z-[999] flex items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-lime-400"
          >
            VIDLYPRO
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
