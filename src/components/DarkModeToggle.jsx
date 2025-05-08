import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const rotate = useMotionValue(0);
  const rounded = useTransform(
    rotate,
    (val) => `borderRadius(${val}px)`
  );

  const handleToggle = () => {
    setDark((d) => !d);
    rotate.set(0); // Reset rotation
    motion.animate(rotate, dark ? 360 : 0, { // Animate rotation
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    });
  };

  return (
    <motion.button
      className="ml-4 p-2 rounded-full bg-white shadow-md dark:bg-indigo-700 text-blue-600 dark:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-indigo-300"
      onClick={handleToggle}
      aria-label="Toggle dark mode"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.8)" }}
      whileTap={{ scale: 0.9 }} //Slightly smaller tap scale
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
      style={{
        rotate,
        borderRadius: rounded,
      }}
    >
      {dark ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5 text-blue-500" />
      )}
    </motion.button>
  );
};

export default DarkModeToggle;
