import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Head from 'next/head';

const images = [
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140413/Automotive1_iwfd6q.jpg",
        name: "pump-1",
        class_size: "col-lg-6 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140413/_MG_3904_12_yjnvti.jpg",
        name: "pump-2",
        class_size: "col-lg-6 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140420/DSCF6955_gqtnaz.jpg",
        name: "pump-1",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140417/6f43b5263fbba79c5962514b85d34738_XL_thcaut.jpg",
        name: "pump-2",
        class_size: "col-lg-5 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140417/8fe3e0f34d3083cba6fe73d62a783d7f_XL_z5wsjw.jpg",
        name: "pump-3",
        class_size: "col-lg-3 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140417/867519228d1d5325856fc61d710ded0e_XL_efktlh.jpg",
        name: "pump-4",
        class_size: "col-lg-6 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140418/Fully-Machined-Parts3_wbf685.jpg",
        name: "pump-5",
        class_size: "col-lg-6 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140417/engine-rocker-arm-for-automotive-industry-500x500_lvzlwd.png",
        name: "pump-1",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140414/engineering-castings-500x500_1_lz5crm.jpg",
        name: "pump-2",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140414/10-34-13-71f67488b0857639cee631943a3fc6fa_l-500x500_sbzff8.jpg",
        name: "pump-3",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140414/General-Engineering1_i7ehmu.jpg",
        name: "pump-1",
        class_size: "col-lg-8 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140412/1_nehji4.jpg",
        name: "pump-2",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140412/engineering-casting-250x250_govvh5.jpg",
        name: "pump-3",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140412/engineering-castings-250x250_hw707d.jpg",
        name: "pump-1",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140412/6_bv7hrr.jpg",
        name: "pump-2",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140413/column-riser-drop-pipes-adapters-ss-stainless-steel-500x500_hhlter.jpg",
        name: "pump-3",
        class_size: "col-lg-3 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140413/A9_aydp3e.jpg",
        name: "pump-1",
        class_size: "col-lg-3 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140412/_MG_3902_12_ch9eot.jpg",
        name: "pump-2",
        class_size: "col-lg-6 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140413/Automotive2_ezt3qx.jpg",
        name: "pump-1",
        class_size: "col-lg-6 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1726140413/Automotive3_w577hs.jpg",
        name: "pump-2",
        class_size: "col-lg-6 col-12 mb-3"
    },
]

export default function generalengineering() {
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
                <title>General Engineering Components Manufacturer India Parts</title>
                <meta name="keywords" content="general engineering components manufacturer india, engineering components manufacture, precision engineering components, industrial engineering component, general engineering casting parts, Custom engineering component, metal engineering components, precision metal parts manufacturer, industrial casting components india" />
				<meta name="description" content="Durable general engineering components made with precision casting for industrial use. Built for strength and accuracy. Request your custom quote today!" />
            </Head>
            <section className="bg-image bg-pump-componet no-margin h-auto">
                <div className="container h-100 ">
                    <div className="row h-100 align-items-center common-space-all">
                        <div className="col-lg-6 text-lg-start text-center mb-lg-0 mb-3">
                            <div className="common-title">
                                <h1 className="text-uppercase">General Engineering Components Manufacturer in India</h1>
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-end text-center">
                            <Image
                                src={'/assets/images/product-2.png'}
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
                                <h2 className="mb-0">Precision Engineering Components</h2>
                                </div>
                                <p>General engineering components are essential precision parts used across multiple industrial sectors to support machinery performance, structural functionality, and mechanical operations. These precision engineering components include gears, valve bodies, forks, locking rings, brackets, housings, machine parts, and other industrial engineering components designed for strength, dimensional accuracy, and long-term durability. Widely used in automotive, machinery, manufacturing, heavy equipment, pumps, and industrial systems, these metal engineering components are built to withstand demanding operational conditions while maintaining reliable performance. Manufactured using advanced investment casting processes, general engineering casting parts offer superior surface finish, complex geometry capabilities, and consistent quality, making them ideal for custom engineering component requirements and precision industrial applications. As a trusted source for industrial casting components India, we deliver high-performance precision metal parts engineered for OEM and industrial needs.</p>
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
                                    <h2>General Engineering Components Manufacturer in India – Get a Custom Quote.</h2>
                                    <Link className='btn-2 my-3 cursor-pointer font-bold' href={'/contact-us'}>
                                        Get a Quote 
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
