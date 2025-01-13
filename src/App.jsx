// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
// import { store } from './store/store';
// import { useSelector, useDispatch } from 'react-redux';
// import Footer from "./components/layout/Footer";
// import Header from "./components/layout/Header";
// import Login from "./components/auth/Login";
// import SignUp from "./components/auth/SignUp";
// import ResendActivation from "./components/auth/ResendActivation";
// import ResetPasswordScreen1 from "./components/auth/ResetPasswordScreen1";
// import ResetPassword from "./components/auth/ResetPassword";
// import Profile from "./components/profile/Profile";
// import HomePage from "./components/screens/HomePage";
// import MovieDetail from "./components/screens/MovieDetail";
// import { loginSuccess } from './store/authSlice';


// const PrivateRoute = ({ children }) => {
//     const { isAuthenticated } = useSelector(state => state.auth);
//     const hasToken = localStorage.getItem('token');
//     return (isAuthenticated && hasToken) ? children : <Navigate to="/login" />;
// };

// const PublicRoute = ({ children }) => {
//     const { isAuthenticated } = useSelector(state => state.auth);
//     const hasToken = localStorage.getItem('token');
//     return (!isAuthenticated || !hasToken) ? children : <Navigate to="/" />;
// };

// const AppRoutes = () => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userId');
//         const userEmail = localStorage.getItem('userEmail');

//         if (token && userId && userEmail) {
//             dispatch(loginSuccess({
//                 token,
//                 user: {
//                     id: userId,
//                     email: userEmail
//                 }
//             }));
//         }
//     }, [dispatch]);

//     return (
//         <div className="min-h-screen w-full bg-white overflow-x-hidden">
//             <Header />
//             <main>
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/login" element={
//                         <PublicRoute>
//                             <Login />
//                         </PublicRoute>
//                     } />
//                     <Route path="/signup" element={
//                         <PublicRoute>
//                             <SignUp />
//                         </PublicRoute>
//                     } />


//                     <Route path="/verify-email" element={<PublicRoute><ResendActivation /></PublicRoute>} />
//                     <Route path="/forgot-password" element={<PublicRoute><ResetPasswordScreen1 /></PublicRoute>} />
//                     <Route path="/reset-password" element={<PublicRoute><ResetPassword /></PublicRoute>} />

//                     <Route path="/profile" element={
//                         <PrivateRoute> { }
//                             <Profile />
//                         </PrivateRoute>
//                     } />
//                     <Route path="/movie/:id" element={<MovieDetail />} />
//                 </Routes>
//             </main>
//             <Footer />
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <>
//             <style jsx global>{`
//                 html, body {
//                     margin: 0;
//                     padding: 0;
//                     min-width: 100%;
//                     width: 100%;
//                     min-height: 100vh;
//                     overflow-x: hidden;
//                 }

//                 #root {
//                     min-height: 100vh;
//                     width: 100%;
//                 }

//                 .no-scrollbar {
//                     -ms-overflow-style: none;
//                     scrollbar-width: none;
//                 }

//                 .no-scrollbar::-webkit-scrollbar {
//                     display: none;
//                 }
//             `}</style>
//             <Provider store={store}>
//                 <Router>
//                     <AppRoutes />
//                 </Router>
//             </Provider>
//         </>
//     );
// };

// export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRoutes from './routes/AppRoutes'; // Import AppRoutes từ file đã tách

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