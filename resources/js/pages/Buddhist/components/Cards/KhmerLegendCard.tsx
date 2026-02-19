import PerPage from '../Buttons/PerPage';
import PaginationTabs from '../Pagination/PaginationTabs';
import SearchButton from '../Search/SearchButton';
import { KhmerLegendHoverEffect } from '../ui/khmer-legend-card-hover-effect';

export function KhmerLegendCard() {
    return (
        <div className="mx-auto max-w-7xl py-5 px-4 md:py-10">
            <div className="mb-4 flex flex-col md:items-center justify-between gap-4 md:gap-6 sm:flex-row">
                <div className='flex items-center justify-between'>
                    <h1 className="text-xl font-medium text-primary dark:text-white">ប្រជុំរឿងព្រេងខ្មែរ</h1>
                    <div className=" block sm:hidden">
                        <PerPage />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="w-full md:w-[500px]">
                        <SearchButton />
                    </div>
                    <div className="hidden md:block">
                        <PerPage />
                    </div>
                </div>
            </div>
            <KhmerLegendHoverEffect items={projects} />
            <PaginationTabs />
        </div>
    );
}

export const projects = [
    {
        title: 'សៀវភៅព្រះពុទ្ធសាសនា',
        description: 'សៀវភៅនេះពិពណ៌នាពីចំណេះដឹង និងបំណងចិត្តក្នុងព្រះពុទ្ធសាសនា។',
        link: '#',
        image: '/assets/buddhist/books/book7.jpg',
    },
    {
        title: 'សៀវភៅប្រវត្តិសាស្ត្រកម្ពុជា',
        description: 'សៀវភៅនេះនាំអោយយើងស្វែងយល់អំពីប្រវត្តិសាស្ត្ររបស់ប្រទេសកម្ពុជា។',
        link: '#',
        image: '/assets/buddhist/books/book6.webp',
    },
    {
        title: 'សៀវភៅចិត្តវិជ្ជា',
        description: 'សៀវភៅនេះផ្តល់អំពីចំណេះដឹង និងវិធីសាស្ត្រកែលម្អចិត្ត និងអារម្មណ៍។',
        link: '#',
        image: '/assets/buddhist/books/book8.webp',
    },
    {
        title: 'សៀវភៅការអប់រំកុមារ',
        description: 'សៀវភៅនេះជួយបង្រៀនបុត្របុត្រីអំពីការអប់រំ និងទំនួលខុសត្រូវ។',
        link: '#',
        image: '/assets/buddhist/books/book4.jpg',
    },
    {
        title: 'សៀវភៅវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា',
        description: 'សៀវភៅនេះពិពណ៌នាអំពីចំណេះដឹងវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា។',
        link: '#',
        image: '/assets/buddhist/books/book5.jpg',
    },
    {
        title: 'សៀវភៅទំនៀមទម្លាប់ល្អ',
        description: 'សៀវភៅនេះផ្តល់អំពីទំនៀមទម្លាប់ល្អក្នុងជីវិតប្រចាំថ្ងៃ។',
        link: '#',
        image: '/assets/buddhist/books/book1.jpg',
    },
    {
        title: 'សៀវភៅប្រវត្តិសាស្ត្រកម្ពុជា',
        description: 'សៀវភៅនេះនាំអោយយើងស្វែងយល់អំពីប្រវត្តិសាស្ត្ររបស់ប្រទេសកម្ពុជា។',
        link: '#',
        image: '/assets/buddhist/books/book2.jpg',
    },
    {
        title: 'សៀវភៅចិត្តវិជ្ជា',
        description: 'សៀវភៅនេះផ្តល់អំពីចំណេះដឹង និងវិធីសាស្ត្រកែលម្អចិត្ត និងអារម្មណ៍។',
        link: '#',
        image: '/assets/buddhist/books/book3.jpg',
    },
    {
        title: 'សៀវភៅព្រះពុទ្ធសាសនា',
        description: 'សៀវភៅនេះពិពណ៌នាពីចំណេះដឹង និងបំណងចិត្តក្នុងព្រះពុទ្ធសាសនា។',
        link: '#',
        image: '/assets/buddhist/books/book1.jpg',
    },
    {
        title: 'សៀវភៅប្រវត្តិសាស្ត្រកម្ពុជា',
        description: 'សៀវភៅនេះនាំអោយយើងស្វែងយល់អំពីប្រវត្តិសាស្ត្ររបស់ប្រទេសកម្ពុជា។',
        link: '#',
        image: '/assets/buddhist/books/book2.jpg',
    },
    {
        title: 'សៀវភៅចិត្តវិជ្ជា',
        description: 'សៀវភៅនេះផ្តល់អំពីចំណេះដឹង និងវិធីសាស្ត្រកែលម្អចិត្ត និងអារម្មណ៍។',
        link: '#',
        image: '/assets/buddhist/books/book3.jpg',
    },
    {
        title: 'សៀវភៅការអប់រំកុមារ',
        description: 'សៀវភៅនេះជួយបង្រៀនបុត្របុត្រីអំពីការអប់រំ និងទំនួលខុសត្រូវ។',
        link: '#',
        image: '/assets/buddhist/books/book4.jpg',
    },
    {
        title: 'សៀវភៅវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា',
        description: 'សៀវភៅនេះពិពណ៌នាអំពីចំណេះដឹងវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា។',
        link: '#',
        image: '/assets/buddhist/books/book5.jpg',
    },
    {
        title: 'សៀវភៅទំនៀមទម្លាប់ល្អ',
        description: 'សៀវភៅនេះផ្តល់អំពីទំនៀមទម្លាប់ល្អក្នុងជីវិតប្រចាំថ្ងៃ។',
        link: '#',
        image: '/assets/buddhist/books/book1.jpg',
    },
    {
        title: 'សៀវភៅប្រវត្តិសាស្ត្រកម្ពុជា',
        description: 'សៀវភៅនេះនាំអោយយើងស្វែងយល់អំពីប្រវត្តិសាស្ត្ររបស់ប្រទេសកម្ពុជា។',
        link: '#',
        image: '/assets/buddhist/books/book2.jpg',
    },
    {
        title: 'សៀវភៅចិត្តវិជ្ជា',
        description: 'សៀវភៅនេះផ្តល់អំពីចំណេះដឹង និងវិធីសាស្ត្រកែលម្អចិត្ត និងអារម្មណ៍។',
        link: '#',
        image: '/assets/buddhist/books/book3.jpg',
    },
];
