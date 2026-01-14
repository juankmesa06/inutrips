import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-orange-500/20 transition-all duration-500 border-2 border-transparent hover:border-primary/50 flex flex-col items-center text-center group h-full relative overflow-visible"
        >
            {/* Creative Icon Container with 'Blob' effect */}
            <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
                <div className={`absolute inset-0 ${color} opacity-20 blur-xl rounded-full transform translate-y-2 group-hover:translate-y-4 transition-transform duration-500`}></div>
                <div className={`relative w-20 h-20 flex items-center justify-center rounded-2xl ${color.replace('text', 'bg').replace('600', '100')} ${color} shadow-lg ring-4 ring-white`}>
                    <Icon size={40} className="transform -rotate-6 group-hover:rotate-0 transition-all duration-500" strokeWidth={2} />
                </div>
            </div>

            <h3 className="text-xl font-bold text-secondary mb-3 font-display">
                {title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm">
                {description}
            </p>
        </motion.div>
    );
};

export default FeatureCard;
