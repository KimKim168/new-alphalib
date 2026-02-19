import { usePage } from '@inertiajs/react';
import { ArrowRight, Clock, Mail, Phone } from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';
import AlphalibLayout from './AlphalibLayout';
import useTranslation from '@/hooks/use-translation';

const Contact = () => {
    const { banner, website_info } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    
    return (
        <AlphalibLayout>
            {/* --- Hero Section with Mesh Gradient Overlay --- */}
            <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden bg-slate-950 lg:h-[400px]">
                <div
                    className="animate-pulse-slow absolute inset-0 scale-105 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url('/assets/images/banners/thumb/${banner?.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/20" />

                {/* Decorative Elements */}
                {/* <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]" /> */}
                {/* <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" /> */}
            </div>

            {/* --- Contact Grid --- */}
            <div className="relative z-20 mx-auto mt-10 lg:mt-24 section-container">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <ContactCard
                        icon={<Clock />}
                        title={t('Working Hours')}
                        value={website_info?.working_hours}
                        color="blue"
                        description={t('Available for support & consulting')}
                    />

                    <ContactCard
                        icon={<Phone />}
                        title={t('Phone Number')}
                        value={website_info?.phone}
                        color="emerald"
                        description={t('Call us for assistance')}
                    />

                    <ContactCard
                        icon={<Mail />}
                        title={t('Email Inquiry')}
                        value={website_info?.email}
                        color="rose"
                        description={t('We respond within 24 hours')}
                    />
                </div>

                {/* --- Bottom CTA Section --- */}
                <div className="mt-8 lg:mt-20 flex flex-col items-center justify-between gap-8 rounded-[2rem] border border-white/5 bg-gradient-to-br from-slate-900 to-slate-800 p-12 shadow-2xl md:flex-row">
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white">{t('Need a custom solution?')}</h2>
                        <p className="text-slate-400">{t('Our experts are ready to build something amazing with you.')}</p>
                    </div>
                    <a
                        href="https://t.me/boralala"
                        className="group flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                    >
                        <FaTelegram size={20} />
                        {t('Send a Message')}
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </AlphalibLayout>
    );
};

// --- Sub-component for Advanced Styling ---
const ContactCard = ({ icon, title, value, color, description }: any) => {
    const colors: any = {
        blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
        emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
        rose: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    };

    return (
        <div className="group relative">
            {/* Card Glow Effect on Hover */}
            <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 blur transition duration-500 group-hover:opacity-30" />

            <div className="relative flex h-full flex-col rounded-[2rem] border border-white/10 bg-slate-900 p-8 transition-colors hover:border-white/20">
                <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border ${colors[color]}`}>{icon}</div>

                <h3 className="mb-2 text-sm font-bold tracking-widest text-slate-500 uppercase">{title}</h3>
                <p className="mb-4 text-xl leading-tight font-semibold text-white">{value || t('Not Available')}</p>
                <div className="mt-auto border-t border-white/5 pt-4">
                    <p className="text-sm text-slate-400">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
