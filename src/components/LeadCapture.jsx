import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Sparkles, Star, PawPrint } from 'lucide-react';

const LeadCapture = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'pasajero'
    });

    // URL oficial de n8n para captura de leads
    const N8N_WEBHOOK_URL = 'https://kmilo8807.app.n8n.cloud/webhook/lead-capture';

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email) {
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
                    source: 'Landing Page InuTrips',
                    date: new Date().toISOString()
                })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                throw new Error('Failed to send lead');
            }
        } catch (error) {
            console.error('Error sending lead to n8n:', error);
            setStatus('error');
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const floatingIcons = [
        { icon: PawPrint, top: '10%', left: '5%', delay: 0 },
        { icon: Star, top: '20%', right: '8%', delay: 1 },
        { icon: Sparkles, bottom: '15%', left: '10%', delay: 0.5 },
        { icon: Star, bottom: '10%', right: '5%', delay: 1.5 },
    ];

    return (
        <section id="register" className="py-24 bg-secondary relative overflow-hidden">
            {/* Animated Background Icons */}
            {floatingIcons.map((item, index) => (
                <motion.div
                    key={index}
                    className="absolute text-primary/10 pointer-events-none hidden md:block"
                    style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 4,
                        delay: item.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <item.icon size={120} />
                </motion.div>
            ))}

            {/* Background blur elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/20 backdrop-blur-sm"
                >

                    {/* Left: Info Side */}
                    <div className="md:w-1/2 bg-primary p-8 sm:p-10 md:p-16 flex flex-col justify-center text-secondary relative overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>

                        <motion.span
                            variants={itemVariants}
                            className="inline-block px-3 py-1 bg-secondary/10 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 self-start relative z-10"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            🚀 Exclusivo InuTrips
                        </motion.span>

                        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-display mb-6 md:mb-8 leading-[1.15] relative z-10">
                            ¡Regístrate y recibe <span className="underline decoration-secondary/30 decoration-thickness-2">beneficios</span> únicos!
                        </motion.h2>

                        <ul className="space-y-4 mb-4 md:mb-8 text-secondary/80 font-medium text-sm md:text-base relative z-10">
                            {[
                                "Bono de $10.000 (Conductores)",
                                "20% OFF primer viaje (Pasajeros)",
                                "Acceso previo a nuevas funciones"
                            ].map((text, i) => (
                                <motion.li
                                    key={i}
                                    variants={itemVariants}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                                        <CheckCircle size={14} />
                                    </div>
                                    {text}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Form Side */}
                    <div className="md:w-1/2 p-8 sm:p-10 md:p-16 flex flex-col justify-center bg-white relative">
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    className="text-center py-4 md:py-0"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                        className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 shadow-inner"
                                    >
                                        <CheckCircle size={32} className="md:w-10 md:h-10" />
                                    </motion.div>
                                    <h3 className="text-2xl font-display text-secondary mb-3 md:mb-4">¡Registro Exitoso!</h3>
                                    <p className="text-sm md:text-base text-gray-500 mb-6 md:mb-8 italic">"Prepárate para viajar como nunca antes"</p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setStatus('idle')}
                                        className="text-primary font-bold hover:underline flex items-center gap-2 mx-auto"
                                    >
                                        Registrar otro correo <Sparkles size={16} />
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h3 className="text-2xl font-display text-secondary mb-8">Déjanos tus datos</h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <motion.div variants={itemVariants}>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Nombre completo</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Ej: Juan Pérez"
                                                className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </motion.div>
                                        <motion.div variants={itemVariants}>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Correo Electrónico</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="Ej: juan@ejemplo.com"
                                                className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </motion.div>
                                        <motion.div variants={itemVariants}>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Me interesa como...</label>
                                            <div className="relative">
                                                <select
                                                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all appearance-none shadow-sm cursor-pointer"
                                                    value={formData.role}
                                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                >
                                                    <option value="pasajero">Pasajero 🐾</option>
                                                    <option value="conductor">Conductor 🚖</option>
                                                </select>
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                    <Loader2 size={16} className="hidden" /> {/* Placeholder for arrow if needed */}
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.button
                                            variants={itemVariants}
                                            type="submit"
                                            disabled={status === 'loading'}
                                            whileHover={{ scale: 1.02, backgroundColor: '#f7a800' }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-secondary text-white py-4.5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-xl active:shadow-inner disabled:opacity-70 h-14"
                                        >
                                            {status === 'loading' ? (
                                                <motion.div
                                                    animate={{ opacity: [1, 0.5, 1] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <Loader2 className="animate-spin" size={20} />
                                                    Procesando...
                                                </motion.div>
                                            ) : (
                                                <>
                                                    <Send size={20} />
                                                    ¡Registrarme Ahora!
                                                </>
                                            )}
                                        </motion.button>

                                        {status === 'error' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-center gap-2 text-red-500 text-sm font-semibold justify-center bg-red-50 py-2 rounded-lg"
                                            >
                                                <AlertCircle size={16} />
                                                Ocurrió un error. Inténtalo de nuevo.
                                            </motion.div>
                                        )}

                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LeadCapture;
