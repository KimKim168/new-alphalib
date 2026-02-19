import { Facebook, Globe, Mail, MessageCircle, Phone } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';

const BookDetail = ({
    title = 'The treatise on laws : (Decretum DD. 1-20)',
    subTitle = 'GRATIAN THE TREATISE ON LAWS THE ORDINARY GLOSS',
    imageUrl = 'https://coverart.oclc.org/ImageWebSvc/oclc/+-+989842613_140.jpg?allowDefault=false&client=WorldcatOrgUI',
    authors = 'Gratian, Augustine Thompson, James Gordley, Katherine Christensen',
    publisher = 'Catholic University of America Press, Washington, D.C.',
    description = 'The first twenty distinctions, translated here, comprise a treatise on law in general and contain a discussion of the nature of law, voluntary action, and the...',
    language = 'English',
    year = '1993',
    format = 'eBook',
    fileId = 'gratian-001',
    category = 'Law',
    categoryCode = 'law',
    profileName = 'Ouen Uy',
    profileRole = 'Librarian Specialist',
    profileAvatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ouen',
}) => {
    const fileName = `Treatise_on_Laws.pdf`;
    // Note: Use viewUrl and downloadUrl in your buttons/links
    const viewUrl = `/view-pdf?file_name=${encodeURIComponent(fileName)}&id=${fileId}&resource=items`;

    return (
        <div className="flex-wrap gap-6 sm:flex">
            {/* Thumbnail */}
            <div className="sm:max-w-sm sm:min-w-xs">
                <div className="flex items-center justify-center">
                    <div className="flex w-full flex-col items-center">
                        <img
                            alt={title}
                            className="aspect-auto max-h-[800px] w-full cursor-pointer rounded-none border border-primary object-cover sm:max-w-sm"
                            src={imageUrl}
                        />
                    </div>
                </div>
                {/* <div className="mt-4 flex gap-2">
                    <a href={viewUrl} className="flex-1 rounded bg-primary py-2 text-center text-white transition-opacity hover:opacity-90">
                        Read {format}
                    </a>
                </div> */}
            </div>

            {/* Metadata Section */}
            <div className="w-full flex-1 sm:w-auto">
                <div className="mb-2">
                    <h1 className="text-2xl font-medium">{title}</h1>
                </div>

                <div className="mt-3 max-w-full space-y-2">
                    {/* Authors Row */}
                    <div className="flex items-start justify-start gap-4 pb-1">
                        <span className="w-[120px] shrink-0 border-r border-gray-200">Authors</span>
                        <span className="font-medium">{authors}</span>
                    </div>

                    {/* Publisher Row */}
                    <div className="flex items-start justify-start gap-4 pb-1">
                        <span className="w-[120px] shrink-0 border-r border-gray-200">Publisher</span>
                        <span className="">{publisher}</span>
                    </div>

                    {/* Language/Format Row */}
                    <div className="flex items-center justify-start gap-4 pb-1">
                        <span className="w-[120px] shrink-0 border-r border-gray-200">Language</span>
                        <div className="flex gap-2">
                            <span>{language}</span>
                            <span className="text-gray-300">|</span>
                            <span>{format}</span>
                        </div>
                    </div>

                    {/* Year Row */}
                    <div className="flex items-center justify-start gap-4 pb-1">
                        <span className="w-[120px] shrink-0 border-r border-gray-200">Year</span>
                        <span className="text-primary underline-offset-4 hover:underline">{year}</span>
                    </div>

                    <div className="space-y-6">
                        {/* Description Card */}
                        <div className="rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
                            <h3 className="mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">Description</h3>
                            <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-100">{description}</p>
                        </div>

                        {/* Contact Card */}
                        <div className="rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
                            <h3 className="mb-3 text-sm font-bold text-gray-700 dark:text-gray-200">
                                This resource can be found at your library or contact us via:
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {/* Website */}
                                <a
                                    href="https://librarywebsite.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-xs font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300"
                                >
                                    <Globe size={18} />
                                    Website
                                </a>

                                {/* Phone */}
                                <a
                                    href="tel:+85512345678"
                                    className="flex items-center gap-2 text-xs font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300"
                                >
                                    <Phone size={18} />
                                    +855 12 345 678
                                </a>

                                {/* Facebook */}
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-xs font-medium text-gray-600 transition-colors hover:text-[#1877F2] dark:text-gray-300"
                                >
                                    <Facebook size={18} />
                                    Facebook
                                </a>

                                {/* Telegram */}
                                <a
                                    href="https://t.me/username"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-xs font-medium text-gray-600 transition-colors hover:text-[#26A5E4] dark:text-gray-300"
                                >
                                    <FaTelegramPlane size={18}/>
                                    Telegram
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:info@library.com"
                                    className="flex items-center gap-2 text-xs font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300"
                                >
                                    <Mail size={18} />
                                    Email
                                </a>
                            </div>
                        </div>

                        {/* Profile Card */}
                        <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img
                                        src={profileAvatar}
                                        alt={profileName}
                                        className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-sm"
                                    />
                                    <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">{profileName}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{profileRole}</p>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white transition-all hover:bg-primary/90 active:scale-95 dark:text-black">
                                <MessageCircle size={14} />
                                Chat
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
