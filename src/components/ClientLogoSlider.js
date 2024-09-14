// components/ClientLogoSlider.js
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ClientLogoSlider = ({logos, whitebox, height}) => {
    const [isMobile, setIsMobile] = useState(false);
    console.log()
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Check the initial window size
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <div>
            {isMobile && logos.length > 10 ? (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 1500 }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }}
                    className="customer-slider"
                >
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index} className="" onClick={() => handleClick(index)}>
                            <div className={`${whitebox === true ? "white-box" : ""} p-0 h-100 d-flex align-items-center justify-content-center`}>
                                <div>
                                    <img src={logo} className="img-fluid" alt={`Client Logo ${index + 1}`} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="row customer-slider">
                    {logos.map((logo, index) => (
                        <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
                            <div className={`${whitebox === true ? "white-box" : "m-3"} p-0 h-100 d-flex align-items-center justify-content-center`}>
                                <div>
                                    <img src={logo} className="p-2 mw-100 object-fit-contain" height={height ?? "auto"} alt={`Client Logo ${index + 1}`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ClientLogoSlider;
