import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const images = [
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726052140/ss-316-grade-investment-casting-500x500_aumxj7.jpg",
        name: "hardware-1",
        class_size: "col-lg-8 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726052141/four-way-spider-with-fin-500x500_o45ffo.jpg",
        name: "hardware-2",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726052141/spider-fitting-500x500_ddukw9.jpg",
        name: "hardware-4",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726052141/large-500x500_fbigg2.jpg",
        name: "hardware-4",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726052141/three-way-spider-fitting-500x500_jxfoxh.jpg",
        name: "hardware-5",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726052140/Hardware-and-Space-Frame2_unkrh2.jpg",
        name: "hardware-4",
        class_size: "col-lg-6 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726052140/investment-castings-500x500_cwqoqz.jpg",
        name: "hardware-4",
        class_size: "col-lg-3 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726052139/7_rzdlgl.jpg",
        name: "hardware-5",
        class_size: "col-lg-3 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726052139/Glass_Canopy_Fitting_kc83va.jpg",
        name: "hardware-4",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726052141/door-handle-500x500_vip8sd.jpg",
        name: "hardware-4",
        class_size: "col-lg-8 col-12 mb-3"
    },
]

export default function hardware(props) {
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index, item) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <Layout>
            <section className="bg-image bg-pump-componet no-margin h-auto">
                <div className="container h-100 ">
                    <div className="row h-100 align-items-center common-space-all">
                        <div className="col-lg-6 text-lg-start text-center mb-lg-0 mb-3">
                            <div className="common-title">
                                <h1 className="text-uppercase">Hardware</h1>
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-end text-center">
                            <Image
                                src={'/assets/images/product-5.png'}
                                width={450}
                                height={450}
                                quality={100}
                                alt="logo"
                                className='mw-100 border border-4 border-white'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="top-circle-bg common-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <div className="bottom-line-txt">
                                <span>Product Photo Gallery</span>
                            </div>
                        </div>
                        <div className="col-12 py-2">
                            <div className="gradiant-txt qaulity-txt">
                                <div className="d-flex align-items-center mb-3">
                                <h2 className="mb-0">High-Quality Industrial <span>Hardware </span></h2>
                                </div>
                                <p>Expertly designed hardware components crafted for endurance, ensuring superior protection and performance in critical applications.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                {images.map(img => 
                                    <div key={index} className={img.class_size} style={{height: "400px"}}>
                                        <img loading='lazy' src={img.src} className='img-fluid w-100 h-100 object-fit-cover' alt={`valve-${index}`} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
}
