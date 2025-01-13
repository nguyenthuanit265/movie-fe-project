import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/authSlice'; // Cập nhật đường dẫn nếu cần
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import ResendActivation from "../components/auth/ResendActivation";
import ResetPasswordScreen1 from "../components/auth/ResetPasswordScreen1";
import ResetPassword from "../components/auth/ResetPassword";
import Profile from "../components/profile/Profile";
import HomePage from "../components/screens/HomePage";
import MovieDetail from "../components/screens/MovieDetail";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

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
                    <Route path="/" element={<HomePage />} />
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
                    <Route path="/verify-email" element={
                        <PublicRoute>
                            <ResendActivation />
                        </PublicRoute>
                    } />
                    <Route path="/forgot-password" element={
                        <PublicRoute>
                            <ResetPasswordScreen1 />
                        </PublicRoute>
                    } />
                    <Route path="/reset-password" element={
                        <PublicRoute>
                            <ResetPassword />
                        </PublicRoute>
                    } />
                    <Route path="/profile" element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    } />
                    <Route path="/movie/:id" element={<MovieDetail />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default AppRoutes;
