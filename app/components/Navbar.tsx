"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#experience", label: "Experiencia" },
        { href: "#projects", label: "Proyectos" },
        { href: "/projects", label: "Todos los Proyectos", isNextLink: true },
        { href: "#contact", label: "Contacto" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled || isOpen ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                {/* Logo */}
                <div className="font-bold text-xl tracking-tight text-white">RM.</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
                    {navLinks.map((link) => (
                        link.isNextLink ? (
                            <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                                {link.label}
                            </Link>
                        ) : (
                            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                                {link.label}
                            </a>
                        )
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6 text-center">
                            {navLinks.map((link) => (
                                link.isNextLink ? (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium text-zinc-300 hover:text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium text-zinc-300 hover:text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                )
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
