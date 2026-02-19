import BookCamboLayout from './BookCamboLayout';
import MyBookCard from './Components/BookCard';
import PostCarousel from './Components/PostCarousel';
import CamboSearch from './Components/Search/CamboSearch';

const ResourcesPage = () => {
    return (
        <BookCamboLayout>
            <CamboSearch />
            <div className='section-container mt-4'>
                <PostCarousel />
            </div>
            <MyBookCard />
        </BookCamboLayout>
    );
};

export default ResourcesPage;
