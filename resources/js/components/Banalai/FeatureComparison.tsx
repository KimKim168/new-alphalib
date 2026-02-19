import useTranslation from "@/hooks/use-translation";
import { usePage } from "@inertiajs/react";

const FeatureComparison = () => {
    const {featurePricingPlans} = usePage<any>().props;
    const { currentLocale } = useTranslation();
    // const FeatureComparisonTable = {
    //     long_description: `
    //   <div class="bg-white rounded-xl shadow-md overflow-hidden">
    //     <div class="overflow-x-auto">
    //       <table class="w-full">
    //                     <thead class="bg-gray-50">
    //                         <tr>
    //                             <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
    //                             <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">Free</th>
    //                             <th class="px-6 py-4 text-center text-sm font-semibold text-indigo-600">Cloud Subscription</th>
    //                             <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">Local Server</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody class="divide-y divide-gray-200">
    //                         <tr>
    //                             <td class="px-6 py-4 text-sm text-gray-900">Digital Library Access</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">Limited</td>
    //                             <td class="px-6 py-4 text-center text-sm text-indigo-600 font-semibold">✓ Full</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">✓ Full</td>
    //                         </tr>
    //                         <tr class="bg-gray-50">
    //                             <td class="px-6 py-4 text-sm text-gray-900">Resource Limit</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">1,000</td>
    //                             <td class="px-6 py-4 text-center text-sm text-indigo-600 font-semibold">Unlimited</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">Unlimited</td>
    //                         </tr>
    //                         <tr>
    //                             <td class="px-6 py-4 text-sm text-gray-900">Hosting</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">Cloud</td>
    //                             <td class="px-6 py-4 text-center text-sm text-indigo-600 font-semibold">Cloud (Included)</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">On-Premise</td>
    //                         </tr>
    //                         <tr class="bg-gray-50">
    //                             <td class="px-6 py-4 text-sm text-gray-900">Automatic Updates</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">✓</td>
    //                             <td class="px-6 py-4 text-center text-sm text-indigo-600 font-semibold">✓</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">Manual</td>
    //                         </tr>
    //                         <tr>
    //                             <td class="px-6 py-4 text-sm text-gray-900">Support</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">Community</td>
    //                             <td class="px-6 py-4 text-center text-sm text-indigo-600 font-semibold">Priority</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">1 Year Included</td>
    //                         </tr>
    //                         <tr class="bg-gray-50">
    //                             <td class="px-6 py-4 text-sm text-gray-900">Advanced Analytics</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">—</td>
    //                             <td class="px-6 py-4 text-center text-sm text-indigo-600 font-semibold">✓</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">✓</td>
    //                         </tr>
    //                         <tr>
    //                             <td class="px-6 py-4 text-sm text-gray-900">Custom Branding</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">—</td>
    //                             <td class="px-6 py-4 text-center text-sm text-indigo-600 font-semibold">✓</td>
    //                             <td class="px-6 py-4 text-center text-sm text-gray-600">✓</td>
    //                         </tr>
    //                     </tbody>
    //                 </table>
    //     </div>
    //   </div>
    // `,
    // };

    return (
        <div className="section-container md:px-0">
        <div
            className="prose max-w-none pb-8 md:pb-20 prose-img:"
            dangerouslySetInnerHTML={{
                __html: currentLocale === 'kh' ? featurePricingPlans?.long_description_kh || featurePricingPlans?.long_description : featurePricingPlans?.long_description
            }}
        /></div>
    );
};

export default FeatureComparison;
