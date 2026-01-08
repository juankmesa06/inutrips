import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import { Shield, Heart, Clock, Car } from 'lucide-react';

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

                {/* Services Section */}
                <section className="py-20 bg-white" id="services">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Nuestros Servicios</span>
                            <h2 className="text-4xl md:text-5xl font-display text-secondary mb-4">Más que un simple viaje</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
                                Diseñado exclusivamente para el bienestar de tu mascota y tu tranquilidad.
                            </p>
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
                <section className="py-20 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-16">
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
                            </div>
                        </div>
                    </div>
                </section>

                {/* Driver Section */}
                <section className="py-20 bg-white" id="drivers">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
                            <div className="md:w-1/2">
                                <h2 className="text-4xl md:text-5xl font-display text-secondary mb-6">Conviértete en Conductor Inu</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Gana dinero extra haciendo lo que amas. Si tienes vehículo propio y amas a los animales, ¡te estamos buscando!
                                </p>
                                <div className="flex flex-col gap-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 bg-green-100 p-1 rounded">
                                            <Shield className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Ingresos Flexibles</h4>
                                            <p className="text-sm text-gray-500">Tú decides cuándo y cuánto conducir.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 bg-purple-100 p-1 rounded">
                                            <Heart className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Comunidad Amante de Mascotas</h4>
                                            <p className="text-sm text-gray-500">Conecta con pasajeros peludos que alegrarán tu día.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="bg-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-lg">
                                    Ver Requisitos
                                </button>
                            </div>
                            <div className="md:w-1/2 relative">
                                <img
                                    src="/driver-guide.jpg"
                                    alt="Guía para conductores"
                                    className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Revised Call to Action / App Download */}
                <section className="py-24 relative overflow-hidden bg-primary" id="safety">
                    <div className="container mx-auto px-4">
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">

                            <div className="md:w-1/2 text-center md:text-left z-10">
                                <h2 className="text-4xl md:text-6xl font-display text-secondary mb-6 leading-tight">
                                    ¡Descarga ya <br /> la App!
                                </h2>
                                <p className="text-xl text-gray-600 mb-8">
                                    Disponible para iOS y Android. Tu primer viaje tiene <strong>20% de descuento</strong>.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-all">
                                        <div className="text-left">
                                            <div className="text-[10px] uppercase font-bold tracking-wider">Download on the</div>
                                            <div className="font-bold text-lg leading-none">App Store</div>
                                        </div>
                                    </button>
                                    <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-all">
                                        <div className="text-left">
                                            <div className="text-[10px] uppercase font-bold tracking-wider">Get it on</div>
                                            <div className="font-bold text-lg leading-none">Google Play</div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="md:w-1/2 flex justify-center z-10">
                                <img
                                    src="/download-app.jpg"
                                    alt="App Preview"
                                    className="max-w-[300px] w-full shadow-2xl rounded-[2rem] transform rotate-3 hover:rotate-0 transition-all duration-500"
                                />
                            </div>

                            {/* Decorative background elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
