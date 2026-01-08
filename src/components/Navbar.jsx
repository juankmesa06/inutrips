import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Servicios', href: '#services' },
        { name: 'Seguridad', href: '#safety' },
        { name: 'Conductores', href: '#drivers' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 z-50">
                    <img src="/logo.png" alt="InuTrips" className="h-12 w-auto" />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-semibold transition-colors duration-300 hover:text-primary ${isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md' // Enhanced contrast for transparent header
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-primary hover:bg-yellow-400 text-secondary font-extrabold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg">
                        Descarga la App
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 text-secondary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-secondary' : 'text-white'} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-bold text-secondary font-display"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                className="bg-primary text-secondary font-extrabold py-3 px-8 rounded-full text-lg shadow-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Descarga la App
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
