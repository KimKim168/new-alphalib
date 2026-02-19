import RelatedItemCard from './RelatedItemCard';

const relatedTheses = [
    {
        title: 'ការអភិវឌ្ឍជនបទតាមរយៈការរួមចំណែករបស់ចលនាភូមិថ្មី',
        imageUrl: 'https://rule-library.com/assets/images/items/thumb/Thesis2018 (20).webp',
        href: '/resources/theses/271',
    },
    {
        title: 'ការគ្រប់គ្រងការនាំចេញអង្ករទៅប្រទេសចិនរបស់ក្រុមហ៊ុន នីកូលីន អ៊ិនវេសមេន',
        imageUrl: 'https://rule-library.com/assets/images/items/thumb/Report2018 (6).webp',
        href: '/resources/theses/320',
    },
    {
        title: 'ប្រសិទ្ធភាពនៃការអប់រំករណីអង្គការដើម្បីភាពញញឹមនៃកុមារ',
        imageUrl: 'https://rule-library.com/assets/images/items/thumb/2017Thesis_Page_115.webp',
        href: '/resources/theses/206',
    },
    {
        title: 'ការអភិវឌ្ឍវិស័យកសិកម្មរបស់សហគមន៍កសិកម្មភ្នំដិនសែនសុខ',
        imageUrl: 'https://rule-library.com/assets/images/items/thumb/Eco2020 (12).webp',
        href: '/resources/theses/574',
    },
    {
        title: 'យុទ្ធសាស្ត្រនៃការផ្សព្វផ្សាយរបស់ក្រុមហ៊ុន អ អិម អេ ខេមបូឌា គ្រុប ទៅលើត្រាក់ទ័រ ចន ឌារ',
        imageUrl: 'https://rule-library.com/assets/images/items/thumb/2017Thesis_Page_129.webp',
        href: '/resources/theses/220',
    },
    {
        title: 'ការបណ្តុះបណ្តាលជំនាញសម្រាប់កុមារ និងយុវជន (អង្គការពង្រឹងយុវជនកម្ពុជា)',
        imageUrl: 'https://rule-library.com/assets/images/items/thumb/Thesis25 (167).webp',
        href: '/resources/theses/4321',
    },
    {
        title: 'យុទ្ធសាស្រ្តនៃការលក់សេវាកម្មឥណទាន',
        imageUrl: 'https://rule-library.com/assets/images/items/thumb/2017Thesis_Page_132.webp',
        href: '/resources/theses/223',
    },
    {
        title: 'ទីផ្សារមូលបត្រ ឱកាសវិនិយោគនិងបញ្ហាប្រឈម',
        imageUrl: 'https://rule-library.com/assets/images/items/thumb/2017Thesis_Page_097.webp',
        href: '/resources/theses/188',
    },
    {
        title: 'ការជំរុញលើកទឹកចិត្តបុគ្គលិករបស់ក្រុមហ៊ុន ដឹ ភីហ្សា ខមផេនី',
        imageUrl: 'https://rule-library.com/assets/images/items/thumb/Report2018 (20).webp',
        href: '/resources/theses/334',
    },
    {
        title: 'ការជំរុញលើកទឹកចិត្តបុគ្គលិករបស់ក្រុមហ៊ុន ដឹ ភីហ្សា ខមផេនី',
        imageUrl: 'https://rule-library.com/assets/images/items/thumb/Report2018 (20).webp',
        href: '/resources/theses/334',
    },
];
const RelatedSection = ({ categoryName = 'Development Economics', categoryUrl = '#' }) => {
    return (
        <section className="mt-20 mb-20">
            <div className="section-container mt-8 px-4">
                {/* Header with animated underline */}
                <div className="mb-6">
                    <a className="group relative inline-flex items-center gap-2" href={categoryUrl}>
                        <div className="flex flex-col">
                            <p className="text-2xl font-bold tracking-tight md:text-3xl">Related</p>
                            <div className="h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></div>
                        </div>
                        <div className="flex items-center justify-center rounded-full bg-muted p-1 text-primary transition-all duration-300 group-hover:translate-x-2 group-hover:bg-primary group-hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-4"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </div>
                    </a>
                </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {relatedTheses.map((item: any, index) => (
                        <RelatedItemCard key={index} title={item.title} imageUrl={item.imageUrl} href={`#`} />
                    ))}

                    {/* "See More" Call to Action Card */}
                    {/* <div className="relative z-10 flex h-full min-h-[160px] w-full items-center justify-center overflow-hidden rounded-md border-2 border-dashed border-muted-foreground/30 bg-muted/5 shadow dark:border-border">
                        <a href={categoryUrl} className="group flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-primary underline underline-offset-4">See More</span>
                                <div className="flex size-8 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:scale-110">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="size-4"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default RelatedSection;
