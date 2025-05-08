import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "David Chen",
    role: "CTO",
    company: "TechFront Solutions",
    review:
      "SoftSell helped us recover over $75,000 from unused enterprise licenses after our company downsized. Their valuation was fair and the payment process was seamless. I couldn't believe how easy they made it!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Financial Controller",
    company: "ArchDesign Group",
    review:
      "As a financial controller, I was skeptical about the software resale market. SoftSell exceeded our expectations with their transparency and efficiency. They helped us recover significant value from our legacy CAD licenses.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it – hear from businesses that have successfully converted their unused
            licenses into cash.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -top-5 -left-5">
                <span className="text-6xl text-blue-400 dark:text-blue-300">"</span> {/* Lighter quote color */}
              </div>
              <div className="relative">
                <p className="text-lg mb-6 italic text-gray-700 dark:text-gray-200"> {/* Slightly lighter text */}
                  {t.review}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4 overflow-hidden"> {/* Lighter background */}
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                    <p className="text-gray-500 dark:text-gray-400">{t.role}, {t.company}</p> {/* Lighter role/company text */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
