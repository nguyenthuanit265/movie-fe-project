import React, {useState} from 'react';
import {Link} from 'react-router-dom'; // Assuming you're using React Router for navigation
import {login} from '../api/auth'; // Import the login function

// eslint-disable-next-line react/prop-types
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate(); // For redirection after successful login

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
            // navigate('/');
        } catch (error) {
            setError('Invalid username or password'); // Set error message
            console.error('Login error:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Login to your account</h2>
                <p className="text-gray-600 mb-6 text-center">
                    In order to use the editing and rating capabilities of TMDB, as well as get personal
                    recommendations,
                    you will need to login to your account. If you do not have an account, registering for an account is
                    free and simple. <Link to="/signup" className="text-[#01b4e4] hover:underline">Click here to get
                    started</Link>.
                </p>
                <p className="text-gray-600 mb-6 text-center">
                    If you signed up but didn't get your verification email,{' '}
                    <Link to="/resend-verification" className="text-[#01b4e4] hover:underline">click here to have it
                        resent</Link>.
                </p>

                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2">Username</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4]"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4]"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[#01b4e4] text-white rounded hover:bg-[#0099ca] transition-colors"
                        >
                            Đăng nhập
                        </button>
                        <button
                            type="button"
                            onClick={() => setError('Reset password functionality not implemented yet.')}
                            className="text-[#01b4e4] hover:underline"
                        >
                            Reset password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;