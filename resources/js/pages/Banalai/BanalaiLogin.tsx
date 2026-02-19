const BanalaiLogin = () => {
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
                            <div className="flex items-center space-x-4">
                                <a href="/" className="text-gray-700 transition-colors hover:text-indigo-600">
                                    Back to Home
                                </a>
                            </div>
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
                                            title: 'Digital Library Access',
                                            desc: 'Access millions of digital resources, e-books, and journals from anywhere.',
                                            icon: `/assets/icon1.png`,
                                        },
                                        {
                                            title: 'Secure & Reliable',
                                            desc: 'Your data is protected with enterprise-grade security and encryption.',
                                            icon: `/assets/icon2.png`,
                                        },
                                        {
                                            title: 'Fast & Efficient',
                                            desc: 'Lightning-fast search and instant access to all your library resources.',
                                            icon: `/assets/icon3.png`,
                                        },
                                        {
                                            title: 'Mobile Friendly',
                                            desc: 'Access your library on any device, anywhere, at any time.',
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
                                    <p className="text-sm text-indigo-100">Don't have an account?</p>
                                    <a href="/register" className="inline-flex items-center font-semibold hover:underline">
                                        Create an account
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
                                        <h1 className="mb-2 text-3xl font-bold text-gray-900">Sign In</h1>
                                        <p className="text-gray-600">Welcome back! Please login to your account.</p>
                                    </div>

                                    <form className="space-y-6">
                                        {/* Email Field */}
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

                                        {/* Password Field */}
                                        <div>
                                            <div className="mb-2 flex items-center justify-between">
                                                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                                                    Password
                                                </label>
                                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                                                    Forgot password?
                                                </a>
                                            </div>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                required
                                                placeholder="Enter your password"
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-indigo-600"
                                            />
                                        </div>

                                        {/* Remember Me */}
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="remember"
                                                name="remember"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                                                Remember me for 30 days
                                            </label>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="w-full transform rounded-lg bg-[linear-gradient(140deg,#facc15,#eab308)] px-6 py-3 font-semibold text-gray-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[linear-gradient(140deg,#eab308,#ca8a04)] hover:shadow-xl focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none"
                                        >
                                            Sign In
                                        </button>
                                    </form>

                                    {/* Divider */}
                                    <div className="my-8 flex items-center">
                                        <div className="flex-1 border-t border-gray-300" />
                                        <span className="px-4 text-sm text-gray-500">Or continue with</span>
                                        <div className="flex-1 border-t border-gray-300" />
                                    </div>

                                    {/* Social Login Buttons */}
                                    <div className="mb-6 grid grid-cols-2 gap-4">
                                        <button
                                            type="button"
                                            className="flex items-center justify-center rounded-lg border border-gray-300 px-4 py-3 transition-colors hover:bg-gray-50"
                                        >
                                            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
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
                                        <button
                                            type="button"
                                            className="flex items-center justify-center rounded-lg border border-gray-300 px-4 py-3 transition-colors hover:bg-gray-50"
                                        >
                                            <svg className="mr-2 h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                            <span className="text-sm font-medium text-gray-700">Facebook</span>
                                        </button>
                                    </div>

                                    {/* Sign Up Link */}
                                    <div className="text-center">
                                        <p className="text-sm text-gray-600">
                                            Don't have an account?{' '}
                                            <a href="register.html" className="font-semibold text-indigo-600 hover:text-indigo-700">
                                                Sign up
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
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
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

export default BanalaiLogin;
