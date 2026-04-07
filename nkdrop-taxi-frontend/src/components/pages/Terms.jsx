import React from 'react';
import Reveal from '../Reveal';
import WhatsAppButton from '../WhatsappButton';
import { 
  FaCheckCircle, 
  FaMoneyBillWave, 
  FaCalendarTimes, 
  FaShieldAlt, 
  FaHandsHelping,
  FaMapMarkedAlt,
  FaExclamationTriangle
} from "react-icons/fa";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Booking & General Terms",
      icon: <FaHandsHelping className="text-blue-500" />,
      content: (
        <div className="space-y-4">
          <p>
            Welcome to <span className="font-bold text-gray-900">NK Drop Taxi</span>. By booking a ride through our website, phone, or WhatsApp, you agree to these legal terms. These terms govern your use of our taxi and transportation services across Tamil Nadu and neighbouring states.
          </p>
          <p>
             We reserve the right to modify these terms at any time. Any updates will be reflected on this page and become effective immediately upon posting.
          </p>
        </div>
      )
    },
    {
      title: "Our Services",
      icon: <FaMapMarkedAlt className="text-emerald-500" />,
      content: (
        <p>
          Our services include specialized <span className="font-semibold underline decoration-[#B27E36]">one-way drop taxis</span>, round-trip bookings, airport transfers, and local hourly rentals. All bookings are subject to vehicle availability and driver allocation.
        </p>
      )
    },
    {
      title: "Fares & Payments",
      icon: <FaMoneyBillWave className="text-orange-500" />,
      content: (
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 text-[#B27E36] shrink-0" />
            <span>Fares are calculated on a per-kilometre basis as displayed on our tariff page.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 text-[#B27E36] shrink-0" />
            <span>Toll fees, parking charges, and inter-state permit fees are borne by the customer.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 text-[#B27E36] shrink-0" />
            <span>A minimum booking distance applies. Extra KMs are charged at the applicable per-km rate.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 text-[#B27E36] shrink-0" />
            <span>Payments: Cash, UPI, or online transfer upon trip completion.</span>
          </li>
        </ul>
      )
    },
    {
      title: "Cancellations",
      icon: <FaCalendarTimes className="text-red-500" />,
      content: (
        <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-400">
          <p className="text-red-800 font-medium">
            Cancellations made at least 4 hours before the scheduled pickup are <span className="font-bold underline">free of charge</span>. Late cancellations or no-shows may attract a cancellation fee.
          </p>
        </div>
      )
    },
    {
      title: "Safety & Conduct",
      icon: <FaShieldAlt className="text-indigo-500" />,
      content: (
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
             <FaCheckCircle className="mt-1 text-[#B27E36] shrink-0" />
             <span>Night travel charges (10:00 PM to 5:00 AM) may apply.</span>
          </li>
          <li className="flex items-start gap-3">
             <FaCheckCircle className="mt-1 text-[#B27E36] shrink-0" />
             <span>The driver has the right to refuse service for inappropriate behavior or illegal detours.</span>
          </li>
          <li className="flex items-start gap-3">
             <FaCheckCircle className="mt-1 text-[#B27E36] shrink-0" />
             <span>Passengers are responsible for their personal belongings; we are not liable for lost items.</span>
          </li>
        </ul>
      )
    }
  ];

  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/services.png')" }}
        />
        <div className="absolute inset-0 bg-black/40 z-10 transition-colors"></div>
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Nunito',sans-serif] tracking-tight">
              Terms & Conditions
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm md:text-lg text-white font-medium max-w-3xl mx-auto opacity-90 leading-relaxed drop-shadow-md">
              Please read our booking terms carefully before using our services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Modern Grid Layout */}
      <div className="max-w-6xl mx-auto py-20 px-4 md:px-6 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{section.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 tracking-tight">{section.title}</h3>
                </div>
                <div className="text-gray-600 leading-relaxed font-normal">
                  {section.content}
                </div>
              </div>
            </Reveal>
          ))}
          
          {/* Support Highlight Card */}
          <Reveal delay={0.5}>
            <div className="md:col-span-2 bg-[#1A1A1A] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:scale-[1.7] transition-transform duration-700">
                <FaHandsHelping className="text-8xl" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <FaExclamationTriangle className="text-orange-400" />
                    Need Support or Have Concerns?
                  </h3>
                  <p className="text-gray-400 text-lg">
                    We value your trust and are committed to resolving issues promptly. Our team striving for 99%+ on-time record for every ride. 
                    For any disputes, contact us at <span className="text-orange-400 font-bold underline">enquiry@nkdroptaxi.com</span>
                  </p>
                </div>
                <a 
                  href="tel:+918489751086"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-orange-500/20 active:scale-95 whitespace-nowrap"
                >
                   CALL US: +91 84897 51086
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      
      <WhatsAppButton />
    </div>
  );
};

export default TermsAndConditions;
