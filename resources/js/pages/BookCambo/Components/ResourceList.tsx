import { cn } from '@/lib/utils';
import BookCardHoverGradient from './Card/BookCardHoverGradient';

export const data: any[] = [
    {
        name: 'Royal University of Law and Economics Library',
        subtitle: 'Preserves Cambodia’s literary heritage',
        sourceOfFunding: 'NGO',
        type: 'High School Library',
        image_url: '/assets/book_cambo/book1.jpg',
    },
    {
        name: 'Phnom Penh University Library',
        subtitle: 'Academic resources for higher education',
        image_url: '/assets/book_cambo/book2.jpg',
    },
    {
        name: 'Siem Reap Public Library',
        subtitle: 'Community learning hub',
        image_url: '/assets/book_cambo/book3.jpg',
    },
    {
        name: 'Battambang Provincial Library',
        subtitle: 'Educational resources for students',
        image_url: '/assets/book_cambo/book4.jpg',
    },
    {
        name: 'Kampot Community Library',
        subtitle: 'Local books and resources',
        image_url: '/assets/book_cambo/book5.jpg',
    },
    {
        name: 'Takeo High School Library',
        subtitle: 'Supporting school education',
        image_url: '/assets/book_cambo/book6.jpg',
    },
    {
        name: 'Kampot Community Library',
        subtitle: 'Local books and resources',
        image_url: '/assets/book_cambo/book2.jpg',
    },
    {
        name: 'Takeo High School Library',
        subtitle: 'Supporting school education',
        image_url: '/assets/book_cambo/book6.jpg',
    },
];
const ResourceList = ({ className }: { className?: string }) => {
    return (
        <>
            <div className={cn('grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6', className)}>
                {data.map((item, index) => (
                    <BookCardHoverGradient key={index} title={item.name} subTitle={item.subtitle} image_url={item.image_url} />
                ))}
            </div>
        </>
    );
};

export default ResourceList;
