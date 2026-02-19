import BookCamboLayout from '../BookCamboLayout';

const Index = () => {
    const libraryInfo = {
        name: "RULE E-Library",
        description:
            "RULE E-Library is dedicated to providing accessible resources to students and the community. Our collection includes books, journals, digital resources, and multimedia content to support learning and research.",
        address: "123 Knowledge Street, Phnom Penh, Cambodia",
        phone: "+855 12 345 678",
        email: "contact@rulelibrary.com",
        hours: [
            { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
            { day: "Saturday", time: "9:00 AM - 4:00 PM" },
            { day: "Sunday", time: "Closed" },
        ],
    };
    return (
        <BookCamboLayout>
            <div className="mt-3 md:mt-8 max-w-screen-2xl px-3 sm:px-10 xl:px-20">
                <div className="aspect-[21/8] overflow-hidden rounded">
                    <img
                        src="https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8="
                        alt="Library Banner"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Information Section */}
                <div className="mt-10 grid gap-8 md:grid-cols-1">
                    {/* Description */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">{libraryInfo.name}</h2>
                        <p className="text-gray-700">{libraryInfo.description}</p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Contact Information</h3>
                        <p><span className="font-medium">Address:</span> {libraryInfo.address}</p>
                        <p><span className="font-medium">Phone:</span> {libraryInfo.phone}</p>
                        <p><span className="font-medium">Email:</span> {libraryInfo.email}</p>

                        <div>
                            <h3 className="text-xl font-semibold mt-4 mb-2">Opening Hours</h3>
                            <ul className="text-gray-700">
                                {libraryInfo.hours.map((hour, index) => (
                                    <li key={index}>
                                        <span className="font-medium">{hour.day}:</span> {hour.time}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </BookCamboLayout>
    );
};

export default Index;
