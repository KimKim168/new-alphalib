import { Link } from '@inertiajs/react';
import { MailIcon, MapPinIcon, PhoneIcon, Timer } from 'lucide-react';

const contactItems = [
    {
        icon: <MailIcon />,
        title: 'Email',
        content: (
            <Link href="mailto:sorsokny@gmail.com" className="text-muted-foreground">
                sorsokny@gmail.com
            </Link>
        ),
    },
    {
        icon: <Timer />,
        title: 'Live chat',
        content: <p className="text-muted-foreground">Mon-Fri from 8am to 5pm.</p>,
    },
    {
        icon: <MapPinIcon />,
        title: 'Address',
        content: <p className="text-muted-foreground">HW4P+78C, Preah Sisowath Quay, Phnom Penh 12301</p>,
    },
    {
        icon: <PhoneIcon />,
        title: 'Phone',
        content: (
            <Link href="tel:011783220" className="text-muted-foreground">
                011 783 220
            </Link>
        ),
    },
];

const Contact = () => (
    <div className="flex items-center justify-center pt-10 pb-10">
        <div className="mx-auto w-full max-w-7xl px-6 xl:px-0">
            <b className="text-sm font-semibold text-muted-foreground uppercase">Contact Us</b>
            <h2 className="mt-3 text-3xl font-semibold tracking-tighter md:text-4xl">We&apos;d love to hear from you</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">Our friendly team is always here to chat.</p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {contactItems.map((item) => (
                    <div
                        key={item.title}
                        className="flex flex-col items-start gap-3 rounded-lg border border-dashed bg-primary/1 p-4 transition-shadow transition-transform duration-300 ease-in-out hover:scale-105 hover:border-[#8b262b] hover:shadow-xl"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary dark:bg-primary/10">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-medium">{item.title}</h3>
                        <div>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Contact;
