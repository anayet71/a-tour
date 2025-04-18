import { Outlet } from 'react-router-dom';
import logo from '../assets/Rectangle 1.png';
import Navbar from '../components/layout-component/Navbar';

const HomeLayout = () => {
    return (
        <div
            className='w-full'
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${logo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                color: 'white',
            }}
        >
            <div className="w-11/12 mx-auto">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default HomeLayout;
