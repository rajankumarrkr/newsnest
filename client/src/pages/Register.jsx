
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate();

    const { register, loading } = useAuth();

    const [formData, setFormData] = useState({
        name: '',
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

        const result = await register(formData);

        if (result.success) {
            toast.success('Account created successfully');
            navigate('/');
        } else {
            toast.error(result.message);
        }
    };

    return (
        <div className="min-h-[90vh] bg-gradient-to-br from-slate-50 to-cyan-50 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white/90 backdrop-blur-xl rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden border border-white/50">

                {/* Left Side */}
                <div className="hidden lg:flex flex-col justify-center bg-cyan-600 text-white p-12 relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-30"></div>

                    <div className="relative z-10">
                        <h1 className="text-5xl xl:text-6xl font-black leading-tight mb-6 tracking-tight">
                            Join NewsNext Today
                        </h1>

                        <p className="text-lg text-cyan-100 leading-relaxed">
                            Create your account and explore the latest trending stories from
                            the tech world with a clean and modern reading experience.
                        </p>

                        <div className="mt-10 space-y-4">
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                🌍 Explore trending developer stories
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                🔒 Secure JWT authentication system
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                📚 Save stories for later reading
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-slate-800 mb-3">
                            Create Account
                        </h2>

                        <p className="text-slate-500 text-lg">
                            Start your NewsNext journey today
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none p-4 rounded-2xl transition-all duration-300 hover:border-cyan-300 text-slate-700 placeholder:text-slate-400"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none p-4 rounded-2xl transition-all duration-300 hover:border-cyan-300 text-slate-700 placeholder:text-slate-400"
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
                                placeholder="Create password"
                                className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none p-4 rounded-2xl transition-all duration-300 hover:border-cyan-300 text-slate-700 placeholder:text-slate-400"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 text-white font-semibold py-4 rounded-2xl shadow-xl hover:shadow-cyan-200"
                            disabled={loading}
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-slate-600">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="text-cyan-600 font-semibold hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;

