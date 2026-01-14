import React from 'react';
import { Play } from 'lucide-react';
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-12"
                >
                    <a
                        href="#register"
                        className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-opacity-90 transition-all hover:scale-105 inline-flex items-center gap-3"
                    >
                        🎁 Reclamar mis beneficios
                    </a>
                </motion.div>

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

                {/* App Links Section - Cards with Official Logos */}
                <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto items-stretch">
                    {/* Passenger Links (White Card) */}
                    <motion.div
                        className="flex flex-col items-center p-8 bg-white rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h3 className="text-secondary font-display text-3xl mb-4">Para Pasajeros</h3>

                        <div className="text-center mb-8 px-2 space-y-2">
                            <p className="text-secondary font-bold text-lg leading-tight">
                                ¿Quieres viajar con tu mascota?
                            </p>
                            <p className="text-gray-500 font-medium">
                                Descarga aquí la App de InuTrips Pasajeros
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://apps.apple.com/co/app/inutrips/id6450268527" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-lg w-40 justify-center">
                                {/* Apple Logo SVG */}
                                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[9px] uppercase font-bold tracking-wider opacity-80">Consíguelo en el</div>
                                    <div className="font-bold text-sm leading-none font-display">App Store</div>
                                </div>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.inutrips.passenger" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-lg w-40 justify-center">
                                {/* Google Play Icon SVG */}
                                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.184-.131-.334-.316-.408-.558L3 2.18c.046-.145.247-.366.609-.366zM15.207 13.414l5.658 5.659c.28.278.435.658.435 1.054 0 .394-.154.775-.436 1.053l-5.657-5.658zM4.322 23.368l11.41-11.41 1.487 1.488L5.353 23.58c-.378.214-.816.143-1.03-.143l-.001-.069zM17.219 4.145l-1.487 1.487-11.41-11.41 11.866 10.134a1.493 1.493 0 0 1 1.031-.211z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[9px] uppercase font-bold tracking-wider opacity-80">Disponible en</div>
                                    <div className="font-bold text-sm leading-none font-display">Play Store</div>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Driver Links (Cream Card) */}
                    <motion.div
                        className="flex flex-col items-center p-8 bg-[#FFF9E5] rounded-[2rem] shadow-xl border border-yellow-100 hover:shadow-2xl transition-all duration-300 group" // Cream background
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h3 className="text-secondary font-display text-3xl mb-4">Para Conductores</h3>

                        <div className="text-center mb-8 px-2 space-y-2">
                            <p className="text-secondary font-bold text-lg leading-tight">
                                ¿Quieres generar ingresos extra?
                            </p>
                            <p className="text-secondary/70 font-medium">
                                Descarga aquí la App de InuTrips Conductores
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://apps.apple.com/co/app/inutrips-drive/id6748416907" target="_blank" rel="noopener noreferrer" className="bg-[#675544] text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-lg w-40 justify-center">
                                {/* Apple Logo SVG */}
                                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[9px] uppercase font-bold tracking-wider opacity-80">Consíguelo en el</div>
                                    <div className="font-bold text-sm leading-none font-display">App Store</div>
                                </div>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.inutrips.driver" target="_blank" rel="noopener noreferrer" className="bg-[#675544] text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-lg w-40 justify-center">
                                {/* Google Play Icon SVG */}
                                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.184-.131-.334-.316-.408-.558L3 2.18c.046-.145.247-.366.609-.366zM15.207 13.414l5.658 5.659c.28.278.435.658.435 1.054 0 .394-.154.775-.436 1.053l-5.657-5.658zM4.322 23.368l11.41-11.41 1.487 1.488L5.353 23.58c-.378.214-.816.143-1.03-.143l-.001-.069zM17.219 4.145l-1.487 1.487-11.41-11.41 11.866 10.134a1.493 1.493 0 0 1 1.031-.211z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[9px] uppercase font-bold tracking-wider opacity-80">Disponible en</div>
                                    <div className="font-bold text-sm leading-none font-display">Play Store</div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
