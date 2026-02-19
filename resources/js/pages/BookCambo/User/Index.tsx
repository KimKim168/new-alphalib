import React from 'react'
import BookCamboLayout from '../BookCamboLayout'
import { MailIcon, SmartphoneIcon } from 'lucide-react';
import { Tabs,TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';
import LibraryInfo from '../Components/Section/LibraryInfo';
import LibraryBook from '../Components/Section/LibraryBook';

const Index = () => {
    const data = {
    library_name: 'My Library Name',
    affiliated_institution: 'Central City University',
    source_of_funding: 'Government + Donations',
    library_type: 'Public Academic',
    class: 'A',
    province: 'Central Province',
    target_users: 'Students, Researchers, Public',
    age_groups: 'All ages',
    facebook: 'CentralCityLibrary',
    website: 'https://www.centralcitylibrary.org',
    phone: '+1 234 567 890',
    email: 'info@centralcitylibrary.org',
    address: '123 Main Street, Central City',
    membership: '10,000 members',
    partnership: 'National Library Association',
    programs: 'Reading Clubs, Workshops, Exhibitions',
    annual_budget: '$500,000',
    full_time_staff: 20,
    part_time_staff: 15,
    volunteers: 10,
    physical_size: 1500, // in sqm
    tables: 50,
    chairs: 200,
    computers: 40,
    meeting_rooms: 5,
    library_system: 'Koha',
    monograph_titles: 12000,
    monographs: 15000,
    serial_titles: 350,
    article_databases: 25,
    users: 20000,
    unique_users: 15000,
    unique_borrowers: 8000,
    borrowed: 5000,
    used_in_library: 12000,
    online_loaned: 2000,
    online_viewers: 3000,
    website_visitors: 10000,
    facebook_likes: 8000,
};

  return (
   <BookCamboLayout>
        <div className="section-container relative rounded outline-hidden mt-2">
                {/* Banner Image */}
                <div className="aspect-[21/5] overflow-hidden rounded">
                    <img src="/assets/sample_images/banners/library_banner.jpg" alt="Library Banner" className="h-full w-full object-cover" />
                </div>

                <div className="bottom-0 left-0 flex gap-4 rounded pt-6 md:p-6 text-foreground md:absolute md:right-0 md:mx-4 md:bg-gradient-to-t md:from-black/70 md:to-transparent md:pt-20 md:text-white">
                    <img
                        src="/assets/book_cambo/seller.png"
                        alt="Library Logo"
                        className="size-20 rounded-full border-4 border-white object-cover shadow md:size-24"
                    />
                    {/* Info */}
                    <div className="space-y-1 text-left text-sm md:space-y-2 md:text-base">
                        <h1 className="text-lg font-bold md:text-2xl">{data.library_name || 'Library Name'}</h1>
                        {data.phone && (
                            <p className="flex items-center gap-2">
                                <SmartphoneIcon size={18} /> {data.phone}
                            </p>
                        )}
                        {data.email && (
                            <p className="flex items-center gap-2">
                                <MailIcon size={18} /> {data.email}
                            </p>
                        )}
                    </div>
                </div>
        </div>
        <div className="section-container mb-20">
                <Tabs defaultValue="about" className="w-full">
                    <TabsList className="my-6 w-full justify-start rounded-none border-b bg-background p-0">
                        <TabsTrigger
                            value="about"
                            className="h-full rounded-none border-b-2 border-transparent bg-background text-lg data-[state=active]:border-primary data-[state=active]:shadow-none"
                        >
                            Books
                        </TabsTrigger>
                        <TabsTrigger
                            value="infos"
                            className="h-full rounded-none border-b-2 border-transparent bg-background text-lg data-[state=active]:border-primary data-[state=active]:shadow-none"
                        >
                            Infos
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="about">
                        <LibraryBook />
                    </TabsContent>
                    <TabsContent value="infos">
                        <LibraryInfo data={data} />
                    </TabsContent>
                </Tabs>
            </div>
   </BookCamboLayout>
  )
}

export default Index
