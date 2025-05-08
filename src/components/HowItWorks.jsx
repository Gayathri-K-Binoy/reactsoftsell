import React from "react";
import { motion } from "framer-motion";
import { Upload, Tag, Banknote, ArrowRight, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload License",
      desc: "Submit your license details through our secure portal. We support all major software vendors.",
    },
    {
      icon: Tag,
      title: "Get Valuation",
      desc: "Receive a competitive market valuation within 24 hours, based on current demand and license terms.",
    },
    {
      icon: Banknote,
      title: "Get Paid",
      desc: "Accept our offer and receive payment within 3 business days via your preferred payment method.",
    },
  ];

  const iconStyles = [
    { bg: "bg-blue-100 dark:bg-blue-900", icon: "text-blue-500", step: "text-blue-500 dark:text-blue-400" },
    { bg: "bg-indigo-100 dark:bg-indigo-900", icon: "text-indigo-500", step: "text-indigo-500 dark:text-indigo-400" },
    { bg: "bg-emerald-100 dark:bg-emerald-900", icon: "text-emerald-500", step: "text-emerald-500 dark:text-emerald-400" },
  ];

  return (
    <section id="how-it-works" className="w-full py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our streamlined process makes selling your unused software licenses easy and profitable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const { bg, icon, step: stepText } = iconStyles[idx];

            return (
              <motion.div
                key={idx}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${bg} opacity-20 rounded-full -m-10 transition-transform duration-500 group-hover:scale-125`}></div>
                <div className="relative">
                  <div className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${icon}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
                  <div className={`mt-6 flex items-center font-medium ${stepText}`}>
                    <span>Step {idx + 1}</span>
                    {idx === 2 ? (
                      <CheckCircle className="ml-1 w-5 h-5" />
                    ) : (
                      <ArrowRight className="ml-1 w-5 h-5" />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
