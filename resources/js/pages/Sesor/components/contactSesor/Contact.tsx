import { link } from 'fs';
import GoogleMap from './GoogleMap';

const Contact = () => (
    <div id="contact-detail" className="mt-5 md:mt-10">
        <div className="section-container">
            <h2 className="text-center font-manrope-extra-bold text-[20px] tracking-tight text-primary md:text-3xl">Contact Detail</h2>

            <div className="mt-2.5 grid gap-5 md:mt-5 md:gap-10 lg:grid-cols-2">
                {/* Google Map */}
                <GoogleMap />
                {/* End Google Map */}

                {/* Contact Info */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
                    {[
                        {
                            icon: '/assets/sesor/main_page/Phone.png',
                            title: 'Call Us',
                            lines: '+855 81 210 111 <br/> +855 61 210 111',
                        },
                        {
                            icon: '/assets/sesor/main_page/Email.png',
                            title: 'Email Us',
                            lines: 'contact@sesorexpress.com',
                        },
                        {
                            icon: '/assets/sesor/main_page/Website.png',
                            title: 'Website',
                            lines: 'www.sesorexpress.com',
                        },
                        {
                            icon: '/assets/sesor/main_page/Address.png',
                            title: 'Address',
                            lines: 'No. 20, Street. 598C, Phum Tomnob, Sangkat Phnom Penh Thmey, Khan SenSok, Phnom Penh, Cambodia',
                        },
                    ].map((item, idx) => (
                        <div className="flex items-start gap-4" key={idx}>
                            <div className=" w-10 flex-shrink-0 md:w-12">
                                <img src={item.icon} alt={`${item.title} Icon`} className="h-full w-full object-contain" />
                            </div>
                            <div>
                                <h3 className="font-manrope-semi-bold text-[17px] text-[#231F20] md:text-xl">{item.title}</h3>
                                <p
                                    className="font-manrope-regular text-[12px] text-[#231F20] md:text-[15px]"
                                    dangerouslySetInnerHTML={{ __html: item.lines }}
                                />
                            </div>
                        </div>
                    ))}

                    {/* Social Links and QR */}
                    <div className="col-span-1 grid justify-between sm:col-span-2 sm:grid-cols-2 sm:gap-8">
                        {/* Social Links */}
                        <div className="mb-4 p-2 sm:mb-0">
                            <p className="mb-2 font-manrope-semi-bold text-[17px] text-[#231F20] md:text-xl">Find us on</p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { src: '/assets/sesor/links/facebook.png', alt: 'Facebook', link:'https://www.facebook.com/SESORexpress' },
                                    { src: '/assets/sesor/links/instagram.png', alt: 'Instagram', link:'https://www.instagram.com/sesorexpress/#' },
                                    { src: '/assets/sesor/links/tiktok.png', alt: 'TikTok', link:'https://www.tiktok.com/@sesorexpress' },
                                    { src: '/assets/sesor/links/telegram.png', alt: 'Telegram', link:'https://t.me/sesorx' },
                                    { src: '/assets/sesor/links/whatapp.png', alt: 'WhatsApp', link:'https://wa.me/qr/O5P3YQECSVJNI1' },
                                    { src: '/assets/sesor/links/linkedin.png', alt: 'LinkedIn', link:'https://www.linkedin.com/company/sesor-express/' },
                                ].map((item, idx) => (
                                    <a
                                        href="#"
                                        key={idx}
                                        className="transition-transform duration-300 hover:-translate-y-1 hover:scale-110 hover:opacity-80"
                                    >
                                        <img src={item.src} className="aspect-square h-7" alt={item.alt} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* QR Codes */}
                        <div className="flex flex-wrap justify-start gap-2 p-2">
                            <img src="/assets/sesor/links/SesorWhatsApp_FA.png" className="aspect-square w-20 object-contain" alt="WhatsApp QR" />
                            <img src="/assets/sesor/links/SesorTelegram_FA.png" className="aspect-square w-20 object-contain" alt="Telegram QR" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;
