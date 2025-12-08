import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const reviews = [
    {
        id: 1,
        name: "Aisha Rahman",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        text: "Amazing experience! Found a study partner who really helped me improve."
    },
    {
        id: 2,
        name: "Imran Hossain",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
        rating: 4,
        text: "Very helpful and easy to connect with fellow students."
    },
    {
        id: 3,
        name: "Sadia Akter",
        image: "https://images.unsplash.com/photo-1648743856421-5bc9a742ddc5?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        text: "I love the platform! The partners are professional and friendly."
    }
];

const Review = () => {
    return (
        <div className="max-w-6xl mx-auto my-16 px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-base-content">
                What Our Users Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-base-100 p-6 rounded-3xl shadow-lg text-center cursor-pointer transition-all"
                    >
                        <img
                            src={review.image}
                            alt={review.name}
                            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-primary/30"
                        />

                        <h3 className="font-semibold text-lg text-base-content">
                            {review.name}
                        </h3>

                        <div className="flex justify-center items-center gap-1 mt-2 text-yellow-400">
                            {Array.from({ length: review.rating }).map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>

                        <p className="text-base-content/70 text-sm mt-3">
                            {review.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Review;
