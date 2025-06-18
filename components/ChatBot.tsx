'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaSpinner } from 'react-icons/fa';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface Service {
  name: string;
  description: string;
  keywords: string[];
}

const services: Service[] = [
  {
    name: "Web Development",
    description: "We create modern, responsive websites using cutting-edge technologies like React, Next.js, and Tailwind CSS. Our web solutions are optimized for performance, SEO, and user experience.",
    keywords: ["website", "web", "development", "react", "next", "tailwind", "frontend"]
  },
  {
    name: "Mobile App Development",
    description: "We develop cross-platform mobile applications using React Native, ensuring a seamless experience across iOS and Android devices.",
    keywords: ["mobile", "app", "ios", "android", "react native", "application"]
  },
  {
    name: "UI/UX Design",
    description: "Our design team creates beautiful, intuitive interfaces that enhance user engagement and satisfaction. We focus on modern design principles and user-centered approaches.",
    keywords: ["design", "ui", "ux", "interface", "user experience", "figma"]
  },
  {
    name: "Cloud Solutions",
    description: "We provide cloud infrastructure setup, migration, and management services using AWS, Azure, and Google Cloud Platform.",
    keywords: ["cloud", "aws", "azure", "gcp", "infrastructure", "server"]
  },
  {
    name: "Digital Transformation",
    description: "We help businesses modernize their operations through digital solutions, automation, and process optimization.",
    keywords: ["digital", "transformation", "automation", "modernization", "process"]
  }
];

const greetings = [
  "Hello! I'm your MangroveIT assistant. How can I help you today?",
  "Hi there! I'm here to tell you about MangroveIT's services. What would you like to know?",
  "Welcome! I can help you learn about our technology solutions. What interests you?"
];

const fallbackResponses = [
  "I'm not sure I understand. Could you rephrase that?",
  "I'm still learning about that topic. Could you ask about our services instead?",
  "Let me help you with information about our services. What would you like to know?"
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle scroll position when chat is opened/closed
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const findServiceResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Check for greetings
    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Check for service-related queries
    const matchedService = services.find(service => 
      service.keywords.some(keyword => lowerMessage.includes(keyword))
    );

    if (matchedService) {
      return `${matchedService.name}: ${matchedService.description}`;
    }

    // Check for general service queries
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      const serviceList = services.map(s => s.name).join(', ');
      return `We offer the following services: ${serviceList}. Which one would you like to know more about?`;
    }

    // Check for pricing
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      return "Our pricing varies based on project requirements. For a detailed quote, please contact us through our contact form or email us at info@mangroveit.com";
    }

    // Check for contact information
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return "You can reach us at:\n- Email: info@mangroveit.com\n- Phone: +1 (555) 123-4567\n- Or fill out our contact form on the website";
    }

    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Get bot response based on user message
    setTimeout(() => {
      const botResponse = findServiceResponse(inputValue);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-[100] p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <FaTimes className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <FaRobot className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Chat Window */}
            <motion.div
              ref={chatWindowRef}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed bottom-24 right-8 w-96 h-[500px] bg-background/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden z-[100] border border-background-darker/20"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white flex items-center justify-between rounded-t-2xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <FaRobot className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-lg">MangroveIT Assistant</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="h-[calc(100%-120px)] overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-4 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-primary to-secondary text-white'
                          : 'bg-background-darker/50 text-text backdrop-blur-sm'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <span className="text-xs opacity-50 mt-2 block">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="bg-background-darker/50 rounded-2xl p-4 backdrop-blur-sm">
                      <FaSpinner className="w-4 h-4 animate-spin text-accent" />
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-background-darker/20">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 bg-background-darker/50 text-text rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 placeholder:text-text/50"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-gradient-to-r from-primary to-secondary text-white p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg"
                  >
                    <FaPaperPlane className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 