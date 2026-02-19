const Register = () => {
    const imgBgColors = [
        'bg-yellow-500/30 border border-yellow-400/30',
        'bg-green-500/30 border border-green-400/30',
        'bg-yellow-500/30 border border-yellow-400/30',
        'bg-white/20',
    ];

    return (
        <div className="min-h-screen bg-[linear-gradient(to_bottom_right,#eff6ff,#e0e7ff)] font-sans backdrop-blur-sm">
            {/* Navigation */}
            <nav className="bg-white/95 shadow-sm backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <a href="/" className="flex items-center">
                            <img src="/assets/logo.png" alt="Banalai Logo" className="h-16 w-auto" />
                        </a>

                        <div className="flex items-center space-x-4">
                            <a href="/" className="text-gray-700 transition hover:text-indigo-600">
                                Home
                            </a>
                            <a href="/login" className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700">
                                Sign In
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Register Section */}
            <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
                <div className="w-full max-w-6xl">
                    <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Left Side */}
                            <div className="hidden flex-col justify-center bg-[linear-gradient(141deg,#4f46e5,#4a4ae6,#454de7,#3f51e7,#3a55e8,#3558e9,#305cea,#2a5fea,#2563eb,#236bd7,#2173c3,#1f7baf,#1e839b,#1c8b86,#1a9372,#189b5e,#16a34a)] p-12 text-white lg:flex">
                                <h2 className="mb-4 text-3xl font-bold">Join Banalai Today</h2>
                                <p className="mb-10 text-lg text-indigo-100">
                                    Create your account and start accessing thousands of digital resources.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        {
                                            title: 'Free Account',
                                            desc: 'Start with our free plan and upgrade anytime. No credit card required.',
                                            icon: `/assets/icon1.png`,
                                        },
                                        {
                                            title: 'Secure Registration',
                                            desc: 'Your information is encrypted with industry-standard security.',
                                            icon: `/assets/icon2.png`,
                                        },
                                        {
                                            title: 'Instant Access',
                                            desc: 'Get immediate access after registration.',
                                            icon: `/assets/icon3.png`,
                                        },
                                        {
                                            title: '24/7 Support',
                                            desc: 'Our support team is always ready to help.',
                                            icon: `/assets/icon4.png`,
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <div
                                                className={`mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${imgBgColors[index % imgBgColors.length]}`}
                                            >
                                                <img src={item.icon} alt={item.title} className="h-6 w-6 object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="mb-1 text-xl font-semibold">{item.title}</h3>
                                                <p className="text-indigo-100">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 border-t border-white/20 pt-8">
                                    <p className="text-sm text-indigo-100">Already have an account?</p>
                                    <a href="/login" className="inline-flex items-center font-semibold hover:underline">
                                        Sign in here
                                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="p-8 lg:p-12">
                                <div className="mx-auto max-w-md">
                                    <div className="mb-8 text-center">
                                        <h1 className="mb-2 text-3xl font-bold text-gray-900">Create Account</h1>
                                        <p className="text-gray-600">Fill in your details to get started with Banalai.</p>
                                    </div>

                                    <form className="space-y-5">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-gray-700">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    required
                                                    placeholder="John"
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-indigo-600"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-gray-700">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    required
                                                    placeholder="Doe"
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-indigo-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phoneNumber" className="mb-2 block text-sm font-semibold text-gray-700">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                required
                                                placeholder="+1 (234) 567-8900"
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-indigo-600"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                placeholder="your.email@example.com"
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-indigo-600"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="mb-2 block text-sm font-semibold text-gray-700">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                required
                                                placeholder="Create a strong password"
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-indigo-600"
                                            />
                                            <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters long</p>
                                        </div>

                                        <div>
                                            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold text-gray-700">
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                required
                                                placeholder="Re-enter your password"
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-indigo-600"
                                            />
                                        </div>

                                        <div className="flex items-start">
                                            <input
                                                type="checkbox"
                                                id="acceptTerms"
                                                name="acceptTerms"
                                                required
                                                className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label htmlFor="acceptTerms" className="ml-3 text-sm text-gray-700">
                                                I accept the{' '}
                                                <a className="font-semibold text-indigo-600 hover:text-indigo-700" href="#">
                                                    Terms and Conditions
                                                </a>{' '}
                                                and{' '}
                                                <a className="font-semibold text-indigo-600 hover:text-indigo-700" href="#">
                                                    Privacy Policy
                                                </a>
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full transform rounded-lg bg-[linear-gradient(88deg,#22c55e,#21c15c,#1fbd59,#1eb857,#1cb454,#1bb052,#19ac4f,#18a74d,#16a34a)] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[linear-gradient(87deg,#16a34a,#169f48,#169a47,#169645,#169244,#158d42,#158940,#15843f,#15803d)] hover:shadow-xl focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
                                        >
                                            Create Account
                                        </button>
                                    </form>

                                    <div className="my-8 flex items-center">
                                        <div className="flex-1 border-t border-gray-300" />
                                        <span className="px-4 text-sm text-gray-500">Or sign up with</span>
                                        <div className="flex-1 border-t border-gray-300" />
                                    </div>

                                    <button
                                        type="button"
                                        className="mb-6 flex w-full items-center justify-center rounded-lg border border-gray-300 px-4 py-3 transition-colors hover:bg-gray-50"
                                    >
                                        <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24">
                                            <path
                                                fill="#4285F4"
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            />
                                            <path
                                                fill="#EA4335"
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-700">Google</span>
                                    </button>

                                    <div className="text-center">
                                        <p className="text-sm text-gray-600">
                                            Already have an account?{' '}
                                            <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-700">
                                                Sign in
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 py-8 text-sm text-gray-400">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                    <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                        <p className="text-sm text-gray-400">&copy; 2026 Banalai. All rights reserved.</p>
                        <p className="text-sm text-gray-500">
                            Powered By:{' '}
                            <a
                                href="https://www.alphalib.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-yellow-400 transition-colors hover:text-yellow-300"
                            >
                                Alphalib
                            </a>
                        </p>
                    </div>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-400 transition-colors hover:text-green-400">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 transition-colors hover:text-yellow-400">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 transition-colors hover:text-indigo-400">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Register;
