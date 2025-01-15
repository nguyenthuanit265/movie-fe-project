// import React, { useState } from "react";
// import AuthProvider from '../../providers/AutherProvider';
// import { Check } from "lucide-react";
// import { useNavigate, Link } from "react-router-dom";

// const SignUp = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         password: '',
//         confirmPassword: '',
//         email: ''
//     });
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setError(null);
//         setSuccessMessage(null);

//         if (formData.password !== formData.confirmPassword) {
//             setError('Passwords do not match!');
//             setIsLoading(false);
//             return;
//         }

//         try {
//             const response = await AuthProvider.signUp({
//                 email: formData.email,
//                 name: formData.name,
//                 password: formData.password,
//             });

//             console.log('Signup response:', response);

//             if (response && response.data) {
//                 setSuccessMessage('Signup successful! Redirecting to login...');
//                 setTimeout(() => navigate('/login'), 2000);
//             }
//         } catch (err) {
//             const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
//             setError(errorMessage);
//             console.error('Signup error:', err);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const benefits = [
//         "Find something to watch on your subscribed streaming services",
//         "Log the movies and TV shows you have watched",
//         "Keep track of your favourite movies and TV shows and get recommendations from them",
//         "Build and maintain a personal watchlist",
//         "Build custom mixed lists (movies and TV)",
//         "Take part in movie and TV discussions",
//         "Contribute to, and improve the information in our database",
//     ];

//     return (
//         <div className="pt-20 pb-8 flex items-center justify-center bg-gray-100">
//             <div className="w-full max-w-[1300px] mx-auto px-10">
//                 <div className="flex gap-8">
//                     {/* Left Side - Benefits */}
//                     <div className="w-[300px] shrink-0">
//                         <div className="bg-[#01b4e4] rounded overflow-hidden">
//                             <h3 className="text-xl text-white font-bold p-5 pb-0">
//                                 Benefits of being a member
//                             </h3>
//                             <ul className="p-5 text-black space-y-4 bg-gray-50">
//                                 {benefits.map((benefit, index) => (
//                                     <li key={index} className="flex items-start gap-2">
//                                         <Check className="w-5 h-5 mt-0.5 shrink-0" />
//                                         <span>{benefit}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Right Side - Form */}
//                     <div className="flex-1 max-w-3xl">
//                         <h2 className="text-2xl font-semibold mb-4 text-black">
//                             Sign up for an account
//                         </h2>
//                         <p className="text-gray-700 mb-8">
//                             Signing up for an account is free and easy. Fill out the form below to get started.
//                             JavaScript is required to continue.
//                         </p>

//                         {error && (
//                             <div className="mb-4 text-red-600 bg-red-100 p-3 rounded">
//                                 {error}
//                             </div>
//                         )}
//                         {successMessage && (
//                             <div className="mb-4 text-green-600 bg-green-100 p-3 rounded">
//                                 {successMessage}
//                             </div>
//                         )}

//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div>
//                                 <label className="block text-gray-700 mb-2">
//                                     Username
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4] bg-white text-black"
//                                     required
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 mb-2">
//                                     Password (4 characters minimum)
//                                 </label>
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4] bg-white text-black"
//                                     minLength={4}
//                                     required
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 mb-2">
//                                     Confirm Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     name="confirmPassword"
//                                     value={formData.confirmPassword}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4] bg-white text-black"
//                                     required
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-gray-700 mb-2">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4] bg-white text-black"
//                                     required
//                                 />
//                             </div>

//                             <p className="text-gray-600 text-sm">
//                                 By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB
//                                 terms of use and privacy policy.
//                             </p>

//                             <div className="flex items-center gap-4">
//                                 <button
//                                     type="submit"
//                                     disabled={isLoading}
//                                     className={`px-4 py-2 bg-[#E4E7EB] hover:bg-gray-300 rounded font-semibold transition-colors text-black
//                                     ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//                                 >
//                                     {isLoading ? 'Signing up...' : 'Sign Up'}
//                                 </button>
//                                 <Link
//                                     to="/"
//                                     className="text-[#01b4e4] hover:text-[#0099ca]"
//                                 >
//                                     Cancel
//                                 </Link>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;

import React, { useState } from "react";
import AuthProvider from '../../providers/AutherProvider';
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
    const navigate = useNavigate();

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
                toast.success("Signup successful!");
                setFormData({ name: '', password: '', confirmPassword: '', email: '' });
            }
            console.log("print response signup", response)
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || "An error occurred";
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
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
        "Contribute to, and improve the information in our database",
    ];

    return (
        <div className="pt-20 pb-8 flex items-center justify-center bg-gray-100">
            <ToastContainer />
            <div className="w-full max-w-[1300px] mx-auto px-10">
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
                                        <Check className="w-5 h-5 mt-0.5 shrink-0" />
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
                                    className={`px-4 py-2 bg-[#E4E7EB] hover:bg-gray-300 rounded font-semibold transition-colors text-black ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isLoading ? 'Signing up...' : 'Sign Up'}
                                </button>
                                <Link to="/" className="text-[#01b4e4] hover:text-[#0099ca]">
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
