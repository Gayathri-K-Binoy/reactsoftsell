import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Tag, Zap, Headset } from "lucide-react";

const bgColors = {
  purple: {
    light: "bg-purple-100",
    dark: "dark:bg-purple-900"
  },
  blue: {
    light: "bg-blue-100",
    dark: "dark:bg-blue-900"
  },
  green: {
    light: "bg-green-100",
    dark: "dark:bg-green-900"
  },
  orange: {
    light: "bg-orange-100",
    dark: "dark:bg-orange-900"
  }
};

const iconColors = {
  purple: {
    light: "text-purple-600",
    dark: "dark:text-purple-300"
  },
  blue: {
    light: "text-blue-600",
    dark: "dark:text-blue-300"
  },
  green: {
    light: "text-green-600",
    dark: "dark:text-green-300"
  },
  orange: {
    light: "text-orange-600",
    dark: "dark:text-orange-300"
  }
};

const reasons = [
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    desc: "Our platform uses bank-level encryption and secure escrow services to protect all parties.",
    color: "purple"
  },
  {
    icon: Tag,
    title: "Best Market Rates",
    desc: "Our vast network of buyers ensures you receive the highest possible value for your licenses.",
    color: "blue"
  },
  {
    icon: Zap,
    title: "Fast Processing",
    desc: "Our streamlined process means you get valuations quickly and payments promptly.",
    color: "green"
  },
  {
    icon: Headset,
    title: "Expert Support",
    desc: "Our team of license specialists is available to assist you throughout the entire process.",
    color: "orange"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="w-full py-16 px-4 sm:px-6 md:px-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            We're revolutionizing the software resale market with our customer-first approach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const { color, icon: Icon } = reason;
            return (
              <motion.div
                key={idx}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.03 }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${bgColors[color].light} ${bgColors[color].dark}`}>
                  <Icon className={`w-6 h-6 ${iconColors[color].light} ${iconColors[color].dark}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">{reason.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
