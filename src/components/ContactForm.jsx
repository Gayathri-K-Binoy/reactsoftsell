import React, { useState } from 'react';
import { motion } from 'framer-motion';

const licenseTypes = [
  "Enterprise Software",
  "Creative Suite",
  "CAD/CAM Software",
  "Database Software",
  "Development Tools",
  "Other"
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      errs.email = "Invalid email format";
    if (!formData.company) errs.company = "Company is required";
    if (!formData.licenseType) errs.licenseType = "License type is required";
    if (!formData.message) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors({ ...errors, [id]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-6 md:px-12 bg-gradient-to-br from-blue-100 via-white to-indigo-100 dark:from-gray-900 dark:to-blue-950"
    >
      <motion.div 
        className="container mx-auto grid md:grid-cols-2 gap-12 items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Convert Your Licenses to Cash?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Fill out the form and one of our license specialists will get back to you within one business day
            with a preliminary valuation.
          </p>

          <div className="space-y-6">
            {/* Contact Option: Email */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-md dark:bg-blue-900 flex items-center justify-center mr-4">
                <i className="fas fa-envelope text-blue-600 dark:text-blue-400"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Email Us</h4>
                <p className="text-gray-700 dark:text-gray-300">info@softsell.example.com</p>
              </div>
            </motion.div>

            {/* Contact Option: Phone */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-md dark:bg-blue-900 flex items-center justify-center mr-4">
                <i className="fas fa-phone text-blue-600 dark:text-blue-400"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Call Us</h4>
                <p className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</p>
              </div>
            </motion.div>

            {/* Contact Option: Location */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-md dark:bg-blue-900 flex items-center justify-center mr-4">
                <i className="fas fa-map-marker-alt text-blue-600 dark:text-blue-400"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">123 Tech Park, San Francisco, CA 94107</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div 
          className="bg-white/90 dark:bg-gray-800 backdrop-blur-sm p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get a Free Valuation</h3>
          
          {submitted && (
            <motion.div
              className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              Thank you for your request! We will get back to you within one business day.
            </motion.div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-800 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-800 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  placeholder="john@company.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block mb-2 text-gray-800 dark:text-gray-300">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                placeholder="Acme Inc."
              />
              {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
            </div>

            <div>
              <label htmlFor="licenseType" className="block mb-2 text-gray-800 dark:text-gray-300">
                License Type
              </label>
              <select
                id="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select License Type</option>
                {licenseTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.licenseType && <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-800 dark:text-gray-300">
                Additional Details
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                placeholder="Please provide any additional details about your software licenses..."
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Request
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
