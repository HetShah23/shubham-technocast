import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Head from 'next/head';

const images = [
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723927484/001_su9lzq.jpg",
        name: "pump-1",
        class_size: "col-lg-7 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723927482/fire-fighting-equipment-casting-500x500_lomshi.jpg",
        name: "pump-2",
        class_size: "col-lg-5 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723927487/21565610PFT-222_by3fhc.png",
        name: "pump-3",
        class_size: "col-lg-4 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723927481/Fire_Fighting_Parts_py0qye.jpg",
        name: "pump-4",
        class_size: "col-lg-4 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723927480/59e35fb9fb863f10e842eee5_xsnrlf.jpg",
        name: "pump-5",
        class_size: "col-lg-4 col-md-12 mb-3"
    },
]

export default function fireequipments(props) {
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
                <title>Fire Equipment Components Manufacturer India Parts</title>
                <meta name="keywords" content="fire fighting equipment components manufacturer india, fire equipment casting components, industrial fire equipment components, fire hydrant components manufacturer india, fire safety equipment components, fire fighting system parts, fire protection equipment parts, Meta fire equipment components, investment casting fire equipment parts, custom fire equipment casting parts" />
				<meta name="description" content="Reliable fire equipment components built with precision casting for safety and performance. Trusted quality for every need. Get your custom quote today!" />
            </Head>
            <section className="bg-image bg-pump-componet no-margin h-auto">
                <div className="container h-100 ">
                    <div className="row h-100 align-items-center common-space-all">
                        <div className="col-lg-6 text-lg-start text-center mb-lg-0 mb-3">
                            <div className="common-title">
                                <h1 className="text-uppercase">Fire Equipment Components Manufacturer in India</h1>
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-end text-center">
                            <Image
                                src={'/assets/images/product-6.jpg'}
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
                                <h2 className="mb-0"><span>Fire Fighting </span>Equipment Components</h2>
                                </div>
                                <p>
                                    Fire fighting equipment components are critical parts used in fire protection and suppression systems to ensure efficient water flow, pressure control, and rapid emergency response. These precision-engineered components include fire hydrant fittings, valve bodies, couplings, adapters, connectors, nozzles, and other fire fighting system parts designed for durability and high performance in demanding environments. Widely used in industrial, commercial, and municipal fire safety systems, these fire equipment casting components offer superior strength, corrosion resistance, and dimensional accuracy for long-lasting reliability. Manufactured through advanced investment casting processes, our industrial fire equipment components are ideal for fire hydrant systems, pipelines, and custom fire protection equipment parts requiring precision and dependable performance.
                                </p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className='row'>
                                        {
                                            images.map(img => (
                                                <div key={index} className={img.class_size} style={{height: "400px"}}>
                                                    <img loading='lazy' src={img.src} className='img-fluid w-100 h-100 object-fit-cover' alt={`fire-${index}`} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
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
                                    <h2>Shubham Technocast specializes in precision casting of fire equipment components, while our sister company, Shubham Firetech, delivers reliable fire safety solutions.</h2>
                                    <Link className='btn-2 my-3 cursor-pointer font-bold' href={'/fire-tech'}>
                                        Learn More 
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
