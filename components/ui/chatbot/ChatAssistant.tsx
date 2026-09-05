"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, User, MessageCircle, MoreHorizontal } from "lucide-react";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

export function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hello! How can I help you today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [awaitingContact, setAwaitingContact] = useState(false);
    const [contactProvided, setContactProvided] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Detects whether a message contains an email address or a phone number
    const containsContactInfo = (text: string) => {
        if (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(text)) return true;
        return text.replace(/\D/g, "").length >= 8;
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue.trim(),
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI thinking
        setTimeout(() => {
            const lowInput = userMessage.text.toLowerCase();
            const hasContact = containsContactInfo(userMessage.text);
            let botResponse = "";

            if (awaitingContact) {
                // The bot already asked for contact details in the previous turn
                if (hasContact) {
                    botResponse = "Thank you for your message. Our team will assist you soon.";
                    setAwaitingContact(false);
                    setContactProvided(true);
                } else {
                    botResponse = "Please provide a valid Email or Contact Number so our team can reach you.";
                }
            } else if (hasContact) {
                // The user shared their contact details together with the message
                botResponse = "Thank you for your message. Our team will assist you soon.";
                setContactProvided(true);
            } else {
                let info = "";
                if (lowInput.includes("service")) {
                    info = "We offer a wide range of services including Managed IT Support, Cloud Infrastructure, Security, and AI Automation solutions (Generative & Agentic AI).";
                } else if (lowInput.includes("contact") || lowInput.includes("call") || lowInput.includes("email")) {
                    info = "You can reach us at contact@jkcomputers.com or call us at +1 (555) 123-4567. We are also available at 123 Innovation Drive, Tech City.";
                }

                if (contactProvided) {
                    // Contact details were already collected earlier in the conversation
                    botResponse = info || "Thank you for your message. Our team will assist you soon.";
                } else {
                    // Ask for contact details before closing the loop
                    botResponse = `${info ? `${info}\n\n` : ""}Please provide your Email or Contact Number so our team can assist you.`;
                    setAwaitingContact(true);
                }
            }

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: "bot",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-background rounded-3xl shadow-2xl border border-foreground/10 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-foreground/10 bg-indigo-600 dark:bg-indigo-900/50 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">AI Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-foreground/10">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${msg.sender === "user"
                                            ? "bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-600/10"
                                            : "bg-foreground/5 text-foreground rounded-tl-none border border-foreground/10"
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-foreground/5 text-foreground p-3 rounded-2xl rounded-tl-none border border-foreground/10 italic text-xs flex items-center gap-2">
                                        <Bot className="w-3 h-3 text-indigo-500" />
                                        AI is thinking<MoreHorizontal className="w-4 h-4 animate-pulse" />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-foreground/10 bg-background">
                            <div className="relative flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                    placeholder={awaitingContact ? "Enter your Email or Contact Number..." : "Type a message..."}
                                    className="flex-1 bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500/50 transition-all pr-12"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="absolute right-1.5 w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 disabled:opacity-50 disabled:bg-foreground/10 active:scale-95 transition-all"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-11 h-11 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${isOpen
                        ? "bg-foreground text-background"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
            >
                {isOpen ? <X className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                {!isOpen && (
                    <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 border-2 border-background rounded-full animate-bounce" />
                )}
            </motion.button>
        </div>
    );
}