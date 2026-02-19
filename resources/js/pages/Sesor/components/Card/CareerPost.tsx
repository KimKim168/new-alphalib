import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { PopupDialog } from '../Dialogs/PopupDialog';

const CareerPost = () => {
    return (
        <div>
            <h2 id='career' className="mt-7.5 md:mt-15 mb-3.5 md:mb-5 text-center tracking-tight text-primary text-3xl font-manrope-extra-bold">Career</h2>

            <div className=" grid sm:grid-cols-2 lg:grid-cols-4 border-2 border-primary">
                {[0, 1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden gap-1 border-none rounded-none bg-primary py-0 shadow-none">
                        <CardHeader className="p-0">
                            <img src="/assets/sesor/about_us/About Us-03.png" className="aspect-square w-full" />
                        </CardHeader>
                        <CardContent className="pb-4 px-3">
                            <h3 className="mt-2 text-[16px] text-primary-two font-manrope-semi-bold">Be Our Next Freelance Driver!</h3>
                            <p className="text-[13px] text-white font-manrope-extra-light">
                                Be the Future – Join Our Team!
                            </p>

                            {/* Button Popup */}
                            <PopupDialog titleButton='More Details'/>
                            {/* End Button Popup */}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CareerPost;
