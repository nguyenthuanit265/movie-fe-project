// src/api/auth.js

// Sign-up function
export const signUp = async (userData) => {
    try {
        const response = await fetch('http://localhost:8081/api/v1/auth/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Sign-up failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during sign-up:', error);
        throw error;
    }
};

// Login function
export const login = async (credentials) => {
    try {
        const response = await fetch('http://localhost:8081/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};