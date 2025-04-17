import { FaArrowRightLong } from "react-icons/fa6";
import banner1 from '../../assets/Sajek.png'
import banner2 from '../../assets/Sreemongol.png'
import banner3 from '../../assets/sundorbon.png'
import right from '../../assets/right.png'
import left from '../../assets/left.png'

const Banner = () => {
    return (
        <div>
            <div className="flex pt-36  w-11/12 mx-auto">

                <div className="  ">
                    <h1 className="font-primary text-[95px]">
                        Cox's bazar
                    </h1>
                    <p className="font-secondary pb-6"> Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className="btn btn-warning"> Booking <FaArrowRightLong />
                    </button>
                </div>
                <div className="flex gap-5  box-border">
                    <div className=" hover:border-4 hover:border-yellow-600 transition-all duration-300 ease-in-out"
                        style={{
                            backgroundImage: `linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0)),
                        linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), 
                        url(${banner1})`,
                            backgroundSize: 'cover',
                            height: '416px', // Full screen height
                            width: '270px',    // Full width
                            color: 'white',
                            borderRadius: '25px'


                        }}
                    >
                    </div>
                    <div className=" hover:border-4 hover:border-yellow-600 transition-all duration-300 ease-in-out"
                        style={{
                            backgroundImage: `linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0)),
                        linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), 
                        url(${banner2})`,
                            backgroundSize: 'cover',
                            height: '416px', // Full screen height
                            width: '270px',    // Full width
                            color: 'white',
                            borderRadius: '25px'
                        }}
                    >
                    </div>
                    <div className=" hover:border-4 hover:border-yellow-600 transition-all duration-300 ease-in-out"
                        style={{
                            backgroundImage: `linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0)),
                        linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0)), 
                        url(${banner3})`,
                            backgroundSize: 'cover',
                            height: '416px', // Full screen height
                            width: '270px',    // Full width
                            color: 'white',
                            borderRadius: '25px'
                        }}
                    >
                    </div>
                </div>

            </div>
            <div className="flex gap-2 justify-center mt-22 ">
                <div className="bg-white p-6 rounded-full">
                    <a href="">
                        <img src={left} alt="" />
                    </a>
                </div>
                <div className="bg-white p-6 rounded-full">
                    <a href="">
                        <img src={right} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;