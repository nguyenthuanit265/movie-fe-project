import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider from '../../providers/AutherProvider';

const ResetPasswordScreen1 = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            const response = await AuthProvider.resetPassword(email);

            if (response) {
                setSuccessMessage(
                    'Password reset email sent successfully! Please check your inbox.'
                );
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
            setError(errorMessage);
            console.error('Password reset error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-[1300px] mx-auto px-10 py-8">
                <div className="max-w-[800px]">
                    <h2 className="text-2xl font-semibold mb-4">
                        Reset password
                    </h2>

                    <p className="text-gray-700 mb-8">
                        Enter the email you used to sign up for a TMDB account and we'll send you the steps required to
                        reset your password.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-700 mb-2"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="What's your email?"
                                className="w-full px-4 py-2 border border-gray-300 rounded
                                         focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4]"
                                required
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`px-4 py-2 bg-[#E4E7EB] hover:bg-gray-300 
                                          rounded font-semibold transition-colors
                                          ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? 'Sending...' : 'Continue'}
                            </button>
                            <Link
                                to="/login"
                                className="text-[#01b4e4] hover:text-[#0099ca]"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordScreen1;