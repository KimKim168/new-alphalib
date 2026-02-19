import { Link } from '@inertiajs/react';
import { LogoFooter } from './navbars/logoFooter';

const footerSections = [
    {
        title: 'About Us',
        mainLink: '/about_us',
        links: [
            { title: 'Who We Are', href: 'about_us#who-we-are' },
            { title: 'Vision, Mission & Core Values', href: 'about_us#vision-mission-core-values' },
            { title: 'Our Team', href: 'about_us#our-team' },
            { title: 'Who We Deliver For', href: 'about_us#who-we-deliver-for' },
            { title: 'Campaign & Promotion', href: '/campaign_promotion' },
            { title: 'Career', href: 'about_us#career' },
        ],
    },
    {
        title: 'Services',
        mainLink: '/service',
        links: [
            { title: 'Our Services', href: 'service#our-services' },
            { title: 'What We Deliver', href: 'service#what-we-deliver' },
            { title: 'Prohibited Items', href: 'service#prohibited-items' },
            { title: 'Inquiry Lead Form', href: 'service#inquiry-lead-form' },
            { title: 'Charges & Rates', href: 'service#charges-rates' },
            { title: 'Benefits', href: 'service#benefits' },
        ],
    },
    {
        title: 'Contact Us',
        mainLink: '/#contact-detail',
        links: [{ title: 'Contact Detail', href: '/#contact-detail' }],
    },
    { title: 'Track & Trace', mainLink: '/#track-trace', links: [] },
    { title: 'Download Apps', mainLink: '/#download-apps', links: [] },
    { title: 'FAQs', mainLink: '/#faqs', links: [] },
];

const followUs = [
    { img: '/assets/sesor/links/facebook.png', link: 'https://www.facebook.com/SESORexpress' },
    { img: '/assets/sesor/links/instagram.png', link: 'https://www.instagram.com/sesorexpress' },
    { img: '/assets/sesor/links/tiktok.png', link: 'https://www.tiktok.com/@sesorexpress' },
    { img: '/assets/sesor/links/telegram.png', link: 'https://t.me/sesorx' },
    { img: '/assets/sesor/links/whatapp.png', link: 'https://wa.me/qr/O5P3YQECSVJNI1' },
    { img: '/assets/sesor/links/linkedin.png', link: 'https://www.linkedin.com/company/sesor-express/' },
];

const Footer = () => {
    return (
        <footer className="mt-10 bg-true-primary">
            <div className="section-container relative p-4 md:py-6 xl:px-0">
                {/* Top Section */}
                <div className="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9">
                    {/* Logo */}
                    <div className="col-span-full xl:col-span-2">
                        <LogoFooter />
                    </div>

                    {/* Footer Sections */}
                    {footerSections.map(({ title, links, mainLink }) => (
                        <div key={title} className='ml-0 md:ml-5'>
                            <Link href={mainLink} className="font-manrope-bold text-[15px] text-primary-two hover:underline">
                                {title}
                            </Link>
                            {links.length > 0 && (
                                <ul className="mt-2 space-y-1">
                                    {links.map(({ title, href }) => (
                                        <li key={title}>
                                            <Link href={href} className="font-manrope-light text-xs text-white hover:underline">
                                                {title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                    <div>
                        <span className="font-manrope-bold text-[15px] text-primary-two hover:underline">Terms & Conditions</span>
                        <ul className=" space-y-1">
                            <li>
                                <span className="font-manrope-light text-xs text-white hover:underline">©2025 SESOR Express</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Right Social Links */}
                <div className="right-0 bottom-0 my-4 font-manrope-extra-light text-white lg:absolute">
                    <div className="flex flex-col items-center lg:items-start">
                        <span className="mb-1 text-xs">Follow Us On</span>
                        <div className="mb-1 flex gap-1">
                            {followUs.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform hover:scale-110"
                                >
                                    <img src={item.img} alt="social icon" className="h-7 w-7 rounded border dark:border-white" />
                                </a>
                            ))}
                        </div>
                        <span className="text-xs">Sesor Express</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
