// // HeroSection.js
// import { useState } from 'react';
// import Form from './Form';
// import Reveal from './Reveal';

// import { ToastContainer } from "react-toastify/unstyled";

// const HeroSection = () => {
//     const [activeTab, setActiveTab] = useState('oneWay');
//     const [toast, setToast] = useState({});

//     return (
//         <>
//             <div className="px-0 pb-0 pt-0  lg:pb-24 lg:pt-12">
//                 <div
//                     className="w-full bg-cover bg-center bg-no-repeat rounded-br-xl"
//                     style={{ backgroundImage: "url('/images/hero.png')" }}
//                 >
//                     <ToastContainer />
//                     <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 mt-20 lg:mt-0 flex flex-col lg:flex-row items-center justify-between gap-12">
//                         {/* Left Section */}
//                         <div className="w-full lg:w-1/2 text-white">
//                             <Reveal>
//                                 <h1 className="text-4xl md:text-5xl font-light leading-tight">
//                                     <span className="font-bold text-primary-500 me-4">Cars</span>
//                                     For Rent
//                                 </h1>
//                             </Reveal>

//                             {/* Booking Form */}
//                             <Reveal delay={0.1}>
//                               <Form activeTab={activeTab} setActiveTab={setActiveTab} toast={setToast}/>
//                             </Reveal>
//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default HeroSection;

// HeroSection.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Form from './Form';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

import { ToastContainer } from "react-toastify";

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState('oneWay');
    const [toast, setToast] = useState({});
    const navigate = useNavigate();

    const handleBookNow = () => {
        const element = document.getElementById('booking-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleContactUs = () => {
        navigate('/contact');
    };

    return (
        <>
            <div className="px-0 pb-0 pt-0   ">
                <div
                    className="relative w-full bg-cover bg-center bg-no-repeat h-[90vh] md:h-[740px]"
                    style={{ backgroundImage: "url('/images/hero.png')" }}
                >
                    {/* <ToastContainer /> */}

                    <div className="absolute inset-0 bg-gradient-to-b
        from-black/20 via-transparent to-black/40 z-0" />

                    {/* Content */}
                    <div className="relative z-10 px-4 pt-20 md:pt-28 lg:pt-24">
                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white text-center font-extrabold leading-tight
          text-4xl md:text-6xl lg:text-5xl
          tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-4  w-full"
                        >
                            Book Your Taxi From Anywhere Today
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-primary-500 text-center font-semibold tracking-[2px] mb-4 text-sm"
                        >
                            TRAVEL SECURELY WITH US!
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-white text-center text-base md:text-lg mb-10
          drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                        >
                            Tamil Nadu's most trusted taxi service for every journey.
                            <br />
                            Affordable fares • Professional drivers • Available 24/7
                        </motion.p>

                        {/* Booking Form
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <Form activeTab={activeTab} setActiveTab={setActiveTab} toast={setToast} />
                        </motion.div> */}
                    </div>

                    {/* Actions - Positioned at the bottom center of the hero section */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-11/12 max-w-fit">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-3 md:gap-4"
                        >
                            <button
                                onClick={handleBookNow}
                                className="bg-[#B27E36] hover:bg-[#E18B1C] text-white
            px-8 py-3 rounded text-sm md:text-base font-semibold transition duration-300
            w-full sm:w-auto min-w-[160px]"
                            >
                                Book Your Ride
                            </button>

                            <button
                                onClick={handleContactUs}
                                className="border border-[#B27E36] text-white
            px-8 py-3 rounded text-sm md:text-base font-semibold
            hover:bg-[#B27E36] hover:text-white transition duration-300 w-full sm:w-auto min-w-[160px]"
                            >
                                Contact Us
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;