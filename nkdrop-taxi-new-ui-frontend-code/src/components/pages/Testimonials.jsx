import React from 'react';
import Reveal from '../Reveal';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Karthik Rajan",
        role: "Frequent Traveler",
        text: "I've been using NK Drop Taxi for my weekly Chennai to Coimbatore trips. The drivers are always on time, the cars are spotless, and the one-way fare saves me so much compared to other services. Truly the best drop taxi in Tamil Nadu!"
    },
    {
        id: 2,
        name: "Priya Lakshmi",
        role: "Business Professional",
        text: "Booked an airport transfer for my early morning flight from Trichy. The driver arrived 15 minutes early, helped with my luggage, and the ride was incredibly smooth. I've now made NK Drop Taxi my go-to for all airport trips."
    },
    {
        id: 3,
        name: "Rajesh Kumar",
        role: "Family Traveler",
        text: "Took the Innova for a family trip from Madurai to Ooty. The vehicle was well-maintained, AC worked perfectly, and our driver was very professional. The transparent pricing with no hidden charges was a pleasant surprise."
    },
    {
        id: 4,
        name: "Deepa Venkatesh",
        role: "Regular Customer",
        text: "What I love about NK Drop Taxi is their 24/7 availability. I once needed a ride at 2 AM for an emergency trip to Vellore and they arranged it within 30 minutes. Reliable service you can count on anytime!"
    },
    {
        id: 5,
        name: "Arun Prasad",
        role: "Corporate Client",
        text: "Our company has been using NK Drop Taxi for employee transportation for over a year now. Their fleet quality, driver professionalism, and competitive corporate rates make them our preferred partner. Highly recommended for businesses!"
    },
    {
        id: 6,
        name: "Meera Sundaram",
        role: "Tourist",
        text: "As someone visiting Tamil Nadu for the first time, NK Drop Taxi made my travel seamless. From Temple visits in Thanjavur to beach trips in Rameshwaram, their drivers knew the best routes and were very courteous. Five stars!"
    }
];

const Testimonials = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/images/services.png')" }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                {/* Content */}
                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Nunito',sans-serif] tracking-tight">
                            Testimonials
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-sm md:text-lg text-white font-medium max-w-3xl mx-auto opacity-90 leading-relaxed drop-shadow-md">
                            Hear from thousands of happy riders who trust NK Drop Taxi for their journeys.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Testimonials Grid Section */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <Reveal>
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="flex gap-1">
                                    <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                                    <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                                    <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                                </div>
                                <span className="text-[#E18B1C] font-bold tracking-widest text-sm uppercase">
                                    Customer Feedback
                                </span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-['Nunito',sans-serif]">
                                What Our Happy Clients Say
                            </h2>
                        </Reveal>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Reveal key={testimonial.id} delay={index * 0.1}>
                                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full group">
                                    <div className="flex gap-1 mb-6 text-[#E18B1C]">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-grow italic">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md" style={{ background: 'linear-gradient(135deg, #B27E36, #E18B1C)' }}>
                                            {testimonial.name.split(' ').map(n => n.charAt(0)).join('')}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg group-hover:text-[#E18B1C] transition-colors">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
