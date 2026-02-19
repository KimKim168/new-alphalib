import useTranslation from "@/hooks/use-translation";
import { usePage } from "@inertiajs/react";

const PricingPlans = () => {
    const { pricingtData } = usePage<any>().props;
     const { currentLocale } = useTranslation();
// Helper to convert code to readable text
const formatCode = (code) => {
    if (!code) return "";
    // Replace hyphens/underscores with spaces, capitalize each word
    return code
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
};

    return (
        <section className="background: linear-gradient(79deg, #f9fafb,#f8fafc,#f7f9fc,#f5f9fd,#f4f8fd,#f3f8fe,#f2f7fe,#f0f7ff,#eff6ff); px-4 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">{currentLocale === 'kh' ? pricingtData?.name_kh || pricingtData?.name : pricingtData?.name}</h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">{currentLocale === 'kh' ? pricingtData?.short_description_kh || pricingtData?.short_description : pricingtData?.short_description}</p>
                </div>

                {/* Pricing Cards */}
                <div className="mb-8 md:mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {pricingtData?.children?.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-xl border-2 p-8 shadow-md ${
                                plan.name === "Cloud Subscription" ? "relative scale-105 border-indigo-600 shadow-xl" : "border-gray-200 bg-white"
                            }`}
                        >
                            {/* Recommended Badge */}
                            {/* {plan.name === "Cloud Subscription" && (
                                <div className="absolute top-0 right-0 rounded-tr-xl rounded-bl-lg bg-[linear-gradient(79deg,#facc15,#f8c913,#f6c612,#f4c310,#f2c00f,#f0bc0d,#eeb90b,#ecb60a,#eab308)] px-4 py-1 text-sm font-semibold text-gray-900">
                                    Recommended
                                </div>
                            )} */}

                            {/* Plan Title & Price */}
                            {/* <div className="mb-8 text-center">
                                <h3 className="mb-2 text-2xl font-semibold text-gray-900">{formatCode(plan.code)}</h3>
                                {plan.short_description && (
                                    <div className="mb-2 text-4xl font-bold text-gray-900 whitespace-pre-line">
                                        {plan.short_description}
                                    </div>
                                )}
                            </div> */}

                            {/* Features from CKEditor HTML */}
                            <div
                                className="mb-8 text-gray-600 prose"
                                dangerouslySetInnerHTML={{ __html: currentLocale === 'kh' ? plan?.long_description_kh || plan?.long_description : plan?.long_description }}
                            />

                            {/* Action Button */}
                            {plan.button_title && (
                                <a
                                    href={plan.link}
                                    className={`block w-full rounded-lg px-6 py-3 text-center font-semibold transition-all ${
                                        plan.name === "Cloud Subscription"
                                            ? "bg-[linear-gradient(79deg,#22c55e,#21c15c,#1fbd59,#1eb857,#1cb454,#1bb052,#19ac4a,#18a74d,#16a34a)] text-white shandow-lg transition-all hover:-translate-y-0.5 hover:bg-[linear-gradient(79deg,#17a64b,#16a249,#159d46,#139944,#129442,#11903f,#108b3d,#0e873a,#0d8238)] hover:shadow-xl"
                                            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                    }`}
                                >
                                    {currentLocale === 'kh' ? plan?.button_title_kh || plan?.button_title : plan?.button_title}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
