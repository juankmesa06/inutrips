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
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
        >
            <div className={`p-4 rounded-2xl mb-6 ${color} bg-opacity-20 group-hover:bg-opacity-30 transition-colors`}>
                <Icon size={40} className={`text-${color.split('-')[1]}-600`} strokeWidth={1.5} />
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
