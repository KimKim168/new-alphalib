import { Link, usePage } from '@inertiajs/react';
import BanalaiLayout from './Layout';

const imgBgColors = [
    '#4f46e5',
    'linear-gradient(141deg,#facc15,#f8c913,#f6c612,#f4c310,#f2c00f)',
    'linear-gradient(141deg,#22c55e,#21c15c,#1fbd59,#1eb857,#1cb454)',
];

const Support = () => {
    const { supportData } = usePage<any>().props;

    return (
        <BanalaiLayout>
            <section className="bg-white px-4 pt-32 pb-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">{supportData?.name}</h1>
                        <p className="mx-auto max-w-2xl text-xl text-gray-600">{supportData?.short_description}</p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {supportData?.children?.map((service, index) => (
                            <Link
                                key={service?.id}
                                href={`/support/${service?.id}`}
                                className="rounded-xl border border-gray-100 p-8 shadow-md transition-shadow hover:shadow-xl"
                            >
                                {/* Icon */}
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg">
                                    {service?.icon && (
                                        <img
                                            src={`/assets/images/pages/${service?.icon}`}
                                            alt={service?.name}
                                            className="h-full w-full rounded-lg object-contain"
                                        />
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="mb-4 text-2xl font-semibold text-gray-900">{service?.name}</h3>

                                {/* Short description */}
                                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: service?.short_description }} />

                                {/* Long description (CKEditor HTML) */}
                                {service?.long_description && (
                                    <div
                                        className="prose line-clamp-6 max-h-[7.5em] max-w-none prose-p:my-0"
                                        dangerouslySetInnerHTML={{ __html: service?.long_description }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </BanalaiLayout>
    );
};

export default Support;
