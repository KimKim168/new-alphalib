import { useState } from 'react';
import ButtonClose from '../../Bottons/ButtonClose';

const FAQSDetail = () => {
    const faqs = [
        {
            value: 'item-1',
            question: 'Where does SESOR Express deliver?',
            answer: '• We provide delivery within Phnom Penh. Shipments to provincial areas are subject to availability and handled through our reliable delivery network.wer',
        },
        {
            value: 'item-2',
            question: 'What are your operating hours?',
            answer: '• Operation is available daily from 7:00 AM to 7:00 PM, excluding public holidays.',
        },
        {
            value: 'item-3',
            question: 'Does SESOR Express offer free pick-up and door-to-door delivery service?',
            answer: '• Yes; free pick-up and door-to-door delivery for all Phnom Penh orders. Provincial suburb deliveries depend on availability.',
        },
        {
            value: 'item-4',
            question: 'How can I place a delivery order?',
            answer: '• You can make a booking through our three service channels: customer portal, mobile app, or via Telegram. <br/> • On our mobile app, you can request or schedule a delivery, and you’ll be notified once your order is confirmed or in progress.',
        },
        {
            value: 'item-5',
            question: 'What are the service charges?',
            answer: '• Fees may include the delivery charge, service add-ons, VAT, and other applicable costs. <br/>• Available payment methods include cash, online payment, cash-on-delivery (COD), and monthly billing for business accounts.',
        },
        {
            value: 'item-6',
            question: 'How do I track my parcel?',
            answer: '• You can track your parcel via our customer portal or mobile app. Real-time updates and live tracking are available in the app while your parcel is in transit.',
        },
        {
            value: 'item-7',
            question: 'Do I need to prepare my own packaging?',
            answer: '• Yes, packaging is not included in the delivery fee.',
        },
        {
            value: 'item-8',
            question: 'Package Information Needed',
            answer: '• Provide the sender’s and receiver’s names, contact numbers, pick-up and drop-off addresses, and the parcel weight in (kg) when placing a delivery order.<br/>• Charges are based on whichever is higher: the actual weight or the volumetric (dimensional) weight.',
        },
        {
            value: 'item-9',
            question: 'What is Volumetric Weight?',
            answer: '• A calculation that considers length × width × height of a package.<br/>•	Used if the package is large but light, to ensure fair pricing.',
        },
        {
            value: 'item-10',
            question: 'What are prohibited items?',
            answer: '•	Dangerous goods (e.g., explosives and flammable liquids) <br/>• Illegal drugs and controlled substances <br/>• Firearms or weapons <br/>• Live animals or remains',
        },
        {
            value: 'item-11',
            question: 'What are restricted items:',
            answer: '• Jewelry or luxury items <br/>• Fresh or perishable goods without a cooler <br/>•	Food & drinks <br/>• Fragile items without secure packaging',
        },
    ];

    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [showFAQ, setShowFAQ] = useState(true);

    return (
        <div className="relative w-full bg-[#93288D] bg-cover bg-center">
            <div className="section-container relative w-full">
                {showFAQ && (
                    <div className="w-full py-6 md:py-12">
                        {faqs.map(({ value, question, answer }) => (
                            <div
                                key={value}
                                className="cursor-pointer"
                                onMouseEnter={() => setHoveredItem(value)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className="py-2 font-manrope-semi-bold text-[18px] text-white md:text-2xl">
                                    <ul className="m-0 list-inside list-disc">
                                        <li>{question}</li>
                                    </ul>
                                </div>
                                {hoveredItem === value && (
                                    <div
                                        className="flex flex-col gap-2 ml-[24px] bg-white p-2 font-manrope-semi-bold text-[15px] text-black md:text-xl"
                                        dangerouslySetInnerHTML={{ __html: answer }}
                                    />
                                )}
                            </div> 
                        ))}
                    </div>
                )}

                {showFAQ && (
                    <div className="absolute right-2 bottom-2 xl:-right-17">
                        <button onClick={() => setShowFAQ(false)}>
                            <ButtonClose />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQSDetail;
