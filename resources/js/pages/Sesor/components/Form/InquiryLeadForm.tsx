import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ButtonSimple from '../Bottons/ButtonSimple';
import CheckBoxContact from './CheckBoxContact';
import { Button } from '@/components/ui/button';

const InquiryLeadForm = () => (
    <div id="inquiry-lead-form">
        <div className="section-container mt-10">
            <h2 className="font-manrope-extra-bold text-2xl tracking-tight md:text-3xl">Inquiry Lead Form</h2>
            <p className="mt-0.5 font-manrope-semi-bold text-base sm:text-lg">Want to know your delivery rate? Tell us few details for a quote!</p>
            <div className="mt-7 grid gap-10 md:gap-10 lg:grid-cols-2">
                {/* Form */}
                <Card className="border-none py-0 shadow-none">
                    <CardContent className="p-0">
                        <form>
                            <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
                                <div className="col-span-2 sm:col-span-1">
                                    <Label className="font-manrope-semi-bold text-[16px] md:text-[18px]" htmlFor="firstName">
                                        Name
                                    </Label>
                                    <Input id="name" className="mt-0.5 h-10 border border-black bg-white shadow-none" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <Label className="font-manrope-semi-bold text-[16px] md:text-[18px]" htmlFor="numberOrTelegram">
                                        Contact Number
                                    </Label>
                                    <Input id="numberOrTelegram" className="mt-0.5 h-10 border border-black bg-white shadow-none" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <Label className="font-manrope-semi-bold text-[16px] md:text-[18px]" htmlFor="businessOrStoreName">
                                        Business / Store Name
                                    </Label>
                                    <Input id="name" className="mt-0.5 h-10 border border-black bg-white shadow-none" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <Label className="font-manrope-semi-bold text-[16px] md:text-[18px]" htmlFor="pickUpAddress">
                                        Email
                                    </Label>
                                    <Input id="pickUpAddress" className="mt-0.5 h-10 border border-black bg-white shadow-none" />
                                </div>
                                <div className="col-span-2">
                                    <Label className="font-manrope-semi-bold text-[16px] md:text-[18px]" htmlFor="message">
                                        Message (Optional)
                                    </Label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Write your message here..."
                                        className="mt-0.5 w-full rounded-md border border-black bg-white p-2 text-base shadow-none focus-visible:outline-none"
                                    ></textarea>
                                </div>
                                <div className="col-span-2">
                                    <p className="font-manrope-semi-bold text-[16px] md:text-[18px]">
                                        Preferred Contact Method (Required to select one)
                                    </p>

                                    <div className='flex justify-between items-end'>
                                        <CheckBoxContact />
                                        <ButtonSimple title={'Submit'} link={'#'}  newStyle="rounded-full bg-green-500 text-white hover:bg-green-600" />
                                        {/* <Button className='botton bg-primary-two hover:bg-primary-two text-black w-[150px] font-manrope-bold rounded-none border'>Submit</Button> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
                <div>
                    <img src="/assets/sesor/service/Service-03.png" />
                </div>
            </div>
        </div>
    </div>
);

export default InquiryLeadForm;
