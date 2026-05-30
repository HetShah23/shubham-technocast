import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Head from 'next/head';

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
            <Head>
                <title>Industrial Hardware Components Manufacturer India Parts</title>
                <meta name="keywords" content="industrial hardware components manufacturer india, hardware casting components, stainless steel hardware components, investment casting hardware parts, precision hardware components, custom hardware casting parts, engineering hardware components, industrial metal hardware parts, hardware components supplier india, Industrial hardware parts manufacturer" />
				<meta name="description" content="High quality industrial hardware components made with precision casting for strength and durability. Built to perform in every application. Get a quote today!" />
            </Head>
            <section className="bg-image bg-pump-componet no-margin h-auto">
                <div className="container h-100 ">
                    <div className="row h-100 align-items-center common-space-all">
                        <div className="col-lg-6 text-lg-start text-center mb-lg-0 mb-3">
                            <div className="common-title">
                                <h1 className="text-uppercase">Industrial Hardware Components Manufacturer in India</h1>
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
                                <h2 className="mb-0">High-Quality Industrial <span>Hardware </span> Components </h2>
                                </div>
                                <p>Industrial Hardware Components are precision-engineered metal parts manufactured through the investment casting process for applications requiring strength, durability, and dimensional accuracy. These components are widely used in construction, architectural fittings, machinery, material handling systems, and general industrial equipment. Designed to deliver reliable performance and long service life, they offer excellent surface finish, corrosion resistance, and design flexibility. As a trusted general engineering components manufacturer India, we produce high-quality precision engineering components, custom engineering components, general engineering casting parts, and metal engineering components backed by advanced investment casting, CNC machining, and stringent quality control processes. Our capabilities ensure consistent quality for OEMs seeking dependable precision metal parts manufacturer solutions and industrial casting components India.</p>
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
            <section className="common-space">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='bg-theme p-4'>
                                <div className='common-title text-center'>
                                    <h2>Looking for a Reliable General Engineering Components Manufacturer in India?</h2>
                                    <p>From custom engineering components to general engineering casting parts, we deliver precision-manufactured solutions tailored to your application and performance requirements.</p>
                                    <Link className='btn-2 my-3 cursor-pointer font-bold' href={'/contact-us'}>
                                        Get a Quote for Engineering Components 
                                        <svg width="7" height="12" className="ms-3" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L6 6L1 1" stroke="#154090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
