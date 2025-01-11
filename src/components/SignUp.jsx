// eslint-disable-next-line react/prop-types
import React, {useState} from "react";
import {signUp} from "../api/auth.js";
import {Check} from "lucide-react";
import {useNavigate, Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        email: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

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
            // onClose();
            navigate('/');
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
    const benefits = [
        "Find something to watch on your subscribed streaming services",
        "Log the movies and TV shows you have watched",
        "Keep track of your favourite movies and TV shows and get recommendations from them",
        "Build and maintain a personal watchlist",
        "Build custom mixed lists (movies and TV)",
        "Take part in movie and TV discussions",
        "Contribute to, and improve the information in our database"
    ];
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-[1300px] mx-auto px-10 py-8">
                <div className="flex gap-8">
                    {/* Left Side - Benefits */}
                    <div className="w-[300px] shrink-0">
                        <div className="bg-[#01b4e4] rounded overflow-hidden">
                            <h3 className="text-xl text-white font-bold p-5 pb-0">
                                Benefits of being a member
                            </h3>
                            <ul className="p-5 text-black space-y-4 bg-gray-50">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="flex-1 max-w-3xl">
                        <h2 className="text-2xl font-semibold mb-4 text-black">
                            Sign up for an account
                        </h2>
                        <p className="text-gray-700 mb-8">
                            Signing up for an account is free and easy. Fill out the form below to get started.
                            JavaScript is required to continue.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    value={formData.username}
                                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4] bg-white text-black"
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
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4] bg-white text-black"
                                    minLength={4}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Password Confirm
                                </label>
                                <input
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4] bg-white text-black"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4] bg-white text-black"
                                />
                            </div>

                            <p className="text-gray-600 text-sm">
                                By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB
                                terms of use and privacy policy.
                            </p>

                            <div className="flex items-center gap-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#E4E7EB] hover:bg-gray-300 rounded font-semibold transition-colors text-black"
                                >
                                    Đăng ký
                                </button>
                                <Link
                                    to="/"
                                    className="text-[#01b4e4] hover:text-[#0099ca]"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SignUp;