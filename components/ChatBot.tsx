"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from "react-icons/fa";
import {
  getChatbotReply,
  quickActions,
  welcomeMessage,
  type ChatLink,
} from "@/lib/data/chatbot";
import { siteConfig } from "@/lib/data/site";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  links?: ChatLink[];
  suggestions?: string[];
}

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: welcomeMessage,
      sender: "bot",
      suggestions: quickActions,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const sendBotReply = useCallback((userText: string) => {
    setIsTyping(true);
    const delay = 400 + Math.min(userText.length * 12, 800);

    setTimeout(() => {
      const reply = getChatbotReply(userText);
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          text: reply.text,
          sender: "bot",
          links: reply.links,
          suggestions: reply.suggestions,
        },
      ]);
      setIsTyping(false);
    }, delay);
  }, []);

  const handleSend = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping) return;

      setMessages((prev) => [
        ...prev,
        { id: createId(), text: trimmed, sender: "user" },
      ]);
      setInputValue("");
      sendBotReply(trimmed);
    },
    [isTyping, sendBotReply]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(inputValue);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg shadow-cyan-500/20 flex items-center justify-center bg-gradient-to-br from-cyan-600 to-cyan-400 border border-cyan-400/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <FaTimes className="text-white text-xl md:text-2xl" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
              <FaComments className="text-white text-xl md:text-2xl" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 md:bottom-24 md:right-8 z-40 w-[calc(100vw-2rem)] max-w-sm md:max-w-md h-[min(70vh,560px)] bg-[#0a1220] rounded-sm shadow-2xl shadow-black/50 flex flex-col border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-white/10 bg-[#050a14] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                  <FaRobot className="text-cyan-400 text-sm" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{siteConfig.name} Assistant</h3>
                  <p className="text-cyan-400/80 text-[10px] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#050a14]/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col gap-2 ${
                    message.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] px-3.5 py-2.5 rounded-sm text-sm leading-relaxed whitespace-pre-line ${
                      message.sender === "user"
                        ? "bg-cyan-600/90 text-white"
                        : "bg-[#0f1a2e] text-slate-200 border border-white/10"
                    }`}
                  >
                    {message.text}
                  </div>

                  {message.sender === "bot" && message.links && message.links.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 max-w-[88%]">
                      {message.links.map((link) => (
                        <Link
                          key={link.href + link.label}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="px-2.5 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/30 rounded-sm bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
                        >
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  )}

                  {message.sender === "bot" && message.suggestions && (
                    <div className="flex flex-wrap gap-1.5 max-w-[95%]">
                      {message.suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => handleSend(suggestion)}
                          disabled={isTyping}
                          className="px-2.5 py-1 text-xs text-slate-300 border border-white/10 rounded-sm bg-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors disabled:opacity-50"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-[#0f1a2e] border border-white/10 px-4 py-3 rounded-sm">
                    <div className="flex gap-1">
                      {[0, 0.15, 0.3].map((delay) => (
                        <span
                          key={delay}
                          className="w-1.5 h-1.5 bg-cyan-400/70 rounded-full animate-bounce"
                          style={{ animationDelay: `${delay}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-[#0a1220] shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about services, quotes, contact..."
                  disabled={isTyping}
                  className="flex-1 px-3 py-2.5 bg-[#050a14] border border-white/10 rounded-sm text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 disabled:opacity-60"
                />
                <button
                  onClick={() => handleSend(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2.5 rounded-sm bg-cyan-500 text-[#050a14] hover:bg-cyan-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <FaPaperPlane className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 text-center">
                Powered by {siteConfig.name} · For urgent enquiries call {siteConfig.contact.phone}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
