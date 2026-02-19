import TextMiddleSeparator from '@/components/Separator/TextMiddleSeparator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LibraryInfo = ({ data }: { data: any }) => {
    return (
        <div className="space-y-8">
            {/* General Information */}
            <Card>
                <CardHeader>
                    <CardTitle>General Information</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <strong>Affiliated Institution:</strong> {data.affiliated_institution || '-'}
                    </div>
                    <div>
                        <strong>Source of Funding:</strong> {data.source_of_funding || '-'}
                    </div>
                    <div>
                        <strong>Library Type:</strong> {data.library_type || '-'}
                    </div>
                    <div>
                        <strong>Class:</strong> {data.class || '-'}
                    </div>
                    <div>
                        <strong>Province:</strong> {data.province || '-'}
                    </div>
                    <div>
                        <strong>Target Users:</strong> {data.target_users || '-'}
                    </div>
                    <div>
                        <strong>Age Groups:</strong> {data.age_groups || '-'}
                    </div>
                    <div>
                        <strong>Facebook:</strong> {data.facebook || '-'}
                    </div>
                    <div>
                        <strong>Website:</strong> {data.website || '-'}
                    </div>
                    <div>
                        <strong>Phone:</strong> {data.phone || '-'}
                    </div>
                    <div>
                        <strong>Email:</strong> {data.email || '-'}
                    </div>
                    <div>
                        <strong>Address:</strong> {data.address || '-'}
                    </div>
                </CardContent>
            </Card>

            {/* Statistics */}
            <Card className='hidden'>
                <CardHeader>
                    <CardTitle>Statistics</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <strong>Membership:</strong> {data.membership || '-'}
                    </div>
                    <div>
                        <strong>Partnership:</strong> {data.partnership || '-'}
                    </div>
                    <div>
                        <strong>Programs:</strong> {data.programs || '-'}
                    </div>
                    <div>
                        <strong>Annual Budget:</strong> {data.annual_budget || '-'}
                    </div>
                </CardContent>

                {/* Staff Statistics */}
                <TextMiddleSeparator title="Staff Statistics" />
                <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <strong>Full-time Staff:</strong> {data.full_time_staff || 0}
                    </div>
                    <div>
                        <strong>Part-time Staff:</strong> {data.part_time_staff || 0}
                    </div>
                    <div>
                        <strong>Volunteers/Interns:</strong> {data.volunteers || 0}
                    </div>
                    <div>
                        <strong>Physical Size (sqm):</strong> {data.physical_size || 0}
                    </div>
                </CardContent>

                {/* Facilities */}
                <TextMiddleSeparator title="Facilities" />
                <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <strong>Tables:</strong> {data.tables || 0}
                    </div>
                    <div>
                        <strong>Chairs:</strong> {data.chairs || 0}
                    </div>
                    <div>
                        <strong>Computers:</strong> {data.computers || 0}
                    </div>
                    <div>
                        <strong>Meeting Rooms:</strong> {data.meeting_rooms || 0}
                    </div>
                    <div>
                        <strong>Library System:</strong> {data.library_system || '-'}
                    </div>
                </CardContent>

                {/* Collections */}
                <TextMiddleSeparator title="Collections" />
                <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <strong>Monograph Titles:</strong> {data.monograph_titles || 0}
                    </div>
                    <div>
                        <strong>Monographs:</strong> {data.monographs || 0}
                    </div>
                    <div>
                        <strong>Serial Titles:</strong> {data.serial_titles || 0}
                    </div>
                    <div>
                        <strong>Article Databases:</strong> {data.article_databases || 0}
                    </div>
                </CardContent>

                {/* Usage */}
                <TextMiddleSeparator title="Usage Statistics" />
                <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <strong>Users:</strong> {data.users || 0}
                    </div>
                    <div>
                        <strong>Unique Users:</strong> {data.unique_users || 0}
                    </div>
                    <div>
                        <strong>Unique Borrowers:</strong> {data.unique_borrowers || 0}
                    </div>
                    <div>
                        <strong>Borrowed Materials:</strong> {data.borrowed || 0}
                    </div>
                    <div>
                        <strong>Used in Library:</strong> {data.used_in_library || 0}
                    </div>
                    <div>
                        <strong>Online Loaned:</strong> {data.online_loaned || 0}
                    </div>
                    <div>
                        <strong>Online Viewers:</strong> {data.online_viewers || 0}
                    </div>
                    <div>
                        <strong>Website Visitors:</strong> {data.website_visitors || 0}
                    </div>
                    <div>
                        <strong>Facebook Likes:</strong> {data.facebook_likes || 0}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default LibraryInfo;
