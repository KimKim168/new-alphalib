import AvatarLogoFallback from '@/components/Avatar/AvatarLogoFallback';
import { Link, usePage } from '@inertiajs/react';
import { Mail, Phone } from 'lucide-react';
import BookCamboLayout from '../BookCamboLayout';
import PublisherSearch from '../Publishers/PublisherSearch';
import PublisherSortBySelect from '../Publishers/PublisherSortBySelect';

const PublisherList = () => {
    const { tableData,locale } = usePage<any>().props;
    
    return (
        <BookCamboLayout>
            <div className="section-container flex flex-col justify-center py-8 sm:pt-12 sm:pb-20">
                <b className="text-xl font-semibold text-muted-foreground uppercase">{locale === 'kh' ? 'Our publisher' : 'Our publisher'}</b>
                <p className="mt-1 text-base text-muted-foreground">{locale === 'kh' ? 'We&apos;re a 100% remote team spread all across the world. Join us!' : 'We&apos;re a 100% remote team spread all across the world. Join us!'}</p>
                <div className="flex items-center justify-center gap-4">
                    <div className="mt-4 flex-1">
                        <PublisherSortBySelect />
                    </div>
                    <div className="mt-4 w-full">
                        <PublisherSearch />
                    </div>
                </div>

                <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {tableData?.data?.map((member: any) => (
                        <Link
                            href={`/publishers/${member?.id}`}
                            key={member.library_data?.name}
                            className="transform cursor-pointer rounded-2xl border border-border bg-card p-5 shadow-md transition-transform hover:scale-105 hover:border-primary hover:shadow-xl"
                        >
                            <AvatarLogoFallback
                                className="size-16"
                                alt={member?.name}
                                image={
                                    member?.library_data?.logo
                                        ? `/assets/images/library_data/thumb/${member?.library_data?.logo}`
                                        : `/assets/images/users/thumb/${member?.image}`
                                }
                            />
                            {/* <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="h-28 w-28 transform rounded-full bg-secondary object-cover transition-transform hover:scale-110"
                            width={120}
                            height={120}
                        /> */}
                            <h3 className="mt-1 text-lg font-semibold transition-colors hover:text-primary">
                                {member.library_data?.name_of_library || member?.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{member.title}</p>

                            {/* Contact Info */}
                            <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                                <p className="flex items-center gap-2">
                                    <Phone size={16} /> {member.library_data?.phone || member?.phone}
                                </p>
                                <p className="flex items-center gap-2">
                                    <Mail size={16} /> {member.library_data?.email || member?.email}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </BookCamboLayout>
    );
};

export default PublisherList;
