import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Head from 'next/head';

const images = [
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723909799/22_sczu9r.jpg",
        name: "pump-1",
        class_size: "col-lg-8 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723909762/19_sz2ii4.jpg",
        name: "pump-2",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723909811/5_jgrtoq.jpg",
        name: "pump-3",
        class_size: "col-lg-3 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723909807/7_xbabje.jpg",
        name: "pump-4",
        class_size: "col-lg-3 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723909753/20_zpnmsf.jpg",
        name: "pump-5",
        class_size: "col-lg-6 col-md-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723909750/24_sasmgw.jpg",
        name: "pump-6",
        class_size: "col-lg-8 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723909754/15_gbvzac.jpg",
        name: "pump-7",
        class_size: "col-lg-4 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723909754/12_a9iw3g.jpg",
        name: "pump-8",
        class_size: "col-lg-4 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723909750/26_a7uyvw.jpg",
        name: "pump-9",
        class_size: "col-lg-3 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723909749/16_i3iyl1.jpg ",
        name: "pump-10",
        class_size: "col-lg-5 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723909750/27_fbrngq.jpg",
        name: "pump-11",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723909749/18_cc6yuf.jpg",
        name: "pump-12",
        class_size: "col-lg-4 col-md-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723909749/14_gzldgh.jpg",
        name: "pump-13",
        class_size: "col-lg-4 col-12 mb-3"
    }
]

export default function pumpcomponents(props) {
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
                <title>Pump Components Manufacturer in India | Casting Parts</title>
                <meta name="keywords" content="Pump components manufacturer india, Industrial pump parts manufacturer, Stainless steel pump components, Investment casting pump parts, precision pump components , custom pump casting parts , Metal pump components, pump impeller casting , pump housing casting" />
				<meta name="description" content="Explore durable pump components made with precision casting for industrial use. Built for performance and reliability. Get a custom quote today!" />
            </Head>
            <section className="bg-image bg-pump-componet no-margin h-auto">
                <div className="container h-100 ">
                    <div className="row h-100 align-items-center common-space-all">
                        <div className="col-lg-6 text-lg-start text-center mb-lg-0 mb-3">
                            <div className="common-title">
                                <h1 className="text-uppercase">Pump Components Manufacturer in India</h1>
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-end text-center">
                            <Image
                                src={'/assets/images/product-8.jpg'}
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
                                    <h2 className="mb-0"><span>High Precision</span> Pump Components</h2>
                                </div>
                                <p>Pump Components are critical parts used in centrifugal pumps, process pumps, chemical pumps, water treatment systems, and industrial fluid handling equipment. Manufactured through the investment casting process, these components provide excellent dimensional accuracy, corrosion resistance, strength, and long-term reliability in demanding operating environments. The category includes impellers, pump housings, casings, diffusers, wear rings, covers, and other precision pump components designed for efficient fluid flow and optimal pump performance. As a trusted Pump Components Manufacturer India, we produce high-quality stainless steel pump components, investment casting pump parts, custom pump casting parts, and metal pump components with stringent quality control, advanced machining, and inspection capabilities to meet OEM and industrial requirements.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className='row'>
                                        {
                                            images.map(img => (
                                                <div key={index} className={img.class_size} style={{height: "400px"}}>
                                                    <img loading='lazy' src={img.src} className='img-fluid w-100 h-100 object-fit-cover' alt={`pump-${index}`} />
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
                                    <h2>Connect with Us for Custom Pump Components Solutions.</h2>
                                    <Link className='btn-2 my-3' href={'/contact-us'}>
                                        Contact Us Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="common-space">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 mb-3 text-lg-start text-center'>
                            <button className="btn-1" disabled>FAQ</button>
                            <div className="gradiant-txt qaulity-txt mt-3">
                                <div className="d-flex align-items-center mb-3">
                                    <h2 className="mb-0 fw-bold">What types of <span>Pump Components </span> can be ordered from <span>Shubham Technocast?</span> </h2>
                                </div>
                                <p>Shubham Technocast is dedicated to delivering <span>precision-engineered, high-quality</span> pump components that are meticulously crafted and rigorously <span>QA-tested.</span> We offer <span>custom manufacturing solutions</span> tailored to meet your exact specifications, ensuring that each component not only meets but exceeds industry standards, providing <span>reliability and performance</span> you can trust for your most demanding applications.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 mb-3 text-lg-center text-center'>
                            <img
                                src={'/assets/images/gallery-2.png'}
                                alt="logo"
                                className='img-fluid h-auto w-100 object-fit-cover'
                            />
                        </div>
                        {/* <div className='col-md-6 mb-3'>
                            <div className='white-box product-details'>
                                <div className='d-flex align-items-start'>
                                    <div className='me-2'>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="#1d4794"></rect></svg>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold ">Diaphragm Pumps</h6>
                                        <bdi>Diaphragm Pumps. These pumps utilize a flexible diaphragm that moves up and down, drawing in and expelling fluid in a rhythmic manner. Applications ...</bdi>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className='white-box product-details'>
                                <div className='d-flex align-items-start'>
                                    <div className='me-2'>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="#1d4794"></rect></svg>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold ">Oil pumps</h6>
                                        <bdi>Major Markets. Desalination, Oil & Gas, Petrochemical, Pollution Control Systems, Pulp & Paper Marine & Offshore Wastewater Treatment, Electronics Metal .</bdi>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className='white-box product-details'>
                                <div className='d-flex align-items-start'>
                                    <div className='me-2'>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="#1d4794"></rect></svg>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold ">Pump casting</h6>
                                        <bdi>Diaphragm Pumps. These pumps utilize a flexible diaphragm that moves up and down, drawing in and expelling fluid in a rhythmic manner. Applications ...</bdi>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className='white-box product-details'>
                                <div className='d-flex align-items-start'>
                                    <div className='me-2'>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="#1d4794"></rect></svg>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold ">Casting Impeller</h6>
                                        <bdi>Diaphragm Pumps. These pumps utilize a flexible diaphragm that moves up and down, drawing in and expelling fluid in a rhythmic manner. Applications ...</bdi>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className='white-box product-details'>
                                <div className='d-flex align-items-start'>
                                    <div className='me-2'>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="#1d4794"></rect></svg>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold ">Submersible</h6>
                                        <bdi>Diaphragm Pumps. These pumps utilize a flexible diaphragm that moves up and down, drawing in and expelling fluid in a rhythmic manner. Applications ...</bdi>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className='white-box product-details'>
                                <div className='d-flex align-items-start'>
                                    <div className='me-2'>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="#1d4794"></rect></svg>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold ">Stainless steel</h6>
                                        <bdi>Diaphragm Pumps. These pumps utilize a flexible diaphragm that moves up and down, drawing in and expelling fluid in a rhythmic manner. Applications ...</bdi>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

        </Layout>
    );
}
