import React from 'react';
import { Smartphone, Apple, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-white pt-24 pb-12">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl text-primary/5 font-display text-9xl flex items-center justify-center select-none">
                    INU
                </div>
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">

                {/* Main Text */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block bg-primary/20 text-secondary px-6 py-2 rounded-full font-bold text-sm mb-6 tracking-wide uppercase"
                >
                    Exclusivo para mascotas
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl text-secondary font-display mb-4 tracking-tight leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    ¡LLEGA <span className="text-primary">INU TRIPS!</span>
                </motion.h1>

                <motion.p
                    className="text-xl text-gray-600 font-light font-body mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Donde la empatía y el cuidado se encuentran en cada viaje.
                </motion.p>

                {/* Hero Banner Image */}
                <motion.div
                    className="w-full max-w-5xl mb-12 relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <img
                        src="/hero-banner.jpg"
                        alt="Banner InuTrips"
                        className="w-full h-auto rounded-3xl shadow-xl border-4 border-white"
                    />
                </motion.div>

                {/* App Links Section */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 w-full max-w-4xl">
                    {/* Passenger Links */}
                    <motion.div
                        className="flex flex-col items-center p-6 bg-gray-50 rounded-3xl border border-gray-100"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h3 className="text-secondary font-display text-2xl mb-4">Para Pasajeros</h3>
                        <p className="text-gray-500 mb-6 text-sm">Viaja seguro con tu mascota</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <button className="bg-black text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg">
                                <Apple size={24} className="fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold tracking-wider opacity-70">Consíguelo en el</div>
                                    <div className="font-bold text-sm leading-none font-display">App Store</div>
                                </div>
                            </button>
                            <button className="bg-black text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg">
                                <Smartphone size={24} className="fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold tracking-wider opacity-70">Disponible en</div>
                                    <div className="font-bold text-sm leading-none font-display">Play Store</div>
                                </div>
                            </button>
                        </div>
                    </motion.div>

                    {/* Driver Links */}
                    <motion.div
                        className="flex flex-col items-center p-6 bg-primary/10 rounded-3xl border border-primary/20"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h3 className="text-secondary font-display text-2xl mb-4">Para Conductores</h3>
                        <p className="text-gray-600 mb-6 text-sm">Genera ingresos extra hoy</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <button className="bg-secondary text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-opacity-90 transition-colors shadow-lg">
                                <Apple size={24} className="fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold tracking-wider opacity-70">Consíguelo en el</div>
                                    <div className="font-bold text-sm leading-none font-display">App Store</div>
                                </div>
                            </button>
                            <button className="bg-secondary text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-opacity-90 transition-colors shadow-lg">
                                <Smartphone size={24} className="fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold tracking-wider opacity-70">Disponible en</div>
                                    <div className="font-bold text-sm leading-none font-display">Play Store</div>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
