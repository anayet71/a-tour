import logo from '../assets/Rectangle 1.png'
import Banner from '../components/layout-component/Banner';
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
                height: '100vh',
                width: '100%',
                color: 'white',
            }}
        >
            {/* Content wrapper */}
            <div className="w-11/12 mx-auto">
                <Navbar />
                <Banner />
            </div>
        </div>
    );
};

export default HomeLayout;
