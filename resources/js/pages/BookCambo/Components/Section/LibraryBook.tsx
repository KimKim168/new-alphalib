import React from 'react';
import PaginationTabs from '../Pagination/PaginationTabs';
import ResourceSidebar from '../Sidebar/ResourceSidebar';

interface CategoryItem {
    id: string;
    imageUrl: string;
}

interface CategoryProps {
    id: string;
    name: string;
    items: CategoryItem[];
}

const LibraryBook: React.FC = () => {
    const categoriesWithItems: CategoryProps[] = [
        {
            id: 'newArrived',
            name: 'New Arrived',
            items: [
                { id: '1', imageUrl: 'book1.jpg' },
                { id: '2', imageUrl: 'book2.jpg' },
                { id: '3', imageUrl: 'book3.jpg' },
            ],
        },
        {
            id: 'law',
            name: 'Law',
            items: [
                { id: '4', imageUrl: 'book4.jpg' },
                { id: '5', imageUrl: 'book5.jpg' },
                { id: '1', imageUrl: 'book1.jpg' },
                { id: '2', imageUrl: 'book2.jpg' },
                { id: '3', imageUrl: 'book3.jpg' },
            ],
        },
    ];
    return (
        <>
            <div className="sticky bg-background">
                
                <div className="w-full md:flex-1 xl:flex gap-4">
                    <div>
                        <div className="mb-10 w-full grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8">
                        {categoriesWithItems.map((category) =>
                            category.items.map((book) => (
                                <a
                                    key={book.id}
                                    href={`/detail/${book.id}`}
                                    className="group relative w-full overflow-hidden shadow-lg shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-300/50 dark:bg-black dark:shadow-black/20 dark:hover:border-gray-700 dark:hover:shadow-black/40"
                                >
                                    <img src={`/assets/book_cambo/${book.imageUrl}`} className="aspect-[6/9] h-auto w-full object-cover" alt="" />
                                </a>
                            )),
                        )}
                    </div>
                    <PaginationTabs />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LibraryBook;
