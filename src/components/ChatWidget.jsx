import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';
const exampleQuestions = [
  "How do I sell my license?",
  "How long does payment take?",
  "Is my data secure?",
];

const answers = {
  "How do I sell my license?": "Just upload your license details and we'll send you a valuation within 24 hours!",
  "How long does payment take?": "Once you accept our offer, payment is processed instantly.",
  "Is my data secure?": "Absolutely! We use industry-leading security to protect your data.",
  "default": "Thank you for your message! One of our specialists will review your question and get back to you soon."
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you with selling your software licenses today?' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (msg) => {
    const question = msg || newMessage;
    if (!question.trim()) return;

    // Add user message
    const updatedMessages = [...messages, { sender: 'user', text: question }];
    setMessages(updatedMessages);
    setNewMessage('');

    // Simulate bot response
    setTimeout(() => {
      setMessages([
        ...updatedMessages,
        {
          sender: 'bot',
          text: answers[question] || answers.default
        }
      ]);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Chat Toggle Button */}
        <motion.button
          onClick={toggleChat}
          className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment'} text-2xl`}></i>
        </motion.button>

        {/* Chat Box */}
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4">
              <h3 className="font-bold text-lg">SoftSell Assistant</h3>
              <p className="text-sm opacity-80">Ask me anything about our services</p>
            </div>

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 border-b dark:border-gray-700">
              {messages.map((message, index) => (
                <motion.div 
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.05,
                    duration: 0.3,
                    type: "spring",
                  }}
                >
                  <div 
                    className={`rounded-lg p-3 max-w-[80%] ${
                      message.sender === 'user'
                        ? 'bg-blue-100 dark:bg-blue-900'
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}
                  >
                    <p className="text-gray-800 dark:text-gray-200">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4">
              <div className="flex gap-2 mb-2 flex-wrap">
                {exampleQuestions.map((q) => (
                  <button
                    key={q}
                    className="bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100 rounded px-2 py-1 text-xs"
                    onClick={() => handleSend(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                />
                <button 
                  type="submit"
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
              <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                Try asking: "What types of licenses do you buy?" or "How is pricing determined?"
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ChatWidget;