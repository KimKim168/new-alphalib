import Hero from '@/components/LibraryService/Hero';
import LibraryServiceLayout from './LibraryServiceLayout';
import VideoSessions from '@/components/LibraryService/VideoSessions';
import ContentAndResource from '@/components/LibraryService/ContentAndResource';

const Index = () => {
    return (
        <LibraryServiceLayout>
            <Hero />
            <VideoSessions/>
            <ContentAndResource/>
        </LibraryServiceLayout>
    );
};

export default Index;
