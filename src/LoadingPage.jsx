import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      {/* Glowing Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="relative w-24 h-24 flex items-center justify-center"
      >
        {/* Outer Ring */}
        <div className="absolute w-full h-full border-8 border-transparent border-t-blue-500 rounded-full animate-spin"></div>

        {/* Middle Ring (Slower) */}
        <div className="absolute w-16 h-16 border-8 border-transparent border-t-purple-500 rounded-full animate-spin-slow"></div>

        {/* Inner Ring (Reverse Spin) */}
        <div className="absolute w-8 h-8 border-4 border-transparent border-t-pink-500 rounded-full animate-spin-reverse"></div>
      </motion.div>

      {/* Glowing Loading Text */}
      <motion.p
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
        className="mt-6 text-lg font-semibold text-blue-400 tracking-widest uppercase"
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default LoadingPage;
