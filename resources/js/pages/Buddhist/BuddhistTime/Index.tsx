import Layout from '../Layout';
import BuddhistTime from '../components/BuddhistTime';
import ShapeDivider from '../components/ShapeDivider';

const Index = () => {
    return (
        <Layout>
            <div className="relative">
                <img src="/assets/buddhist/buddhist1.jpg" className=" md:h-[500px] w-full object-cover" />
                <ShapeDivider />
            </div>
            <BuddhistTime/>
        </Layout>
    );
};

export default Index;
