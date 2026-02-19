import BookDetail from '../components/BookDetail';
import Hero2 from '../components/Hero2';
import RelatedSection from '../components/RelatedSection';
import ThnalLayout from '../ThnalLayout';

const ShowBook = () => {
    return (
        <ThnalLayout>
            <Hero2 />
            <div className='pb-10'>
                <section className="section-container pt-6">
                    <BookDetail />
                </section>
                <RelatedSection />
            </div>
        </ThnalLayout>
    );
};

export default ShowBook;
