import { Link } from 'react-router-dom';
import logo from '../../assets/logo-2.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='w-11/12 mx-auto'>
            <nav className="flex items-center justify-between text-white pt-8">
                {/* Logo */}
             
                <div className="flex items-center gap-2">
                    <Link to='/'>
                    <img src={logo} alt="Travel Guru" className="h-10" />
                    </Link>
                </div>
                {/* Search bar */}
                <div className="flex-1 max-w-md mx-6">
                    <input
                        type="text"
                        placeholder="Search your Destination..."
                        className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                    />
                </div>
                {/* Navigation links */}
                <ul className="flex items-center gap-6 text-sm font-medium">
                    <li className="hover:text-yellow-400 cursor-pointer">News</li>
                    <li className="hover:text-yellow-400 cursor-pointer">Destination</li>
                    <li className="hover:text-yellow-400 cursor-pointer">Blog</li>
                    <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
                </ul>

                {/* Login Button */}
                <Link to='/login'>
                <button className="ml-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-5 rounded">
                    Login
                </button>
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;