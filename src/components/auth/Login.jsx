import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../store/authSlice';
import AuthProvider from '../../providers/AuthProvider';
import { auth } from '../../config/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [remainingAttempts, setRemainingAttempts] = useState(10);
    const [validationError, setValidationError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            setValidationError('Email must be in the correct format (e.g. user@example.com).');
            return;
        }
        if (!formData.password) {
            setValidationError('Password cannot be blank.');
            return;
        }
        setValidationError('');
        dispatch(loginStart());

        try {
            const response = await AuthProvider.login({
                email: formData.email,
                password: formData.password
            });
            if (response && response.data) {
                const userData = {
                    token: response.data.access_token,
                    user: {
                        id: response.data.id,
                        email: response.data.email
                    }
                };

                dispatch(loginSuccess(userData));
                localStorage.setItem('token', response.data.access_token);
                localStorage.setItem('userId', response.data.id);
                localStorage.setItem('userEmail', response.data.email);
                navigate('/profile');
            }
        } catch (err) {
            setRemainingAttempts(prev => prev - 1);
            const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
            dispatch(loginFailure(errorMessage));
        }
    };


    const handleGoogleLogin = async () => {
        dispatch(loginStart());
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            try {
                const response = await AuthProvider.login({
                    email: user.email,
                    password: user.uid // Sử dụng UID từ Google làm password
                });

                if (response && response.data) {
                    const userData = {
                        token: response.data.access_token,
                        user: {
                            id: response.data.id,
                            email: response.data.email
                        }
                    };

                    dispatch(loginSuccess(userData));
                    localStorage.setItem('token', response.data.access_token);
                    localStorage.setItem('userId', response.data.id);
                    localStorage.setItem('userEmail', response.data.email);
                    navigate('/profile');
                }
            } catch (err) {
                try {
                    await AuthProvider.signup({
                        email: user.email,
                        name: user.displayName || user.email.split('@')[0],
                        password: user.uid
                    });

                    const loginResponse = await AuthProvider.login({
                        email: user.email,
                        password: user.uid
                    });

                    if (loginResponse && loginResponse.data) {
                        const userData = {
                            token: loginResponse.data.access_token,
                            user: {
                                id: loginResponse.data.id,
                                email: loginResponse.data.email
                            }
                        };

                        dispatch(loginSuccess(userData));
                        localStorage.setItem('token', loginResponse.data.access_token);
                        localStorage.setItem('userId', loginResponse.data.id);
                        localStorage.setItem('userEmail', loginResponse.data.email);
                        navigate('/profile');
                    }
                } catch (signupErr) {
                    dispatch(loginFailure('Failed to create account with Google'));
                }
            }
        } catch (err) {
            dispatch(loginFailure('Google login failed'));
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <main className="w-full max-w-[1300px] mx-auto px-10 py-8">
                <div className="max-w-[800px]">
                    <h2 className="text-2xl font-semibold mb-4 text-black">Login to your account</h2>

                    {/* Instructions */}
                    <p className="text-gray-700 mb-8">
                        To use the full features of our app, login or{' '}
                        <Link to="/signup" className="text-[#01b4e4] hover:text-[#0099ca]">
                            sign up for free
                        </Link>.
                    </p>

                    {/* Validation Error */}
                    {validationError && (
                        <div className="mb-4 text-red-600">
                            {validationError}
                        </div>
                    )}

                    {/* Login Error */}
                    {error && (
                        <div className="mb-6 bg-[#dc3545] text-white rounded overflow-hidden">
                            <div className="px-4 py-3 font-semibold bg-[#dc3545] border-b border-[#dc3545]/20">
                                Error
                            </div>
                            <div className="px-4 py-3 bg-white/10">
                                <ul className="list-disc ml-4 space-y-1">
                                    <li>{error}</li>
                                    <li>{remainingAttempts} remaining login attempts.</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="text"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4] bg-white text-black"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4] bg-white text-black"
                                required
                            />
                        </div>

                        <div className="flex gap-4 items-center pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-4 py-2 bg-[#E4E7EB] hover:bg-gray-300 
                                      rounded font-semibold transition-colors
                                      ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                            <Link
                                to="/forgot-password"
                                className="text-[#01b4e4] hover:text-[#0099ca]"
                            >
                                Reset password
                            </Link>
                        </div>

                        {/* Google Login */}
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            disabled={loading}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                        >
                            <img
                                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            <span>Login with Google</span>
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Login;