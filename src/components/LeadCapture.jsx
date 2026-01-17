import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const LeadCapture = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'pasajero',
        message: ''
    });

    // URL oficial de n8n para captura de leads
    const N8N_WEBHOOK_URL = 'https://kmilo8807.app.n8n.cloud/webhook/lead-capture';

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert('Por favor completa todos los campos.');
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    source: 'Landing Page InuTrips - Contacto',
                    date: new Date().toISOString()
                })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                throw new Error('Failed to send lead');
            }
        } catch (error) {
            console.error('Error sending data to n8n:', error);
            setStatus('error');
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="contact" className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
            }}></div>

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Contact Info */}
                    <div className="pt-4 lg:pt-10">
                        <motion.span
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                        >
                            Soporte InuTrips
                        </motion.span>

                        <motion.h2
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="text-4xl md:text-5xl font-display text-secondary mb-6 leading-tight"
                        >
                            <span className="text-secondary">Contáctanos</span>
                        </motion.h2>

                        <motion.p
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="text-lg text-gray-600 mb-12 leading-relaxed max-w-md"
                        >
                            Estamos aquí para ayudarte. Si tienes preguntas sobre viajes, beneficios o la app, escríbenos.
                        </motion.p>

                        <div className="space-y-8">
                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                                className="flex items-start gap-5"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary border border-gray-100 shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg mb-1">Correo Electrónico</h3>
                                    <p className="text-gray-500 mb-1">Nuestro canal oficial de soporte.</p>
                                    <a href="mailto:soporte@inutrips.com" className="text-primary font-bold hover:underline">soporte@inutrips.com</a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                                className="flex items-start gap-5"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary border border-gray-100 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg mb-1">Línea de Atención</h3>
                                    <p className="text-gray-500 mb-1">Escríbenos a nuestro WhatsApp.</p>
                                    <a href="https://wa.me/573161034386" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">+57 316 103 4386</a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                                className="flex items-start gap-5"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary border border-gray-100 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg mb-1">Ubicación</h3>
                                    <p className="text-gray-500">Medellín, Colombia</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Professional Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-secondary mb-3">¡Mensaje Recibido!</h3>
                                    <p className="text-gray-500 mb-8">Gracias por contactarnos. Nuestro equipo te responderá a la brevedad.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-primary font-bold hover:underline"
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">Nombre</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-all font-medium text-secondary"
                                                placeholder="Tu nombre"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">Rol</label>
                                            <div className="relative">
                                                <select
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-all font-medium text-secondary appearance-none cursor-pointer"
                                                    value={formData.role}
                                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                >
                                                    <option value="pasajero">Pasajero 🐾</option>
                                                    <option value="conductor">Conductor 🚖</option>
                                                    <option value="otro">Otro</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                    <Loader2 size={16} className="hidden" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-all font-medium text-secondary"
                                            placeholder="tucorreo@ejemplo.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">Mensaje</label>
                                        <textarea
                                            required
                                            rows="4"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-all font-medium text-secondary resize-none"
                                            placeholder="Cuéntanos en qué podemos ayudarte..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 className="animate-spin" size={20} />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                Enviar Mensaje <Send size={18} />
                                            </>
                                        )}
                                    </button>

                                    {status === 'error' && (
                                        <p className="text-red-500 text-sm text-center font-medium mt-2 flex items-center justify-center gap-1">
                                            <AlertCircle size={14} /> Hubo un error. Intenta nuevamente.
                                        </p>
                                    )}
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LeadCapture;
