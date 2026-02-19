import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/animate-ui/radix/accordion';
import ResourceSidebarList from './ResourceSidebarList';
import LibrarySidebarList from './LibrarySidebarList';
import LibrarySidebarPublisher from './LibrarySidebarPublisher';

export const categories = [
  {
    value: 'adult-fiction',
    label: 'Adult Fiction Books',
    subcategories: [
      { value: 'romance', label: 'Romance' },
      { value: 'investigation', label: 'Investigation' },
      { value: 'fantasy', label: 'Fantasy' },
      { value: 'horror-ghost', label: 'Horror & Ghost Stories' },
      { value: 'sci-fi', label: 'Science Fiction' },
      { value: 'historical-fiction', label: 'Historical Fiction' },
      { value: 'graphic-novels', label: 'Graphic Novels' },
      { value: 'poetry', label: 'Poetry' },
    ],
  },
  {
    value: 'adult-nonfiction',
    label: 'Adult Non-Fiction Books',
    subcategories: [
      { value: 'business-economics', label: 'Business and Economics' },
      { value: 'history', label: 'History' },
      { value: 'philosophy-psychology', label: 'Philosophy and Psychology' },
      { value: 'religion', label: 'Religion' },
      { value: 'politics-social-sciences', label: 'Politics and Social Sciences' },
      { value: 'education', label: 'Education' },
      { value: 'technology-science', label: 'Technology and Science' },
      { value: 'personal-development', label: 'Personal Development' },
      { value: 'health-wellness', label: 'Health and Wellness' },
      { value: 'crafts-hobbies', label: 'Crafts and Hobbies' },
      { value: 'cookbooks', label: 'Cookbooks' },
    ],
  },
  {
    value: 'children-fiction',
    label: "Children's Fiction Books",
    subcategories: [
      { value: 'picture-book', label: 'Picture Book' },
      { value: 'romance', label: 'Romance' },
      { value: 'investigation', label: 'Investigation' },
      { value: 'fantasy', label: 'Fantasy' },
      { value: 'horror-ghost', label: 'Horror & Ghost Stories' },
      { value: 'folklore', label: 'Folklore' },
      { value: 'sci-fi', label: 'Science Fiction' },
      { value: 'graphic-novels', label: 'Graphic Novels' },
      { value: 'poetry', label: 'Poetry' },
    ],
  },
  {
    value: 'children-nonfiction',
    label: "Children's Non-Fiction Books",
    subcategories: [
      { value: 'history', label: 'History' },
      { value: 'geography', label: 'Geography' },
      { value: 'philosophy-psychology', label: 'Philosophy and Psychology' },
      { value: 'religion', label: 'Religion' },
      { value: 'education', label: 'Education' },
      { value: 'technology-science', label: 'Technology and Science' },
    ],
  },
];

export const advisors = [
    { value: 'advisor-1', label: 'Dr. Sokha Phan' },
    { value: 'advisor-2', label: 'Prof. Dara Chhun' },
    { value: 'advisor-3', label: 'Mr. Vannak Kim' },
    { value: 'advisor-4', label: 'Mrs. Sreymom Chea' },
    { value: 'advisor-5', label: 'Dr. Bopha Seng' },
    { value: 'advisor-6', label: 'Mr. Ratana Ouk' },
    { value: 'advisor-7', label: 'Prof. Chanthy Lim' },
    { value: 'advisor-8', label: 'Mrs. Socheata Khiev' },
    { value: 'advisor-9', label: 'Dr. Piseth Khou' },
    { value: 'advisor-10', label: 'Mr. Virak Noun' },
    { value: 'advisor-11', label: 'Prof. Sovann Roeun' },
    { value: 'advisor-12', label: 'Mrs. Malis Men' },
];

export const publishers = [
    { value: 'publisher-1', label: 'Ms. Kim Soreya' },
    { value: 'publisher-2', label: 'Prof. Dara Chhun' },
    { value: 'publisher-3', label: 'Mr. Vannak Kim' },
    { value: 'publisher-4', label: 'Mrs. Sreymom Chea' },
    { value: 'publisher-5', label: 'Dr. Bopha Seng' },
    { value: 'publisher-6', label: 'Mr. Ratana Ouk' },
    { value: 'publisher-7', label: 'Prof. Chanthy Lim' },
    { value: 'publisher-8', label: 'Mrs. Socheata Khiev' },
    { value: 'publisher-9', label: 'Dr. Piseth Khou' },
    { value: 'publisher-10', label: 'Mr. Virak Noun' },
    { value: 'publisher-11', label: 'Prof. Sovann Roeun' },
    { value: 'publisher-12', label: 'Mrs. Malis Men' },
];
export const format = [
    { value: 'Paperback', label: 'Paperback' },
    { value: 'Hardback', label: 'Hardback' },
];

export default function ResourceSidebar() {
    return (
        <Accordion type="multiple" defaultValue={['categories', 'advisors','publishers','format']} className="w-full rounded-lg  overflow-hidden px-0">
            <AccordionItem value="categories">
                <AccordionTrigger chevron={false} className="px-4 font-semibold">
                    Categories
                </AccordionTrigger>
                <AccordionContent className="px-2">
                    <ResourceSidebarList limit={20} heading="All Categories" options={categories} />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="advisors">
                <AccordionTrigger chevron={true} className="px-4 font-semibold">
                    Authers
                </AccordionTrigger>
                <AccordionContent className="px-2">
                    <LibrarySidebarList heading="All Authers" options={advisors} />
                </AccordionContent>
            </AccordionItem>
             <AccordionItem value="format">
                <AccordionTrigger chevron={true} className="px-4 font-semibold">
                    Format
                </AccordionTrigger>
                <AccordionContent className="px-2">
                    <LibrarySidebarPublisher heading="All format" options={format} />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="publishers">
                <AccordionTrigger chevron={true} className="px-4 font-semibold">
                    Publisher
                </AccordionTrigger>
                <AccordionContent className="px-2">
                    <LibrarySidebarPublisher heading="All Publishers" options={publishers} />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
