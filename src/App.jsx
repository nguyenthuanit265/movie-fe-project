import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                    <ToastContainer />
                </Router>
            </Provider>
        </>
    );
};

export default App;