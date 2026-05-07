


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();

    const { login, loading } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await login(formData);

        if (result.success) {
            navigate('/');
        } else {
            alert(result.message);
        }
    };

    return (
        <div className="min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white/90 backdrop-blur-xl rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden border border-white/50">

                {/* Left Side */}
                <div className="hidden lg:flex flex-col justify-center bg-blue-600 text-white p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30"></div>

                    <div className="relative z-10">
                        <h1 className="text-5xl xl:text-6xl font-black leading-tight mb-6 tracking-tight">
                            Welcome Back to NewsNext
                        </h1>

                        <p className="text-lg text-blue-100 leading-relaxed">
                            Stay updated with the latest Hacker News stories, save bookmarks,
                            and explore trending tech discussions in one place.
                        </p>

                        <div className="mt-10 space-y-4">
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                ⚡ Real-time tech news updates
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                🔖 Save and manage bookmarks
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                🚀 Modern full-stack MERN experience
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-slate-800 mb-3">
                            Sign In
                        </h2>

                        <p className="text-slate-500 text-lg">
                            Login to continue exploring NewsNext
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none p-4 rounded-2xl transition-all duration-300 hover:border-blue-300 text-slate-700 placeholder:text-slate-400"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none p-4 rounded-2xl transition-all duration-300 hover:border-blue-300 text-slate-700 placeholder:text-slate-400"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 text-white font-semibold py-4 rounded-2xl shadow-xl hover:shadow-blue-200"
                            disabled={loading}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-slate-600">
                        Don’t have an account?{' '}
                        <Link
                            to="/register"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;




