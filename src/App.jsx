import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useSelector, useDispatch } from 'react-redux';
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ResendActivation from "./components/auth/ResendActivation";
import ResetPasswordScreen1 from "./components/auth/ResetPasswordScreen1";
import ResetPassword from "./components/auth/ResetPassword";
import Profile from "./components/profile/Profile";
import HomePage from "./components/screens/HomePage";
import { loginSuccess } from './store/authSlice';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const hasToken = localStorage.getItem('token');
    return (isAuthenticated && hasToken) ? children : <Navigate to="/" />;
};

const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const hasToken = localStorage.getItem('token');
    return (!isAuthenticated || !hasToken) ? children : <Navigate to="/" />;
};

// Tách phần routes ra component riêng
const AppRoutes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const userEmail = localStorage.getItem('userEmail');

        if (token && userId && userEmail) {
            dispatch(loginSuccess({
                token,
                user: {
                    id: userId,
                    email: userEmail
                }
            }));
        }
    }, [dispatch]);

    return (
        <div className="min-h-screen w-full bg-white overflow-x-hidden">
            <Header />
            <main>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<HomePage />} />

                    {/* Auth Routes */}
                    <Route path="/login" element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    } />
                    <Route path="/signup" element={
                        <PublicRoute>
                            <SignUp />
                        </PublicRoute>
                    } />
                    <Route path="/verify-email" element={<ResendActivation />} />
                    <Route path="/forgot-password" element={<ResetPasswordScreen1 />} />
                    <Route path="/reset-password" element={<ResetPassword />} />

                    {/* Protected Routes */}
                    <Route path="/profile" element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    } />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

// App chính chỉ wrap Provider và Router
const App = () => {
    return (
        <>
            <style jsx global>{`
                html, body {
                    margin: 0;
                    padding: 0;
                    min-width: 100%;
                    width: 100%;
                    min-height: 100vh;
                    overflow-x: hidden;
                }

                #root {
                    min-height: 100vh;
                    width: 100%;
                }

                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            <Provider store={store}>
                <Router>
                    <AppRoutes />
                </Router>
            </Provider>
        </>
    );
};

export default App;