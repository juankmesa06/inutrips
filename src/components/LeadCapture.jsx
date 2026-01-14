import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const LeadCapture = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        role: 'pasajero'
    });

    // URL oficial de n8n para captura de leads
    const N8N_WEBHOOK_URL = 'https://kmilo8807.app.n8n.cloud/webhook/lead-capture';

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.whatsapp) {
            alert('Por favor completa todos los campos.');
            return;
        }

        setStatus('loading');

        try {
            if (!N8N_WEBHOOK_URL) {
                // Mock success if URL is not provided yet for demo purposes
                console.warn('n8n Webhook URL not set. Mocking success.');
                await new Promise(resolve => setTimeout(resolve, 1500));
                setStatus('success');
                return;
            }

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

    return (
        <section id="register" className="py-24 bg-secondary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">

                    {/* Left: Info Side */}
                    <div className="md:w-1/2 bg-primary p-10 md:p-16 flex flex-col justify-center text-secondary">
                        <span className="inline-block px-3 py-1 bg-secondary/10 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                            Exclusivo InuTrips
                        </span>
                        <h2 className="text-4xl font-display mb-6 leading-tight">
                            ¡Regístrate y recibe <span className="underline decoration-secondary/30">beneficios</span> exclusivos!
                        </h2>
                        <ul className="space-y-4 mb-8 text-secondary/80 font-medium">
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                    <CheckCircle size={14} />
                                </div>
                                Bono de $10.000 (Conductores)
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                    <CheckCircle size={14} />
                                </div>
                                20% OFF primer viaje (Pasajeros)
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                    <CheckCircle size={14} />
                                </div>
                                Acceso previo a nuevas funciones
                            </li>
                        </ul>
                    </div>

                    {/* Right: Form Side */}
                    <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white">
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h3 className="text-2xl font-display text-secondary mb-4">¡Registro Exitoso!</h3>
                                    <p className="text-gray-500 mb-8">Un asesor InuTrips te contactará pronto por WhatsApp.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-primary font-bold hover:underline"
                                    >
                                        Registrar otro número
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <h3 className="text-2xl font-display text-secondary mb-8">Déjanos tus datos</h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Nombre completo</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Ej: Juan Pérez"
                                                className="w-full px-5 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">WhatsApp / Celular</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="Ej: 316 123 4567"
                                                className="w-full px-5 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                value={formData.whatsapp}
                                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Me interesa como...</label>
                                            <select
                                                className="w-full px-5 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
                                                value={formData.role}
                                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            >
                                                <option value="pasajero">Pasajero 🐾</option>
                                                <option value="conductor">Conductor 🚖</option>
                                            </select>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full bg-secondary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-lg active:scale-95 disabled:opacity-70"
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={20} />
                                                    Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={20} />
                                                    Registrarme ahora
                                                </>
                                            )}
                                        </button>

                                        {status === 'error' && (
                                            <div className="flex items-center gap-2 text-red-500 text-sm font-medium animate-pulse">
                                                <AlertCircle size={16} />
                                                Ocurrió un error. Inténtalo de nuevo.
                                            </div>
                                        )}

                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadCapture;
