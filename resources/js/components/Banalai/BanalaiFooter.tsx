import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';

const BanalaiFooter = () => {
    const { media_links, website_info, privacy_policy, terms_of_service, cookie_policy } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    const mediaBgColors = ['hover:bg-indigo-600', 'hover:bg-blue-500', 'hover:bg-yellow-500', 'hover:bg-green-600'];
    const { url } = usePage();
    return (
        <footer className="bg-[linear-gradient(140deg,#101828,#1e2939,#101828)] text-gray-300">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="mb-6 flex items-center space-x-3">
                            <img src="/assets/logo.png" alt="Banalai Logo" className="h-10 w-auto" />
                            <span className="text-2xl font-bold text-white">
                                {currentLocale === 'kh' ? website_info?.name_kh || website_info?.name : website_info?.name}
                            </span>
                        </div>
                        <p className="mb-6 max-w-md leading-relaxed text-gray-400">
                            {currentLocale === 'kh'
                                ? website_info?.short_description_kh || website_info?.short_description
                                : website_info?.short_description}
                        </p>
                        <div className="flex gap-2">
                            {media_links?.map((item, index) => (
                                <a
                                    key={index}
                                    href={item?.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 transition-colors ${
                                        mediaBgColors[index % mediaBgColors.length]
                                    }`}
                                >
                                    <img src={`/assets/images/links/thumb/${item?.image}`} alt={item?.name || 'Social link'} className="h-7 w-7" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-6 text-lg font-semibold text-white">{t('Quick Links')}</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/', color: 'bg-yellow-400', active: 'text-yellow-400' },
                                { name: 'Products', href: '/products', color: 'bg-indigo-600', active: 'text-indigo-400' },
                                { name: 'Pricing', href: '/pricing', color: 'bg-green-500', active: 'text-green-400' },
                                { name: 'About', href: '/about', color: 'bg-indigo-600', active: 'text-indigo-400' },
                                { name: 'Support', href: '/support', color: 'bg-indigo-600', active: 'text-indigo-400' },
                            ].map((link, idx) => {
                                const isActive = url === link.href;

                                return (
                                    <li key={idx}>
                                        <Link
                                            href={link.href}
                                            className={`group flex items-center transition-colors ${isActive ? link.active : 'text-gray-400'} ${!isActive && 'hover:' + link.active} `}
                                        >
                                            <span
                                                className={`mr-2 h-1.5 w-1.5 rounded-full transition-opacity ${link.color} ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} `}
                                            ></span>
                                            {t(link.name)}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-6 text-lg font-semibold text-white">{t('Get in Touch')}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-500">
                                    <svg className="h-5 w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">{t('Email')}</p>
                                    <a href="mailto:info@banalai.com" className="text-white transition-colors hover:text-indigo-400">
                                        {website_info?.email}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-600">
                                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">{t('Phone')}</p>
                                    <a href="tel:+1234567890" className="text-white transition-colors hover:text-indigo-400">
                                        {website_info?.phone}
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                            <p className="text-sm text-gray-400">
                                {currentLocale === 'kh' ? website_info?.copyright_kh || website_info?.copyright : website_info?.copyright}
                            </p>
                            <p className="text-sm text-gray-500">
                                Powered By:{' '}
                                <a
                                    href="https://www.alphalib.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-yellow-400 transition-colors hover:text-yellow-300"
                                >
                                    Alphalib
                                </a>
                            </p>
                        </div>
                        <div className="flex gap-6 text-sm">
                            <a href={`/privacy_policy`} className="text-gray-400 transition-colors hover:text-green-400">
                                {currentLocale === 'kh' ? privacy_policy?.name_kh || privacy_policy?.name : privacy_policy?.name}
                            </a>
                            <a href={`/terms_of_service`} className="text-gray-400 transition-colors hover:text-yellow-400">
                                {currentLocale === 'kh' ? terms_of_service?.name_kh || terms_of_service?.name : terms_of_service?.name}
                            </a>
                            <a href={`/cookie_policy`} className="text-gray-400 transition-colors hover:text-indigo-400">
                                {currentLocale === 'kh' ? cookie_policy?.name_kh || cookie_policy?.name : cookie_policy?.name}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default BanalaiFooter;
