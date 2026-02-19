import ReadMoreBuddhist from './Buttons/ReadMoreBuddhist';
import { BuddhistSlide } from './SlideShow/BuddhistSlide';

const features = [
    {
        category: 'ព្រះពុទ្ធសាសនា',
        title: 'ពេលវេលាព្រះពុទ្ធសាសនា',
        details:
            'ពេលវេលាព្រះពុទ្ធសាសនាគឺការចងក្រងពេលវេលាដោយផ្អែកលើព្រះពុទ្ធកាល និងព្រឹត្តិការណ៍សំខាន់ៗក្នុងជីវិតពុទ្ធសាសនិក។ ព្រះសង្ឃ និងពុទ្ធសាសនិកប្រើពេលវេលានេះដើម្បីកំណត់ពេលអានធម៌ សូត្រមន្ត ការធ្វើបុណ្យ និងការសមាធិ។ វាជាឧបករណ៍ដ៏សំខាន់សម្រាប់ទម្រង់វប្បធម៌ និងសង្គមពុទ្ធសាសនិក ដែលជួយឲ្យមនុស្សរំលឹក និងអនុវត្តសេចក្តីល្អប្រចាំថ្ងៃ។',
        tutorialLink: '#',
        images: ['/assets/buddhist/buddhist2.jpg', '/assets/buddhist/buddhist3.jpg'],
    },
    {
        category: 'ព្រះធម៌',
        title: 'ថ្ងៃបូជា និងអធិដ្ឋាន',
        details:
            'ថ្ងៃ ៨ និង ១៥ រៀងរាល់ខែត្រូវបានគេចាត់ទុកថាជា "ថ្ងៃបូជា"។ នៅថ្ងៃនេះ ព្រះសង្ឃនិងពុទ្ធសាសនិកជាធម្មតាជួបប្រជុំគ្នានៅវត្តអារាម ដើម្បីស្តាប់ធម៌ សូត្រមន្ត និងសម្ភាសន៍អំពីព្រះធម៌។ មនុស្សជាច្រើនក៏អនុវត្តការរក្សាសីល បួស និងការចងចាំអំពីសេចក្តីល្អ។ ពេលវេលានេះក្លាយជាពេលនៃការចិញ្ចឹមទឹកចិត្ត ឲ្យមានសេចក្តីសុខ សន្តិភាព និងភាពរួមគ្នា។',
        tutorialLink: '#',
        images: ['/assets/buddhist/buddhist3.jpg', '/assets/buddhist/buddhist1.jpg'],
    },
    {
        category: 'ព្រះវិន័យ',
        title: 'ការប្រតិបត្តិ និងវិន័យ',
        details:
            'ព្រះសង្ឃគោរពតាមវិន័យ និងកាលកំណត់ពេលវេលាដ៏តឹងរ៉ឹង។ ពេលព្រឹកពួកគេប្រមូលអាហារដើម្បីប្រើប្រាស់ជាអាហារថ្ងៃតែមួយ។ ពេលល្ងាចពួកគេចូលរួមស្តាប់ធម៌ ឬសូត្រមន្តជាសហគមន៍។ ការទទួលយកវិន័យពេលវេលាដ៏មានច្បាប់នេះ ជួយអោយព្រះសង្ឃអភិវឌ្ឍកាយ វាចា ចិត្ត ឲ្យកាន់តែមានសុចរិត និងជឿជាក់។',
        tutorialLink: '#',
        images: ['/assets/buddhist/buddhist1.jpg', '/assets/buddhist/buddhist2.jpg'],
    },
    {
        category: 'វប្បធម៌',
        title: 'ពេលវេលានៃបុណ្យ',
        details:
            'ពេលវេលានៃបុណ្យគឺស្ថិតក្នុងប្រពៃណីវប្បធម៌ខ្មែរ និងព្រះពុទ្ធសាសនា។ ឧទាហរណ៍ បុណ្យចូលឆ្នាំខ្មែរ គេប្រើពេលវេលានេះដើម្បីអបអរសាទរឆ្នាំថ្មី និងធ្វើកុសល។ បុណ្យភ្ជុំបិណ្ឌ គឺពេលវេលាដ៏សំខាន់ក្នុងការរំលឹកដល់ពួកបុព្វបុរស និងធ្វើបុណ្យឲ្យពួកគេ។ បុណ្យវិសាខបូជា គឺការចងចាំព្រះកុសលធម៌ ព្រះសម្មាសម្ពុទ្ធ ដែលកើត ទទួលបានពុទ្ធភាព និងចូលពរនិព្វាន។ ពេលវេលានៃបុណ្យទាំងនេះជួយចងចាំសេចក្តីល្អ និងភាពរួមគ្នានៃសង្គម។',
        tutorialLink: '#',
        images: ['/assets/buddhist/buddhist2.jpg', '/assets/buddhist/buddhist3.jpg'],
    },
    {
        category: 'ការអប់រំ',
        title: 'ការយល់ដឹងអំពីពេលវេលា',
        details:
            'ការយល់ដឹងអំពីពេលវេលាព្រះពុទ្ធសាសនាជួយឲ្យយើងមានការត្រៀមខ្លួនប្រចាំថ្ងៃក្នុងការរក្សាសីល អនុវត្តសមាធិ និងការអភិវឌ្ឍផ្លូវចិត្ត។ ពេលវេលាមិនមែនត្រឹមតែការវាស់វែងនាទីនិងម៉ោងប៉ុណ្ណោះទេ ប៉ុន្តែវាគឺជាអ្នកណែនាំ ឲ្យយើងចងចាំអំពីការប្រព្រឹត្តសេចក្តីល្អ។ ពុទ្ធសាសនិកគោរពពេលវេលាដើម្បីបង្កើតវប្បធម៌នៃសេចក្តីសុខ សន្តិភាព និងសេចក្តីសុខសាន្តក្នុងចិត្ត។',
        tutorialLink: '#',
        images: ['/assets/buddhist/buddhist1.jpg', '/assets/buddhist/buddhist2.jpg'],
    },
];

const BuddhistTime = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-7xl px-6 py-10">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-pretty text-primary sm:mx-auto sm:max-w-xl sm:text-center md:text-2xl md:leading-[1.2] dark:text-[#fd1925]">
                    ពេលវេលាព្រះពុទ្ធសាសនា
                </h2>
                <p className="mt-2 text-lg text-muted-foreground sm:text-center sm:text-xl">
                    ពេលវេលាសម្រាប់ធម៌ ការបូជា និងការអនុវត្តសេចក្តីល្អក្នុងជីវិតប្រចាំថ្ងៃ។
                </p>
                <div className="mx-auto mt-8 w-full space-y-20 md:mt-16">
                    {features.map((feature) => (
                        <div key={feature.category} className="flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse">
                            {/* Slideshow */}
                            <div className="aspect-[4/3] w-full basis-1/2 overflow-hidden rounded-xl border border-border/50">
                                <BuddhistSlide images={feature.images} />
                            </div>

                            {/* Content */}
                            <div className="shrink-0 basis-1/2">
                                <h4 className="my-3 text-xl font-semibold tracking-tight text-primary dark:text-[#fd1925]">{feature.title}</h4>
                                <p className="leading-relaxed text-muted-foreground">{feature.details}</p>
                                <ReadMoreBuddhist link={feature.tutorialLink} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuddhistTime;
