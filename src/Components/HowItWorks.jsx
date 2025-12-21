import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { id: 1, title: 'Create your profile', description: 'Sign up and complete your study profile.' },
    { id: 2, title: 'Find study partner', description: 'Browse top-rated partners and connect.' },
    { id: 3, title: 'Start learning together', description: 'Schedule sessions and improve skills.' },
];

const HowItWorks = () => {
    return (
        <div className="max-w-6xl mx-auto my-16 px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-base-content">
                How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-base-100 rounded-3xl p-8 shadow-lg text-center cursor-pointer transition-all"
                    >
                        <div className="text-primary font-bold text-3xl mb-4">
                            {step.id}
                        </div>

                        <h3 className="font-semibold text-xl mb-2 text-base-content">
                            {step.title}
                        </h3>

                        <p className="text-base-content/70 text-sm">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;