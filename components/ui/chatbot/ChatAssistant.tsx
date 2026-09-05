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

// Public Cloudflare AI RAG chat endpoint (the frontend only ever calls this - no secrets here)
const CHAT_API_URL = "https://jkc-ai-chatbot.jkcsolutions1.workers.dev/chat";

// Friendly fallback used when the API fails or returns an unusable response
const API_FALLBACK_MESSAGE =
    "I'm sorry, I couldn't process your request right now. Please try again or contact our team.";

// Messages that clearly indicate the user wants human follow-up, so contact
// details should be collected instead of calling the AI API
const CONTACT_INTENT_PATTERN =
    /(quote|callback|call me|contact me|email me|speak to|speak with|talk to|get in touch|reach out|live agent|human agent|real person|consultation|appointment|book a|schedule a|demo)/i;

interface ChatApiResponse {
    success?: boolean;
    answer?: string;
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

    // Generates the bot reply: the contact-collection workflow is handled locally,
    // while all general/knowledge questions are answered by the Cloudflare AI RAG API.
    const generateBotResponse = async (text: string): Promise<string> => {
        const hasContact = containsContactInfo(text);

        // 1) The bot already asked for contact details - collect them here (no API call)
        if (awaitingContact) {
            if (hasContact) {
                setAwaitingContact(false);
                setContactProvided(true);
                return "Thank you for your message. Our team will assist you soon.";
            }
            return "Please provide a valid Email or Contact Number so our team can reach you.";
        }

        // 2) The user shared their contact details together with the message
        if (hasContact) {
            setContactProvided(true);
            return "Thank you for your message. Our team will assist you soon.";
        }

        // 3) The user explicitly wants human follow-up (quote, callback, etc.)
        if (!contactProvided && CONTACT_INTENT_PATTERN.test(text)) {
            setAwaitingContact(true);
            return "Please provide your Email or Contact Number so our team can assist you.";
        }

        // 4) Normal question -> real Cloudflare AI RAG API
        try {
            const response = await fetch(CHAT_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: text }),
            });

            if (!response.ok) {
                return API_FALLBACK_MESSAGE;
            }

            const data = (await response.json()) as ChatApiResponse | null;

            // Display the RAG answer exactly as returned by the backend
            if (data?.success && typeof data.answer === "string" && data.answer.trim().length > 0) {
                return data.answer;
            }

            return API_FALLBACK_MESSAGE;
        } catch (error) {
            console.error("Chatbot API error:", error);
            return API_FALLBACK_MESSAGE;
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async () => {
        // Ignore empty input and prevent duplicate requests while a reply is pending
        if (!inputValue.trim() || isTyping) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue.trim(),
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Get the bot reply (contact workflow handled locally, questions via the Cloudflare AI RAG API)
        const botResponse = await generateBotResponse(userMessage.text);

        const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: botResponse,
            sender: "bot",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
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