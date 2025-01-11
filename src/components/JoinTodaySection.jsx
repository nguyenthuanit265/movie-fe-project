import React, {useState} from "react";
import {signUp} from "../api/auth.js";
import {Check, X} from "lucide-react";
import LeaderboardSection from "./LeaderboardSection.jsx";


const JoinTodaySection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="relative w-full bg-gradient-to-r from-[#4b1c78] to-[#7214ad] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/src/api/placeholder/2000/600"
                        alt="Join Today Background"
                        className="w-full h-full object-cover mix-blend-overlay opacity-10"
                    />
                </div>

                {/* Content Container */}
                <div className="relative w-full max-w-[1300px] mx-auto px-10 py-12">
                    <div className="flex justify-between items-start gap-20">
                        {/* Left Side - Main Content */}
                        <div className="flex-1 max-w-2xl">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                Join Today
                            </h2>
                            <p className="text-lg text-white/90 mb-8">
                                Get access to maintain your own{' '}
                                <span className="italic">custom personal lists</span>,{' '}
                                <span className="italic">track what you've seen</span>{' '}
                                and search and filter for{' '}
                                <span className="italic">what to watch next</span>
                                —regardless if it's in theatres or on TV.
                            </p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#805be7] hover:bg-[#916ee7] transition-colors text-white px-8 py-2.5 rounded-md font-semibold text-lg"
                            >
                                Sign Up
                            </button>
                        </div>

                        {/* Right Side - Benefits List */}
                        <div className="hidden md:block">
                            <ul className="text-white space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full shrink-0"/>
                                    <span>Enjoy TMDB</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full shrink-0"/>
                                    <span>Maintain a personal watchlist</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full shrink-0"/>
                                    <span>Filter by your ratings</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full shrink-0"/>
                                    <span>Log the movies and TV shows you've seen</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full shrink-0"/>
                                    <span>Build custom lists</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full shrink-0"/>
                                    <span>Contribute to and improve our database</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sign Up Modal */}
            <SignUpModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

        </>
    );
};


// eslint-disable-next-line react/prop-types
const SignUpModal = ({isOpen, onClose}) => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        email: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add form submission logic here
        setError(''); // Clear previous errors
        setIsLoading(true);
        console.log('Form submitted:', formData);

        try {
            // Call the sign-up API
            const response = await signUp(formData);
            console.log('Sign-up successful:', response);

            // Close the modal on success
            onClose();
        } catch (error) {
            setError('Sign-up failed. Please try again.'); // Set error message
            console.error('Sign-up error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    if (!isOpen) return null;

    return (
        // Modal Backdrop
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            {/* Modal Content */}
            <div className="bg-white rounded-lg w-full max-w-4xl flex overflow-hidden">
                {/* Left Column - Benefits */}
                <div className="w-1/3 bg-[#01b4e4] p-6 text-white">
                    <h3 className="text-xl font-bold mb-6">
                        Benefits of being a member
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Find something to watch on your subscribed streaming services</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Log the movies and TV shows you have watched</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Keep track of your favourite movies and TV shows and get recommendations from them</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Build and maintain a personal watchlist</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Build custom mixed lists (movies and TV)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Take part in movie and TV discussions</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Contribute to, and improve the information in our database</span>
                        </li>
                    </ul>
                </div>

                {/* Right Column - Form */}
                <div className="flex-1 p-8">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-2xl font-medium">Sign up for an account</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-6 h-6"/>
                        </button>
                    </div>

                    <p className="text-gray-600 mb-8">
                        Signing up for an account is free and easy. Fill out the form below to get started.
                        JavaScript is required to to continue.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Username</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4]"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">
                                Password (4 characters minimum)
                            </label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4]"
                                minLength={4}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Password Confirm</label>
                            <input
                                type="password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4]"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4]"
                            />
                        </div>

                        <p className="text-sm text-gray-600">
                            By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB
                            terms of use and privacy policy.
                        </p>

                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded font-semibold transition-colors"
                            >
                                Đăng ký
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-2 text-[#01b4e4] hover:text-[#0099ca]"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinTodaySection;