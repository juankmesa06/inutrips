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
        { name: 'Pasajero', href: '#services' }, // Replaced Servicos/added Pasajero as requested, pointing to services/features
        { name: 'Conductor', href: '#drivers' },
        { name: 'Servicios', href: '#services' }, // Keeping services as it's useful? User said "agregar un item que se llama pasajero". I'll keep both or check context. User said "agregar" (add), not replace.
    ];
    // User asked to REMOVE "Descargar" (link) and update "Descargar App" (button).

    // Resetting navLinks based on exact request: "quitar descargar... agregar un item que se llama pasajero"
    const finalNavLinks = [
        { name: 'Pasajero', href: '#passengers' }, // Pointing to the passengers section
        { name: 'Conductor', href: '#drivers' },

    ];

    return (
        <nav
            className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm py-3 md:py-4"
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 md:gap-3 z-50 group">
                    <img src="/logo.png" alt="InuTrips" className="h-8 sm:h-10 md:h-12 w-auto group-hover:scale-105 transition-transform duration-300" />
                    <span className="font-display text-lg sm:text-xl md:text-2xl tracking-wide font-bold whitespace-nowrap">
                        <span className="text-primary">INU</span> <span className="text-secondary">Trips</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {finalNavLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-semibold text-secondary hover:text-primary transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#download" className="bg-primary hover:bg-yellow-400 text-secondary font-bold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105 shadow-md">
                        Descarga la App
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 text-secondary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className="text-secondary" />}
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
                            {finalNavLinks.map((link) => (
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
