import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        username: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Add your password reset logic here
        console.log('Resetting password:', formData);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-[1300px] mx-auto px-10 py-8">
                <div className="max-w-[800px]">
                    <h2 className="text-2xl font-semibold mb-8">
                        Reset password
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-gray-700 mb-2"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                type="email"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100
                                         focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4]"
                            // disabled
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="newPassword"
                                className="block text-gray-700 mb-2"
                            >
                                New Password
                            </label>
                            <input
                                id="newPassword"
                                type="password"
                                value={formData.newPassword}
                                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                                placeholder="New Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded
                                         focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4]"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-gray-700 mb-2"
                            >
                                Confirm New Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                placeholder="Confirm New Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded
                                         focus:outline-none focus:ring-1 focus:ring-[#01b4e4] focus:border-[#01b4e4]"
                                required
                            />
                        </div>

                        <div className="flex items-center gap-4 pt-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`px-4 py-2 bg-[#E4E7EB] hover:bg-gray-300 
                                          rounded font-semibold transition-colors
                                          ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? 'Saving...' : 'Save'}
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
    );
};

export default ResetPassword;