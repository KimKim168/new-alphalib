import BookCamboLayout from '../BookCamboLayout';
import RegisterForm from '../Components/Auth2/RegisterForm';

const Index = () => {
    return (
        <BookCamboLayout>
            <div className="item-center my-12 flex justify-center text-gray-900">
                <div className="flex w-full max-w-screen-xl flex-col gap-4 overflow-hidden rounded-lg bg-white shadow-lg lg:flex-row">
                    {/* Form Section */}
                    <div className="flex w-full flex-col items-center justify-center p-6 sm:p-12 lg:w-1/2">
                        <p className="mb-6 max-w-sm text-center text-xl leading-snug font-medium text-gray-800">
                            Register for a free account as a <span className="text-primary">publisher</span> or{' '}
                            <span className="text-primary">author</span>
                        </p>
                        <RegisterForm />
                    </div>

                    {/* Image Section */}
                    <div className="hidden items-center justify-center lg:flex lg:w-1/2">
                        <img
                            src="/assets/book_cambo/register.png"
                            alt="Designer Illustration"
                            className="m-12 max-h-full max-w-full object-contain xl:m-16"
                        />
                    </div>
                </div>
            </div>
        </BookCamboLayout>
    );
};

export default Index;
