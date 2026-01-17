'use client';

import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Twitter,
    Instagram,
    Facebook,
    Youtube,
    Twitch,
    Globe,
    FileText,
    Dribbble,
    Plus
} from 'lucide-react';

const iconMap: Record<string, any> = {
    Github,
    Linkedin,
    Mail,
    Twitter,
    Instagram,
    Facebook,
    Youtube,
    Twitch,
    Globe,
    FileText,
    Dribbble
};

export default function SocialPopup() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="flex flex-col gap-3 p-3 bg-white/10 dark:bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl origin-bottom-right"
                    >
                        {portfolioData.socials.map((link) => {
                            const Icon = iconMap[link.icon] || Globe;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors flex items-center gap-3"
                                    title={link.label}
                                >
                                    <Icon size={20} />
                                    <span className="text-sm font-medium">{link.label}</span>
                                </a>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-4 rounded-full shadow-lg transition-all duration-300 ${isOpen ? 'bg-white text-black rotate-45' : 'bg-white text-black hover:scale-110'
                    }`}
                aria-label="Toggle social menu"
            >
                <Plus size={24} />
            </button>
        </div>
    );
}
