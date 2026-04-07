import React from 'react';
import Reveal from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';

const Nkdrop = () => {
    return (
        <div>
            {/* nk drop taxi */}
            <section className="w-full py-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Left Content */}
                        <div className="w-full lg:w-1/2">
                            <Reveal>
                                <div className="flex items-center gap-2 mb-4">
                                    {/* Slanted Lines Icon */}
                                    <div className="flex gap-1">
                                        <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                                        <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                                        <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                                    </div>
                                    <span className="text-[#E18B1C] font-bold tracking-widest text-sm uppercase">
                                        ABOUT US
                                    </span>
                                </div>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-['Nunito',sans-serif]">
                                    NK Drop Taxi
                                </h2>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    NK Drop Taxi is your reliable travel partner for one-way drops, round trips, and
                                    airport transfers across Tamil Nadu. With a fleet of well-maintained vehicles and
                                    experienced drivers, we ensure every journey is safe, comfortable, and affordable.
                                </p>
                            </Reveal>

                            <Reveal delay={0.3}>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "24/7 Availability Across Tamil Nadu",
                                        "Transparent Pricing — No Hidden Charges",
                                        "Professional & Verified Drivers"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                                            <span className="text-gray-700 font-bold text-sm md:text-base">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>

                            <Reveal delay={0.4}>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Whether it's a quick city ride or a long-distance outstation trip, NK Drop Taxi
                                    delivers a premium travel experience at budget-friendly rates.
                                </p>
                            </Reveal>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/2 relative">
                            <Reveal delay={0.2}>
                                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/images/caroctavia.png"
                                        alt="NK Drop Taxi Octavia"
                                        className="w-full h-[70vh] object-cover"
                                    />
                                </div>

                                {/* Decorative Circle */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 border-[3px] border-[#E18B1C] border-dashed rounded-full z-0 opacity-80 hidden md:block"></div>
                            </Reveal>
                        </div>

                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <TestimonialsCarousel />

            {/* FAQ Section */}
            <FaqSection />
        </div>
    );
};

const testimonials = [
    {
        id: 1,
        name: "Karthik Rajan",
        role: "Frequent Traveler",
        text: "I've been using NK Drop Taxi for my weekly Chennai to Coimbatore trips. The drivers are always on time, the cars are spotless, and the one-way fare saves me so much. Truly the best drop taxi in Tamil Nadu!"
    },
    {
        id: 2,
        name: "Priya Lakshmi",
        role: "Business Professional",
        text: "Booked an airport transfer for my early morning flight from Trichy. The driver arrived 15 minutes early, helped with my luggage, and the ride was incredibly smooth. NK Drop Taxi is my go-to for all airport trips."
    },
    {
        id: 3,
        name: "Rajesh Kumar",
        role: "Family Traveler",
        text: "Took the Innova for a family trip from Madurai to Ooty. The vehicle was well-maintained, AC worked perfectly, and our driver was very professional. Transparent pricing with no hidden charges!"
    },
    {
        id: 4,
        name: "Deepa Venkatesh",
        role: "Regular Customer",
        text: "What I love about NK Drop Taxi is their 24/7 availability. I once needed a ride at 2 AM for an emergency trip to Vellore and they arranged it within 30 minutes. Reliable service you can count on anytime!"
    }
];

const faqData = [
    {
        question: "How do I book a taxi with NK Drop Taxi?",
        answer: "You can book a taxi easily through our website by filling out the booking form, or by calling our customer support number directly. We offer 24/7 booking services."
    },
    {
        question: "What types of vehicles are available?",
        answer: "We offer a wide range of vehicles including Hatchbacks (Indica/Swift), Sedans (Etios/Dzire), SUVs (Innova/Xylo), and Tempo Travellers for larger groups."
    },
    {
        question: "Process of the booking cancellation?",
        answer: "You can cancel your booking by calling our customer support at least 4 hours before the scheduled pickup time. Cancellation charges may apply depending on the timing."
    },
    {
        question: "Is there any night charge?",
        answer: "Yes, night charges are applicable for drives between 10:00 PM and 5:00 AM. This info is transparently provided at the time of booking confirmation."
    },
    {
        question: "Do you offer one-way drops?",
        answer: "Yes, we specialize in one-way drop services across Tamil Nadu and nearby states, allowing you to pay only for the distance traveled."
    },
    {
        question: "Are toll and parking charges included?",
        answer: "No, toll fees, parking charges, and state permit taxes are to be paid by the customer typically on actuals during the trip."
    },
    {
        question: "How is the distance calculated?",
        answer: "Distance is calculated from our garage back to our garage (round trip) or point-to-point for one-way drops as per the agreed tariff plan."
    },
    {
        question: "Can I change my booking details?",
        answer: "Yes, you can modify your booking details like date, time, or car type by contacting our support team, subject to vehicle availability."
    },
    {
        question: "Is the pricing fixed or variable?",
        answer: "Our pricing is transparent and mostly fixed per km as per the vehicle type. Estimated costs are provided upfront so there are no surprises."
    },
    {
        question: "What safety measures do you follow?",
        answer: "Our cars are regularly sanitized, and our drivers are professional, background-verified, and follow all safety protocols for a secure journey."
    }
];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="w-full py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <Reveal>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#E18B1C] text-center mb-10 font-['Nunito',sans-serif]">FAQ</h2>
                </Reveal>

                <div className="bg-white rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden mb-8">
                    {/* Scrollable Container */}
                    <div className="max-h-[500px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-orange-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-orange-700">
                        <AnimatePresence initial={false}>
                            {faqData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-b border-gray-100 last:border-b-0"
                                >
                                    <div
                                        className="flex justify-between items-center p-6 cursor-pointer transition-colors duration-300 relative bg-white"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        {activeIndex === index && (
                                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#E18B1C] shadow-[0_0_8px_rgba(225,139,28,0.4)]" />
                                        )}
                                        <h3 className={`font-medium text-sm md:text-base pr-8 transition-colors duration-300 ${activeIndex === index ? 'text-[#E18B1C]' : 'text-gray-600'}`}>
                                            {item.question}
                                        </h3>
                                        <motion.div
                                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-gray-400"
                                        >
                                            <ChevronDownIcon />
                                        </motion.div>
                                    </div>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-6 pt-0 text-gray-500 text-sm leading-relaxed">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ChevronDownIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M6 9l6 6 6-6" />
    </svg>
);


const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    // Determine how many items to show
    const itemsToShow = isMobile ? 1 : 2;

    // Calculate visible items based on current index (circular)
    const visibleTestimonials = [];
    for (let i = 0; i < itemsToShow; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visibleTestimonials.push(testimonials[index]);
    }

    return (
        <section id="testimonials" className="w-full py-20 bg-[#FFF9F0]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <Reveal>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <div className="flex gap-1">
                                <div className="w-[4px] h-5 bg-[#E18B1C] -skew-x-[20deg]"></div>
                                <div className="w-[4px] h-5 bg-[#E18B1C] -skew-x-[20deg]"></div>
                                <div className="w-[4px] h-5 bg-[#E18B1C] -skew-x-[20deg]"></div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 font-['Nunito',sans-serif]">Testimonials</h2>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-gray-500 text-sm">What our happy riders say about us</p>
                    </Reveal>
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden mb-10 min-h-[300px]">
                    <div className="flex justify-center gap-6 lg:gap-10">
                        <AnimatePresence mode="popLayout">
                            {visibleTestimonials.map((item) => (
                                <motion.div
                                    key={`${item.id}-${currentIndex}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                                >
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                        {item.text}
                                    </p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md" style={{ background: 'linear-gradient(135deg, #B27E36, #E18B1C)' }}>
                                            {item.name.split(' ').map(n => n.charAt(0)).join('')}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg">{item.name}</h4>
                                            <p className="text-[#E18B1C] text-xs font-semibold uppercase">{item.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${idx === currentIndex
                                ? 'bg-[#E18B1C] w-4'
                                : 'bg-orange-200'
                                }`}
                        />
                    ))}
                </div>
            </div >
        </section >
    );
};

export default Nkdrop;
