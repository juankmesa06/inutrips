import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-12 border-t-8 border-primary">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                    {/* Brand Info */}
                    <div className="text-center md:text-left">
                        <div className="font-display text-3xl mb-4 tracking-wider">
                            <span className="text-primary">INU</span>TRIPS
                        </div>
                        <p className="text-white/70 max-w-xs font-light mb-4">
                            Conectando corazones aventureros con los destinos más asombrosos del planeta.
                        </p>
                        <div className="text-white/50 text-xs uppercase tracking-wide">
                            Medellín, Antioquia, Colombia 🇨🇴
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex gap-12 text-sm font-semibold">
                        <div className="flex flex-col gap-3">
                            <a href="#drivers" className="hover:text-primary transition-colors">Conductores</a>
                            <a href="#safety" className="hover:text-primary transition-colors">Seguridad</a>
                            <a href="#services" className="hover:text-primary transition-colors">Servicios</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a href="mailto:soporte@inutrips.com" className="hover:text-primary transition-colors">Ayuda</a>
                            <a href="/terminos.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Términos</a>
                            <a href="/privacidad.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacidad</a>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex gap-4">
                        <a href="https://allmylinks.com/inutrips" target="_blank" rel="noopener noreferrer" className="bg-white/10 px-4 py-2 rounded-full hover:bg-primary hover:text-secondary transition-all duration-300 flex items-center gap-2">
                            <span className="font-bold">Síguenos en Redes</span>
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50 font-light">
                    © {new Date().getFullYear()} Arime Software S.A. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
