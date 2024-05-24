// components/ClientLogoSlider.js
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ClientLogoSlider = () => {
    const [isMobile, setIsMobile] = useState(false);

    const logos = [
        '/assets/images/client-logo-1.png',
        '/assets/images/client-logo-2.png',
        '/assets/images/client-logo-3.png',
        '/assets/images/client-logo-4.png',
        '/assets/images/client-logo-5.png',
        '/assets/images/client-logo-6.png',
        '/assets/images/client-logo-7.png',
        '/assets/images/client-logo-8.png',
        '/assets/images/client-logo-9.png',
        '/assets/images/client-logo-10.png',
        '/assets/images/client-logo-11.png',
        '/assets/images/client-logo-12.png',
        '/assets/images/client-logo-13.png',
        '/assets/images/client-logo-14.png',
        '/assets/images/client-logo-15.png',
    ];

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
            {isMobile ? (
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    // navigation

                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 3000 }}
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
                            <div className="white-box p-0 h-100 d-flex align-items-center justify-content-center">
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
                            <div className="white-box p-0 h-100 d-flex align-items-center justify-content-center">
                                <div>
                                    <img src={logo} className="img-fluid" alt={`Client Logo ${index + 1}`} />
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
