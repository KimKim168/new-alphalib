import Layout from './Layout';
import { CategoryWithPosts } from './components/Cards/CategoryCard';
import Slide from './components/SlideShow/Slide';

const Index = () => {
    return (
        <Layout>
            <div className="bg-background lg:bg-muted">
                <Slide />
                <CategoryWithPosts />
            </div>
        </Layout>
    );
};

export default Index;
