import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ButtonAttachCv } from '../Bottons/ButtonAttachCV';
import ButtonSubmit from '../Bottons/ButtonSubmit';
const CareerPostDetail = () => {
    return (
            <div>
                <div className="flex w-full flex-col gap-6 rounded-lg lg:flex-row">
                    <div className="flex flex-1 flex-col gap-1">
                        <div className="border-purple-600 bg-white p-2 text-[12px]">
                            <p>Location: Phnom Penh, Cambodia</p>
                            <p>Industry: Freelance Driver</p>
                            <p>Budget: $0,000.00</p>
                        </div>
                        <div className="h-32 border-purple-600 bg-white"></div>
                        <div className="h-32 border-purple-600 bg-white"></div>
                        <div className="h-48 border-purple-600 bg-white"></div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4">
                        <Card className="border-none bg-transparent py-0 shadow-none">
                            <CardContent className="bg-none p-0">
                                <form>
                                    <div className="grid gap-x-8 gap-y-3">
                                        <div className="col-span-2 sm:col-span-1">
                                            <Label className="text-[20px] font-manrope-regular text-white" htmlFor="firstName">
                                                Name
                                            </Label>
                                            <Input id="name" className="mt-0.5 h-10 rounded-md bg-white shadow-none" />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <Label className="text-[20px] font-manrope-regular text-white" htmlFor="numberOrTelegram">
                                                Position
                                            </Label>
                                            <Input id="numberOrTelegram" className="mt-0.5 h-10 rounded-md bg-white shadow-none" />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <Label className="text-[20px] font-manrope-regular text-white" htmlFor="businessOrStoreName">
                                                Email
                                            </Label>
                                            <Input id="name" className="mt-0.5 h-10 rounded-md bg-white shadow-none" />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <Label className="text-[20px] font-manrope-regular text-white" htmlFor="pickUpLocation">
                                                Phone number
                                            </Label>
                                            <Input id="pickUpLocation" className="mt-0.5 h-10 rounded-md bg-white shadow-none" />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                        <div className="mt-2">
                            {/* ButtonAttachCv With ButtonSubmit */}
                            <ButtonSubmit/>
                            {/* ButtonAttachCv With ButtonSubmit */}
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CareerPostDetail;
