import {
    Link,
    useNavigate,
} from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();

        navigate('/login');
    };

    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-2xl font-bold text-blue-600"
                >
                    NewsNext
                </Link>

                <div className="flex gap-4 items-center">
                    {user ? (
                        <>
                            <Link to="/bookmarks">
                                Bookmarks
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                Login
                            </Link>

                            <Link to="/register">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;