// src/api/auth.js
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