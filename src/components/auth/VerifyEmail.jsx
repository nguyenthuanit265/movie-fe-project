import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import AuthProvider from '../../providers/AutherProvider';
import { toast } from 'react-toastify';

const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const [verificationStatus, setVerificationStatus] = useState('verifying');
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            const token = searchParams.get('token');

            if (!token) {
                setVerificationStatus('error');
                toast.error('Invalid verification link');
                return;
            }

            try {
                await AuthProvider.verifyEmail(token);
                setVerificationStatus('success');
                toast.success('Email verified successfully! You can now login.');
                // Chuyển hướng đến trang login sau 3 giây
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } catch (err) {
                setVerificationStatus('error');
                toast.error(err.message || 'Verification failed. Please try again.');
            }
        };

        verifyEmail();
    }, [searchParams, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Email Verification</h2>

                {verificationStatus === 'verifying' && (
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#01b4e4] mx-auto mb-4"></div>
                        <p className="text-gray-600">Verifying your email...</p>
                    </div>
                )}

                {verificationStatus === 'success' && (
                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-gray-600 mb-4">Your email has been verified successfully!</p>
                        <p className="text-gray-500 text-sm">Redirecting to login page...</p>
                    </div>
                )}

                {verificationStatus === 'error' && (
                    <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <p className="text-gray-600 mb-4">Verification failed. Please try again or contact support.</p>
                        <button
                            onClick={() => navigate('/login')}
                            className="px-4 py-2 bg-[#01b4e4] text-white rounded hover:bg-[#0099ca] transition-colors"
                        >
                            Go to Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;