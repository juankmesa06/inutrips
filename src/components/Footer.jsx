import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1a1510] text-white py-12 border-t-8 border-primary">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                    {/* Brand Info */}
                    <div className="space-y-4 md:col-span-1">
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="InuTrips Logo" className="h-16 w-auto" />
                            <h3 className="text-3xl font-display font-bold text-white">InuTrips</h3>
                        </div>
                        <p className="text-white/80 text-base leading-relaxed">
                            Conectando corazones peludos con sus destinos favoritos. Viajes seguros y felices para todos.
                        </p>
                        <div className="text-white/50 text-sm uppercase tracking-wide">
                            Medellín, Antioquia, Colombia 🇨🇴
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex gap-12 text-base font-semibold">
                        <div className="flex flex-col gap-4">
                            <a href="#drivers" className="hover:text-primary transition-colors">Conductores</a>
                            <a href="#passengers" className="hover:text-primary transition-colors">Pasajeros</a>
                            <a href="#register" className="hover:text-primary transition-colors">Registro / Beneficios</a>
                            <a href="#download" className="hover:text-primary transition-colors">Descargar App</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="/terminos_condiciones.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Términos y Condiciones</a>
                        </div>
                    </div>

                    {/* Social */}
                    {/* Social Media Grid */}
                    <div className="md:col-span-1">
                        <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">Síguenos en Redes</h4>
                        <div className="grid grid-cols-3 gap-4">
                            {/* WhatsApp */}
                            <a href="https://wa.me/573161034386" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center group" title="Chatea con nosotros">
                                <MessageCircle size={24} />
                            </a>
                            {/* Instagram */}
                            <a href="https://instagram.com/inutrips" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-[#E1306C] hover:text-white transition-all duration-300 flex items-center justify-center group" title="Instagram">
                                <Instagram size={24} />
                            </a>
                            {/* Facebook */}
                            <a href="https://facebook.com/inutrips" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-[#1877F2] hover:text-white transition-all duration-300 flex items-center justify-center group" title="Facebook">
                                <Facebook size={24} />
                            </a>
                            {/* TikTok (SVG) */}
                            <a href="https://tiktok.com/@inu.trips" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center group" title="TikTok">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                            {/* X (Twitter) (SVG) */}
                            <a href="https://twitter.com/inu_trips" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center group" title="X">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="https://youtube.com/@inutrips" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-[#FF0000] hover:text-white transition-all duration-300 flex items-center justify-center group" title="YouTube">
                                <Youtube size={24} />
                            </a>
                            {/* LinkedIn */}
                            <a href="https://linkedin.com/company/inutrips" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-[#0077B5] hover:text-white transition-all duration-300 flex items-center justify-center group" title="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                            {/* Email */}
                            <a href="mailto:soporte@inutrips.com" className="bg-white/10 p-3 rounded-xl hover:bg-primary hover:text-secondary transition-all duration-300 flex items-center justify-center group" title="Soporte">
                                <Mail size={24} />
                            </a>
                            {/* Web */}
                            <a href="https://inutrips.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-primary hover:text-secondary transition-all duration-300 flex items-center justify-center group" title="Sitio Web">
                                <Globe size={24} />
                            </a>
                        </div>
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
