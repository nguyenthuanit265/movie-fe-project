import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../store/authSlice';
import AuthProvider from '../../providers/AutherProvider';
import { auth } from '../../config/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [remainingAttempts, setRemainingAttempts] = useState(10);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart());

        try {
            const response = await AuthProvider.login({
                email: formData.email,
                password: formData.password
            });

            console.log('Login response:', response);

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
            const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
            dispatch(loginFailure(errorMessage));
            console.error('Login error:', err);
        }
    };

    const handleGoogleLogin = async () => {
        dispatch(loginStart());
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Thử đăng nhập với API hiện tại
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
                // Nếu đăng nhập thất bại, thử đăng ký tài khoản mới
                try {
                    await AuthProvider.signup({
                        email: user.email,
                        name: user.displayName || user.email.split('@')[0],
                        password: user.uid
                    });

                    // Sau khi đăng ký thành công, thử đăng nhập lại
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

                    <p className="text-gray-700 mb-8">
                        In order to use the editing and rating capabilities of TMDB, as well as get personal
                        recommendations
                        you will need to login to your account. If you do not have an account, registering for an
                        account is
                        free and simple.{' '}
                        <Link to="/signup" className="text-[#01b4e4] hover:text-[#0099ca]">
                            Click here
                        </Link>{' '}
                        to get started.
                    </p>

                    <p className="text-gray-700 mb-8">
                        If you signed up but didn't get your verification email,{' '}
                        <Link to="/verify-email" className="text-[#01b4e4] hover:text-[#0099ca]">
                            click here
                        </Link>{' '}
                        to have it resent.
                    </p>

                    {error && (
                        <div className="mb-6 bg-[#dc3545] text-white rounded overflow-hidden">
                            <div className="px-4 py-3 font-semibold bg-[#dc3545] border-b border-[#dc3545]/20">
                                There was a problem
                            </div>
                            <div className="px-4 py-3 bg-white/10">
                                <ul className="list-disc ml-4 space-y-1">
                                    <li>We couldn't validate your information. Want to try again?</li>
                                    <li>You have {remainingAttempts} remaining login attempts.</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Username</label>
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
                                {loading ? 'Logging in...' : 'Đăng nhập'}
                            </button>
                            <Link
                                to="/forgot-password"
                                className="text-[#01b4e4] hover:text-[#0099ca]"
                            >
                                Reset password
                            </Link>
                        </div>
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
                            <span>Đăng nhập với Google</span>
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Login;