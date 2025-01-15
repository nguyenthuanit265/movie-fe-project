import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token'); // Lấy token từ URL
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            if (!token) {
                toast.error('Token không hợp lệ hoặc không tồn tại.');
                navigate('/'); // Quay về trang chủ nếu không có token
                return;
            }

            try {
                // Gửi yêu cầu xác nhận tới backend
                const response = await axios.get('http://14.225.210.222:8081/api/v1/auth/verify', {
                    params: { token },
                });

                if (response.status === 200) {
                    toast.success(response.data.message || 'Xác nhận email thành công!');
                    setTimeout(() => navigate('/login'), 3000); // Chuyển hướng đến trang đăng nhập sau 3 giây
                }
            } catch (error) {
                toast.error(error.response?.data?.message || 'Xác nhận email thất bại.');
            }
        };

        verifyEmail();
    }, [token, navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <ToastContainer />
            <h2 className="text-xl font-semibold mb-4">Đang xác nhận email...</h2>
            <p className="text-gray-600">Vui lòng chờ trong giây lát.</p>
        </div>
    );
};

export default VerifyEmail;
