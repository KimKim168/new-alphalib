import ReadMoreBuddhist from './Buttons/ReadMoreBuddhist';
import { BuddhistSlide } from './SlideShow/BuddhistSlide';

const features = [
    {
        category: 'បណ្ណាល័យសៀវភៅ និងធនធានការអប់រំទាន់សម័យ',
        title: 'សៀវភៅថ្មីៗ និងប្រភេទផ្សេងៗ',
        details:
            'បណ្ណាល័យនេះផ្តល់ជូននូវសៀវភៅថ្មីៗ គ្រប់ប្រភេទ និងធនធានអប់រំដល់អ្នកអានទាំងអស់។ អ្នកអាចស្វែងរកសៀវភៅដែលចង់អាន តាមប្រភេទ ប្រធានបទ ឬអ្នកនិពន្ធ។ ការស្វែងរក និងយកសៀវភៅអានកាន់តែងាយស្រួលជាមួយប្រព័ន្ធស្វ័យប្រវត្តិនិងផែនទីបណ្ណាល័យ។',
        tutorialLink: '#',
        images: ['/assets/buddhist/books/book4.jpg', '/assets/buddhist/books/book1.jpg', '/assets/buddhist/books/book3.jpg'],
    },
    {
        category: 'ការគ្រប់គ្រងការស្វែងយល់ និងប្រតិបត្តិការអានសៀវភៅ',
        title: 'រៀបចំការស្វែងយល់ និងអានសៀវភៅ',
        details:
            'អ្នកអាចរៀបចំបញ្ជីសៀវភៅដែលចង់អាន កំណត់កាលបរិច្ឆេទអាន និងតាមដានចំនួនសៀវភៅដែលបានអាន។ ប្រព័ន្ធនេះផ្តល់ការណែនាំដល់អ្នកអាន និងការព្រមានពេលវេលាអានសៀវភៅ ដើម្បីធានាថាអ្នកអាចទទួលបានបទពិសោធន៍អានសៀវភៅល្អប្រសើរជាងមុន។',
        tutorialLink: '#',
        images: ['/assets/buddhist/books/book1.jpg', '/assets/buddhist/books/book1-1.jpg'],
    },
    {
        category: 'ការគាំទ្រអតិថិជន និងការណែនាំសៀវភៅ',
        title: 'ជួយស្វែងរកសៀវភៅបានលឿន',
        details:
            'ប្រព័ន្ធបណ្ណាល័យនេះផ្តល់ជំនួយដល់អ្នកអានក្នុងការស្វែងរកសៀវភៅដោយឆាប់រហ័ស។ អ្នកអាចសួរបណ្ណករ ស្វែងរកតាមប្រភេទសៀវភៅ ឬប្រើប្រព័ន្ធស្វ័យប្រវត្តិដើម្បីទទួលបានការណែនាំ និងព័ត៌មានលម្អិតអំពីសៀវភៅដែលមាននៅក្នុងបណ្ណាល័យ។',
        tutorialLink: '#',
        images: ['/assets/buddhist/books/book3.jpg', '/assets/buddhist/books/book3-1.jpg'],
    },
    {
        category: 'សហការជាក្រុម និងចែករំលែកចំណេះដឹង',
        title: 'ចែករំលែកចំណេះដឹងជាមួយអ្នកអានផ្សេងទៀត',
        details:
            'ចូលរួមក្នុងសកម្មភាពក្រុមសម្រាប់អ្នកអាន ជួបជុំពិភាក្សា និងបែកញែកចំណេះដឹងពីសៀវភៅ។ អ្នកអានអាចរៀបចំព្រឹត្តិការណ៍សៀវភៅ ក្លឹបអានសៀវភៅ និងកិច្ចប្រជុំផ្សេងៗ ដែលជួយឱ្យមានការសហការនិងការពង្រីកចំណេះដឹងជាក្រុម។',
        tutorialLink: '#',
        images: ['/assets/buddhist/books/book2.jpg', '/assets/buddhist/books/book2-1.jpg'],
    },
    {
        category: 'ការអភិវឌ្ឍចំណេះដឹង និងការស្វែងរកព័ត៌មានថ្មីៗ',
        title: 'ពង្រីកចំណេះដឹងរបស់អ្នក',
        details:
            'បណ្ណាល័យនេះផ្តល់នូវឯកសារ សៀវភៅអនុស្សាវរីយ៍ និងធនធានផ្សេងៗ ដើម្បីពង្រីកចំណេះដឹង និងការយល់ដឹងរបស់អ្នក អាចស្វែងយល់ពីប្រវត្តិសាស្រ្ត វិទ្យាសាស្រ្ត ការប្រឹក្សាអាជីព និងវិស័យផ្សេងៗ ដោយទាន់សម័យ។',
        tutorialLink: '#',
        images: ['/assets/buddhist/books/book5.jpg', '/assets/buddhist/books/book5-1.jpg'],
    },
];

const Library = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
            <div className="w-full max-w-7xl px-4 py-5 md:py-10">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-pretty text-primary dark:text-[#fd1925] sm:mx-auto sm:max-w-xl sm:text-center md:text-2xl md:leading-[1.2]">
                    បណ្ណាល័យឆ្លាតវៃសម្រាប់អ្នកអាន
                </h2>
                <p className="mt-2 text-lg text-muted-foreground sm:text-center sm:text-xl">ស្វែងរកសៀវភៅថ្មីៗ និងធនធានអប់រំដល់អ្នកអានដោយងាយស្រួល</p>
                <div className="mt-5 space-y-20 md:mt-10">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-8 md:flex-row md:even:flex-row-reverse">
                            {/* Images */}
                            <BuddhistSlide images={feature.images} />
                            {/* Text Content */}
                            <div className="shrink-0 md:basis-1/2">
                                <h4 className="mb-3 text-xl font-semibold text-primary dark:text-[#fd1925]">{feature.title}</h4>
                                <p className="mb-4 text-muted-foreground">{feature.details}</p>
                                <ReadMoreBuddhist link={'/detail/1'} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Library;
