import {
    Link,
    useNavigate,
} from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } =
        useAuth();

    const navigate =
        useNavigate();

    const handleLogout = () => {
        logout();

        navigate('/login');
    };

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-3xl font-black text-blue-600 tracking-tight"
                >
                    NewsNext
                </Link>

                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            <Link
                                to="/bookmarks"
                                className="text-slate-700 hover:text-blue-600 font-medium transition"
                            >
                                Bookmarks
                            </Link>

                            <button
                                onClick={
                                    handleLogout
                                }
                                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-slate-700 hover:text-blue-600 font-medium transition"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;