import React, { useState, useEffect } from "react";
import AuthProvider from '../../providers/AuthProvider';
import { Check } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        email: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isVerificationEmailSent, setIsVerificationEmailSent] = useState(false);
    const [existingEmail, setExistingEmail] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        return () => {
            setIsVerificationEmailSent(false);
            setExistingEmail('');
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            setIsLoading(false);
            return;
        }

        if (formData.password.length < 6 || !/\d/.test(formData.password) || !/[a-zA-Z]/.test(formData.password)) {
            toast.error("Password must be at least 6 characters long and include both letters and numbers.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await AuthProvider.signUp({
                email: formData.email,
                name: formData.name,
                password: formData.password,
            });

            if (response && response.id) {
                toast.success("Signup successful! Please verify your email to activate your account.");
                setExistingEmail(formData.email);
                setFormData({ name: '', password: '', confirmPassword: '', email: '' });
                setIsVerificationEmailSent(true);
            }
        } catch (err) {
            if (err.message?.includes("User is existed in system")) {
                toast.warning("This email is already registered. Please verify your email or login if already verified.");
                setExistingEmail(formData.email);
                setIsVerificationEmailSent(true);
                setFormData({ name: '', password: '', confirmPassword: '', email: '' });
            } else {
                toast.error(err.message || "An error occurred during sign up");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const sendVerificationEmail = async () => {
        if (!existingEmail) return;

        try {
            await AuthProvider.sendVerifyEmail(existingEmail);
            toast.success("Verification email sent! Please check your inbox.");
        } catch (err) {
            toast.error("Failed to send verification email. Please try again later.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
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
        "Contribute to, and improve the information in our database",
    ];

    return (
        <div className="pt-20 pb-8 flex items-center justify-center bg-gray-100">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
            />
            <div className="w-full max-w-[1300px] mx-auto px-10">
                <div className="flex gap-8">
                    <div className="w-[300px] shrink-0">
                        <div className="bg-[#01b4e4] rounded overflow-hidden">
                            <h3 className="text-xl text-white font-bold p-5 pb-0">
                                Benefits of being a member
                            </h3>
                            <ul className="p-5 text-black space-y-4 bg-gray-50">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <Check className="w-5 h-5 mt-0.5 shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 max-w-3xl">
                        <h2 className="text-2xl font-semibold mb-4 text-black">
                            Sign up for an account
                        </h2>
                        <p className="text-gray-700 mb-8">
                            Signing up for an account is free and easy. Fill out the form below to get started.
                            JavaScript is required to continue.
                        </p>

                        {!isVerificationEmailSent ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">Username</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4] bg-white text-black"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">
                                        Password (at least 6 characters, including letters and numbers)
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4] bg-white text-black"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4] bg-white text-black"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4] bg-white text-black"
                                        required
                                    />
                                </div>

                                <p className="text-gray-600 text-sm">
                                    By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB
                                    terms of use and privacy policy.
                                </p>

                                <div className="flex items-center gap-4">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`px-4 py-2 bg-[#E4E7EB] hover:bg-gray-300 rounded font-semibold transition-colors text-black ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {isLoading ? 'Signing up...' : 'Sign Up'}
                                    </button>
                                    <Link to="/" className="text-[#01b4e4] hover:text-[#0099ca]">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        ) : (
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                    Email Verification Required
                                </h3>
                                <p className="text-blue-800 mb-4">
                                    The email address ({existingEmail}) is already registered. You have two options:
                                </p>
                                <div className="flex flex-col gap-3">
                                    <button
                                        type="button"
                                        onClick={() => sendVerificationEmail()}
                                        className="px-4 py-2 bg-[#01b4e4] hover:bg-[#0099ca] text-white rounded font-semibold w-fit"
                                    >
                                        Resend Verification Email
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <span className="text-blue-800">Already verified?</span>
                                        <Link
                                            to="/login"
                                            className="text-[#01b4e4] hover:text-[#0099ca] font-semibold"
                                        >
                                            Login here
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
