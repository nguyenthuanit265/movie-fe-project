import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'; // Assuming you're using React Router for navigation
import {login} from '../api/auth'; // Import the login function

// eslint-disable-next-line react/prop-types
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // For redirection after successful login

    const handleLogin = async (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Logging in with:', email, password);
        setError('');
        try {
            const credentials = {email, password};
            const response = await login(credentials); // Call the login API
            console.log('Login successful:', response);

            // Redirect the user to the home page or dashboard
            // onClose();
            navigate('/');
        } catch (error) {
            setError('Invalid username or password'); // Set error message
            console.error('Login error:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {/* Keep your Header component here */}

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

                    {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Username</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4] bg-white text-black"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4] bg-white text-black"
                                required
                            />
                        </div>

                        <div className="flex gap-4 items-center pt-2">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-[#E4E7EB] hover:bg-gray-300 rounded font-semibold transition-colors text-black"
                            >
                                Đăng nhập
                            </button>
                            <Link
                                to="/reset-password"
                                className="text-[#01b4e4] hover:text-[#0099ca]"
                            >
                                Reset password
                            </Link>
                        </div>
                    </form>
                </div>
            </main>

            {/* Keep your Footer component here */}
        </div>
    );
};

export default Login;