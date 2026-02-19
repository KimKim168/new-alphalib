import BookCamboLayout from '../BookCamboLayout';
import { FilterButton } from '../Components/Button/FilterButton';
import PaginationTabs from '../Components/Pagination/PaginationTabs';
import SearchDetial from '../Components/Search/SearchDetail';
import ResourceSidebar from '../Components/Sidebar/ResourceSidebar';
import SortCharacter from '../Components/SortCharacter';
// import CategorySidebar from './components/my-category-sidebar';

interface CategoryItem {
    id: string;
    imageUrl: string;
}

interface CategoryProps {
    id: string;
    name: string;
    items: CategoryItem[];
}

const Index = () => {
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
        <BookCamboLayout>
            <SearchDetial />
            <div className="mx-auto mt-6 flex max-w-screen-2xl px-4 sm:px-10 md:gap-8 xl:px-20">
                <div className="hidden md:w-64 xl:block">
                    <ResourceSidebar />
                </div>
                <div className="w-full md:flex-1">
                    <div className="mb-4 flex items-center justify-between border-b-4 border-[#104674] pb-2">
                        <div className="text-xl font-bold dark:text-white text-gray-900 sm:text-xl lg:text-xl">All books</div>
                        <div className='flex items-center gap-4 xl:gap-0'>
                            <SortCharacter />
                            <div><FilterButton /></div>
                        </div>
                    </div>

                    <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-8 xl:grid-cols-8">
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
        </BookCamboLayout>
    );
};

export default Index;
