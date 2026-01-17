import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import LeadCapture from './components/LeadCapture';
import { Shield, Heart, Clock, Car, MessageCircle, Apple } from 'lucide-react';

function App() {
    const services = [
        {
            icon: Car,
            title: 'InuTrip Estándar',
            description: 'Transporte seguro y cómodo para citas veterinarias, parques y visitas.',
            color: 'text-blue-600'
        },
        {
            icon: Clock,
            title: 'Rutas Programadas',
            description: 'Ideal para guarderías o paseos diarios. Configúralo una vez y olvídate.',
            color: 'text-purple-600'
        },
        {
            icon: Shield,
            title: 'Conductores Verificados',
            description: 'Todos nuestros conductores pasan por rigurosos exámenes y aman a los animales.',
            color: 'text-green-600'
        },
        {
            icon: Heart,
            title: 'Cuidado Especial',
            description: 'Servicio VIP para mascotas mayores o con necesidades especiales.',
            color: 'text-red-600'
        }
    ];

    return (
        <div className="font-body bg-gray-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <Hero />

                {/* Services Section - Creative Yellow Theme */}
                <section className="py-16 md:py-24 relative overflow-hidden" id="services">
                    {/* Yellow Background with Creative Pattern - Using Brand PRIMARY */}
                    <div className="absolute inset-0 bg-primary"> {/* Official Brand Yellow */}
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23675544' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4h-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/40"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col items-center text-center mb-12 md:mb-20 max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-6"
                            >
                                <span className="bg-secondary/10 backdrop-blur-sm border border-secondary/20 text-secondary px-5 py-2 rounded-full text-xs md:text-sm font-extrabold tracking-widest uppercase shadow-sm">
                                    Nuestros Servicios
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl sm:text-5xl md:text-7xl font-display text-secondary mb-6 md:mb-8 font-bold leading-[1.1] relative text-center"
                            >
                                <span className="relative z-10">Más que un</span>
                                <span className="block mt-2 text-white drop-shadow-md transform -rotate-1 origin-center">simple viaje</span>
                                {/* Creative underline decoration - hidden on very small screens if needed, otherwise fluid */}
                                <svg className="absolute w-full h-3 md:h-4 -bottom-1 md:-bottom-2 left-0 text-white/40 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl md:text-3xl font-medium leading-relaxed font-display max-w-2xl mx-auto text-secondary/90 px-4"
                            >
                                Diseñado exclusivamente para el <span className="underline decoration-white/50 decoration-2 md:decoration-4 underline-offset-4">bienestar de tu mascota</span> y tu tranquilidad.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <FeatureCard
                                    key={index}
                                    {...service}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-16 md:py-20 bg-gray-50 overflow-hidden" id="passengers">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                            <div className="md:w-1/2 relative">
                                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                                <img
                                    src="/user-guide.jpg"
                                    alt="Guía paso a paso para usuarios"
                                    className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Fácil y Rápido</span>
                                <h2 className="text-4xl md:text-5xl font-display text-secondary mb-6">Pide un viaje en minutos</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Ya sea que necesites ir al veterinario de urgencia o llevar a tu perro a la guardería, InuTrips está aquí para ayudarte.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Descarga la app y regístrate.",
                                        "Selecciona el tipo de transporte ideal.",
                                        "Tu conductor certificado llegará por ti."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                            <div className="bg-primary text-secondary w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                {i + 1}
                                            </div>
                                            <span className="font-semibold text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Passenger Download Buttons */}
                                <div className="mt-10">
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-4">Empieza ahora:</p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href="https://apps.apple.com/co/app/inutrips/id6450268527" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1 w-40 justify-center">
                                            {/* Apple Logo SVG */}
                                            <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                            </svg>
                                            <div className="text-left">
                                                <div className="text-[9px] uppercase font-bold tracking-wider opacity-80">Disponible en</div>
                                                <div className="font-bold text-sm leading-none font-display">App Store</div>
                                            </div>
                                        </a>
                                        <a href="https://play.google.com/store/search?q=inutrips&c=apps" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1 w-40 justify-center">
                                            {/* Google Play Icon SVG */}
                                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.184-.131-.334-.316-.408-.558L3 2.18c.046-.145.247-.366.609-.366zM15.207 13.414l5.658 5.659c.28.278.435.658.435 1.054 0 .394-.154.775-.436 1.053l-5.657-5.658zM4.322 23.368l11.41-11.41 1.487 1.488L5.353 23.58c-.378.214-.816.143-1.03-.143l-.001-.069zM17.219 4.145l-1.487 1.487-11.41-11.41 11.866 10.134a1.493 1.493 0 0 1 1.031-.211z" />
                                            </svg>
                                            <div className="text-left">
                                                <div className="text-[9px] uppercase font-bold tracking-wider opacity-80">Disponible en</div>
                                                <div className="font-bold text-sm leading-none font-display">Play Store</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Driver Section */}
                <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden" id="drivers">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 lg:gap-24">

                            <div className="md:w-1/2">
                                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Únete al equipo</span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-secondary mb-6 leading-tight">
                                    Conviértete en <br className="hidden sm:block" />Conductor Inu
                                </h2>
                                <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed font-light">
                                    Gana dinero extra haciendo lo que amas. Si tienes vehículo propio y pasión por los animales, ¡te estamos buscando!
                                </p>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="bg-green-100 p-3 rounded-xl shrink-0">
                                            <Shield className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg text-gray-800 mb-1">Ingresos Flexibles</h4>
                                            <p className="text-gray-500 text-sm leading-snug">Tú decides cuándo conectarte y cuánto conducir cada día.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="bg-purple-100 p-3 rounded-xl shrink-0">
                                            <Heart className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg text-gray-800 mb-1">Comunidad Inu</h4>
                                            <p className="text-gray-500 text-sm leading-snug">Conecta con los pasajeros más agradecidos y peludos.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <a href="https://apps.apple.com/co/app/inutrips-drive/id6748416907" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-lg hover:-translate-y-1 w-40 justify-center">
                                        {/* Apple Logo SVG */}
                                        <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                        </svg>
                                        <div className="text-left">
                                            <div className="text-[9px] uppercase font-bold tracking-wider opacity-80">Disponible en</div>
                                            <div className="font-bold text-sm leading-none font-display">App Store</div>
                                        </div>
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=com.inutrips.inuapp" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-lg hover:-translate-y-1 w-40 justify-center">
                                        {/* Google Play Icon SVG */}
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.609 1.814L13.792 12 3.61 22.186c-.184-.131-.334-.316-.408-.558L3 2.18c.046-.145.247-.366.609-.366zM15.207 13.414l5.658 5.659c.28.278.435.658.435 1.054 0 .394-.154.775-.436 1.053l-5.657-5.658zM4.322 23.368l11.41-11.41 1.487 1.488L5.353 23.58c-.378.214-.816.143-1.03-.143l-.001-.069zM17.219 4.145l-1.487 1.487-11.41-11.41 11.866 10.134a1.493 1.493 0 0 1 1.031-.211z" />
                                        </svg>
                                        <div className="text-left">
                                            <div className="text-[9px] uppercase font-bold tracking-wider opacity-80">Disponible en</div>
                                            <div className="font-bold text-sm leading-none font-display">Play Store</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="md:w-1/2 relative">
                                <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform rotate-6 scale-90"></div>
                                <img
                                    src="/driver-guide.jpg"
                                    alt="Guía para conductores"
                                    className="relative rounded-[2.5rem] shadow-2xl w-full max-w-md mx-auto z-10 border-4 border-white"
                                />
                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -right-6 md:right-12 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '5s' }}>
                                    <div className="bg-yellow-100 p-2 rounded-full">
                                        <Shield size={24} className="text-yellow-600" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 font-bold uppercase">Tu seguridad</div>
                                        <div className="text-secondary font-bold text-sm">es primero</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Revised Call to Action / App Download - DUAL SECTION */}
                <section className="py-16 md:py-24 relative overflow-hidden bg-primary" id="download">
                    <div className="container mx-auto px-4">
                        <div className="bg-secondary rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden ring-8 ring-white/20">

                            {/* Decorative Background */}
                            <div className="absolute inset-0 z-0 opacity-10">
                                <img src="/logo.png" className="w-[800px] absolute -right-20 -top-40 rotate-12 blur-sm" alt="Watermark" />
                            </div>

                            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">

                                {/* Passenger Column */}
                                <div className="text-center md:text-left md:pr-8">
                                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-4 text-white">
                                        Para Pasajeros
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display mb-4 leading-tight text-white">
                                        Viaja <span className="text-primary">seguro</span> con tu mejor amigo
                                    </h2>
                                    <p className="text-base md:text-lg text-white/80 mb-6">
                                        Descarga InuTrips y disfruta de la movilidad que tu mascota merece. <br className="hidden sm:block" />
                                        <span className="text-primary font-bold text-lg md:text-xl block mt-2">¡Tu primer viaje tiene 20% OFF!</span>
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                        <a href="https://apps.apple.com/co/app/inutrips/id6450268527" target="_blank" rel="noopener noreferrer" className="bg-white text-secondary px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-all shadow-lg hover:scale-105 group w-40 justify-center">
                                            {/* Apple Logo SVG */}
                                            <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                            </svg>
                                            <div className="text-left">
                                                <div className="text-[9px] uppercase font-bold tracking-wider text-gray-400 group-hover:text-secondary transition-colors opacity-80">Disponible en</div>
                                                <div className="font-bold text-sm leading-none font-display">App Store</div>
                                            </div>
                                        </a>
                                        <a href="https://play.google.com/store/search?q=inutrips&c=apps" target="_blank" rel="noopener noreferrer" className="bg-white text-secondary px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-all shadow-lg hover:scale-105 group w-40 justify-center">
                                            {/* Google Play Icon SVG */}
                                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.184-.131-.334-.316-.408-.558L3 2.18c.046-.145.247-.366.609-.366zM15.207 13.414l5.658 5.659c.28.278.435.658.435 1.054 0 .394-.154.775-.436 1.053l-5.657-5.658zM4.322 23.368l11.41-11.41 1.487 1.488L5.353 23.58c-.378.214-.816.143-1.03-.143l-.001-.069zM17.219 4.145l-1.487 1.487-11.41-11.41 11.866 10.134a1.493 1.493 0 0 1 1.031-.211z" />
                                            </svg>
                                            <div className="text-left">
                                                <div className="text-[9px] uppercase font-bold tracking-wider text-gray-400 group-hover:text-secondary transition-colors opacity-80">Disponible en</div>
                                                <div className="font-bold text-sm leading-none font-display">Play Store</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* Driver Column */}
                                <div className="text-center md:text-left md:pl-8 pt-8 md:pt-0">
                                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/40 text-xs font-bold tracking-widest uppercase mb-4 text-primary">
                                        Para Conductores
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display mb-4 leading-tight text-white">
                                        Genera ingresos <span className="text-primary">extra</span>
                                    </h2>
                                    <p className="text-base md:text-lg text-white/80 mb-6">
                                        Únete al equipo de conductores amantes de las mascotas. <br className="hidden sm:block" />
                                        <span className="text-white bg-white/10 px-2 py-1 rounded inline-block mt-2 font-medium text-sm md:text-base">
                                            🎁 <span className="text-primary font-bold">¡Recibe $10.000 de regalo</span> en tu primera recarga!
                                        </span>
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                        <a href="https://apps.apple.com/co/app/inutrips-drive/id6748416907" target="_blank" rel="noopener noreferrer" className="bg-white text-secondary px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-all shadow-lg hover:scale-105 group w-40 justify-center">
                                            {/* Apple Logo SVG */}
                                            <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                            </svg>
                                            <div className="text-left">
                                                <div className="text-[9px] uppercase font-bold tracking-wider text-gray-400 group-hover:text-secondary transition-colors opacity-80">Disponible en</div>
                                                <div className="font-bold text-sm leading-none font-display">App Store</div>
                                            </div>
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=com.inutrips.inuapp" target="_blank" rel="noopener noreferrer" className="bg-white text-secondary px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-all shadow-lg hover:scale-105 group w-40 justify-center">
                                            {/* Google Play Icon SVG */}
                                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.184-.131-.334-.316-.408-.558L3 2.18c.046-.145.247-.366.609-.366zM15.207 13.414l5.658 5.659c.28.278.435.658.435 1.054 0 .394-.154.775-.436 1.053l-5.657-5.658zM4.322 23.368l11.41-11.41 1.487 1.488L5.353 23.58c-.378.214-.816.143-1.03-.143l-.001-.069zM17.219 4.145l-1.487 1.487-11.41-11.41 11.866 10.134a1.493 1.493 0 0 1 1.031-.211z" />
                                            </svg>
                                            <div className="text-left">
                                                <div className="text-[9px] uppercase font-bold tracking-wider text-gray-400 group-hover:text-secondary transition-colors opacity-80">Disponible en</div>
                                                <div className="font-bold text-sm leading-none font-display">Play Store</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <LeadCapture />

                {/* Floating WhatsApp Button */}
                <a
                    href="https://wa.me/573161034386"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-bounce-subtle flex items-center justify-center group"
                    aria-label="Chatea con nosotros en WhatsApp"
                    title="Chatea con nosotros"
                >
                    <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
                    <MessageCircle size={32} className="fill-current" />
                    <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none transform translate-x-2 group-hover:translate-x-0">
                        ¡Escríbenos!
                    </span>
                </a>
            </main>

            <Footer />
        </div >
    );
}

export default App;
