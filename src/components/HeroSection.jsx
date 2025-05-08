import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
          >
            Unlock the Value in Your Unused Software
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          >
            Transform your dormant licenses into cash. SoftSell makes selling unused software licenses simple,
            secure, and profitable.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
          >
            <motion.button 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Sell My Licenses
            </motion.button>
            <motion.button 
              className="px-8 py-3 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get a Quote
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative hidden md:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
        >
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500 opacity-20 rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500 opacity-20 rounded-full"></div>
          <motion.img
            src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Software licenses illustration"
            className="w-full h-auto max-w-md mx-auto rounded-2xl shadow-2xl"
            whileHover={{ rotate: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;