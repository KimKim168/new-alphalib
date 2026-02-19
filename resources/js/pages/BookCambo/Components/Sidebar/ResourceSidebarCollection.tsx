import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/animate-ui/radix/accordion';
import ResourceSidebarListCollection from './ResourceSidebarListCollection';

export const categories = [
    { value: 'civil-engineering-and-architecture', label: 'សំណង់វិស្វកម្មសំណង់ស៊ីវិល' },
    { value: 'law-and-economics', label: 'សេដ្ឋកិច្ចនិងច្បាប់' },
    { value: 'mathematics', label: 'គណិតវិទ្យា' },
    { value: 'computer-science', label: 'វិទ្យាសាស្ត្រកុំព្យូទ័រ' },
    { value: 'tourism-and-hospitality', label: 'ទេសចរណ៍និងបដិសណ្ឋារកិច្ច' },
    { value: 'accounting-and-finance', label: 'គណនេយ្យនិងហិរញ្ញវត្ថុ' },
    { value: 'public-administration', label: 'រដ្ឋបាលសាធារណៈ' },
    { value: 'statistics', label: 'ស្ថិតិ' },
    { value: 'economics', label: 'សេដ្ឋកិច្ច' },
    { value: 'law', label: 'ច្បាប់' },
];


export default function ResourceSidebarCollection() {
    return (
        <Accordion type="multiple" defaultValue={['categories']} className="w-full rounded-lg xl:border overflow-hidden xl:border-primary px-0">
            <AccordionItem value="categories">
                <AccordionTrigger chevron={false} className="px-4 font-semibold">
                    Collections
                </AccordionTrigger>
                <AccordionContent className="px-2">
                    <ResourceSidebarListCollection limit={20} heading="All Categories" options={categories} />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
