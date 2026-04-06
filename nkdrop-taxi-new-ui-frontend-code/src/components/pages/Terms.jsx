import React from 'react';
import Reveal from '../Reveal';
import WhatsAppButton from '../WhatsappButton';
import { FaCheckCircle } from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Using a darker tinted sunset look */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: "url('/images/services.png')" }}
        ></div>

        {/* Dark Sunset Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Nunito',sans-serif] tracking-tight">
              Terms & Conditions
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm md:text-xl text-white font-medium max-w-2xl mx-auto opacity-90 leading-relaxed drop-shadow-lg">
              Please read our booking terms carefully before using our services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Document Layout Content */}
      <div className="max-w-8xl mx-auto py-4 px-6 sm:px-10 lg:px-12">
        <Reveal>
          <div className="space-y-10 text-gray-700 leading-relaxed">
            <section>
              <p className="mb-8">
                Welcome to NK Drop Taxi. By booking a ride through our website, phone, or WhatsApp, you agree to the following terms and conditions. These terms govern your use of our taxi and transportation services across Tamil Nadu and neighbouring states. We recommend reading them carefully before confirming your booking.
              </p>
              <p className="mb-8">
                NK Drop Taxi reserves the right to modify these terms at any time. Any updates will be reflected on this page and become effective immediately upon posting. Continued use of our services after any modifications constitutes your acceptance of the revised terms.
              </p>
              <p className="mb-12">
                Our services include one-way drop taxis, round-trip bookings, airport transfers, and local hourly rentals. All bookings are subject to vehicle availability, driver allocation, and the terms outlined below.
              </p>
            </section>

            {/* Checklist Section */}
            <section className="space-y-6 bg-gray-50/50 p-8 md:p-12 rounded-3xl border border-gray-100">
              {[
                "Fares are calculated on a per-kilometre basis as displayed on our tariff page. Toll fees, parking charges, and inter-state permit fees are borne by the customer.",
                "A minimum booking distance applies for all trip types. Any additional kilometres beyond the quoted distance will be charged at the applicable per-km rate.",
                "Cancellations made at least 4 hours before the scheduled pickup are free of charge. Late cancellations or no-shows may attract a cancellation fee.",
                "Night travel charges (10:00 PM to 5:00 AM) may apply as per our standard tariff. This will be communicated at the time of booking confirmation.",
                "Passengers are responsible for their personal belongings. NK Drop Taxi is not liable for any loss or damage to items left in the vehicle.",
                "The driver has the right to refuse service if the passenger behaves inappropriately, carries prohibited items, or requests illegal detours."
              ].map((term, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 shrink-0">
                      <FaCheckCircle className="text-[#B27E36] text-xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="text-gray-600 font-medium">{term}</p>
                  </div>
                </Reveal>
              ))}
            </section>

            <section className="pt-8">
              <p className="mb-8">
                Payment can be made via cash, UPI, or online transfer upon trip completion unless pre-payment arrangements have been made. NK Drop Taxi does not guarantee exact arrival times due to traffic and weather conditions but strives for punctuality with a 99%+ on-time record.
              </p>
              <p>
                For any disputes, concerns, or feedback regarding our services, please contact our support team at enquiry@nkdroptaxi.com or call +91 84897 51086. We value your trust and are committed to resolving issues promptly so that every ride with NK Drop Taxi is a pleasant experience.
              </p>
            </section>
          </div>
        </Reveal>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default TermsAndConditions;
