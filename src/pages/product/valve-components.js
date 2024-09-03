import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const images = [
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925513/DSCF6940_etiqrq.jpg",
        name: "valve-1",
        class_size: "col-lg-8 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925516/DSCF6935_v0cdez.jpg",
        name: "valve-2",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925584/DSCF6913_iquicw.jpg",
        name: "valve-3",
        class_size: "col-lg-3 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925608/DSCF6910_oqyoqr.jpg",
        name: "valve-4",
        class_size: "col-lg-3 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925505/DSCF6951_zqgegf.jpg",
        name: "valve-5",
        class_size: "col-lg-6 col-md-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925540/DSCF6943_ze72h7.jpg",
        name: "valve-1",
        class_size: "col-lg-8 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925507/DSCF6952_skuv2o.jpg",
        name: "valve-6",
        class_size: "col-lg-4 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925511/DSCF6953_f3pudr.jpg",
        name: "valve-2",
        class_size: "col-lg-4 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925518/DSCF6939_hhu57f.jpg",
        name: "valve-3",
        class_size: "col-lg-3 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925499/DSCF6947_ohxgxn.jpg",
        name: "valve-4",
        class_size: "col-lg-5 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925503/DSCF6933_lnabrf.jpg",
        name: "valve-7",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925497/DSCF6944_lkuodl.jpg",
        name: "valve-5",
        class_size: "col-lg-4 col-md-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925497/DSCF6948_n8rj0h.jpg",
        name: "valve-6",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925493/077ab55046ce80eaf9a3ddea999597ca_XL_czwabz.jpg",
        name: "valve-1",
        class_size: "col-lg-8 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925497/DSCF6944_lkuodl.jpg",
        name: "valve-2",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925489/20_pyiqc1.jpg",
        name: "valve-3",
        class_size: "col-lg-3 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925495/DSCF6994_ppp61j.jpg",
        name: "valve-4",
        class_size: "col-lg-3 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925508/DSCF6995_oyiuzn.jpg",
        name: "valve-5",
        class_size: "col-lg-6 col-md-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925491/23_dudd0f.jpg",
        name: "valve-1",
        class_size: "col-lg-8 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925489/20_pyiqc1.jpg",
        name: "valve-6",
        class_size: "col-lg-4 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925486/19_lk7ljl.jpg",
        name: "valve-2",
        class_size: "col-lg-4 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925485/17_1_ybn8hp.jpg",
        name: "valve-3",
        class_size: "col-lg-3 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925482/13_1_simzcj.jpg",
        name: "valve-4",
        class_size: "col-lg-5 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925482/13_1_simzcj.jpg",
        name: "valve-7",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925481/9_1_kznxoj.jpg",
        name: "valve-5",
        class_size: "col-lg-4 col-md-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925074/_MG_3194_16_hlcnye.jpg",
        name: "valve-6",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925062/542390225756f78888142d54f3d17e01_XL_ca0gtz.jpg",
        name: "valve-1",
        class_size: "col-lg-8 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925056/24_p7od6m.jpg",
        name: "valve-2",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925049/_MG_3286_2_stzsqr.jpg",
        name: "valve-3",
        class_size: "col-lg-3 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925608/DSCF6910_oqyoqr.jpg",
        name: "valve-4",
        class_size: "col-lg-3 col-6 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925059/620466077c427f141effa294382f5fba_XL_gh9jvp.jpg",
        name: "valve-5",
        class_size: "col-lg-6 col-md-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925049/_MG_3286_2_stzsqr.jpg",
        name: "valve-2",
        class_size: "col-lg-4 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925043/339a0e1449b6b4062056bc300d87e893_XL_alseyh.jpg",
        name: "valve-1",
        class_size: "col-lg-8 col-12 mb-3"
    },
    
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925101/_MG_3280_11_xbc5bv.jpg",
        name: "valve-3",
        class_size: "col-lg-6 col-12 mb-3"
    },
    {
        src: "https://res.cloudinary.com/deeytogqr/image/upload/v1723925046/fd8b0f77d767f1f6640afba6916ff67c_XL_xxfi6o.jpg",
        name: "valve-5",
        class_size: "col-lg-6 col-md-12 mb-3"
    }
]

export default function valvecomponents(props) {
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
                                <h1 className="text-uppercase">Valve Components</h1>
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-end text-center">
                            <Image
                                src={'/assets/images/product-7.jpg'}
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
                                    <h2 className="mb-0"><span>Precision-Cast </span>Valve Bodies</h2>
                                </div>
                                <p>Precision-cast valve discs designed to regulate flow with unmatched accuracy and reliability, ensuring optimal system performance.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className='row'>
                                        {
                                            images.map(img => (
                                                <div key={index} className={img.class_size} style={{height: "400px"}}>
                                                    <img loading='lazy' src={img.src} className='img-fluid w-100 h-100 object-fit-cover' alt={`valve-${index}`} />
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
                                    <h2>Want to order high precision valve component? Let's discuss your custom requirements.</h2>
                                    <Link className='btn-2 my-3' href={'/'}>
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
                                    <h2 className="mb-0 fw-bold">How Can <span>Shubham Technocast?</span> Help Me Improve My <span>Valve Performance?</span></h2>
                                </div>
                                <p>Our team of experienced engineers will work closely with you to <span>understand your specific needs and design</span> a valve component solution that <span>optimizes performance, reduces downtime, and extends the life </span> of your equipment. We leverage <span>advanced manufacturing techniques and high-quality materials</span> to deliver components that exceed your expectations.</p>
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
                                        <h6 className="fw-bold ">Diaphragm valves</h6>
                                        <bdi>Diaphragm valves. These valves utilize a flexible diaphragm that moves up and down, drawing in and expelling fluid in a rhythmic manner. Applications ...</bdi>
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
                                        <h6 className="fw-bold ">Oil valves</h6>
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
                                        <h6 className="fw-bold ">valve casting</h6>
                                        <bdi>Diaphragm valves. These valves utilize a flexible diaphragm that moves up and down, drawing in and expelling fluid in a rhythmic manner. Applications ...</bdi>
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
                                        <bdi>Diaphragm valves. These valves utilize a flexible diaphragm that moves up and down, drawing in and expelling fluid in a rhythmic manner. Applications ...</bdi>
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
                                        <bdi>Diaphragm valves. These valves utilize a flexible diaphragm that moves up and down, drawing in and expelling fluid in a rhythmic manner. Applications ...</bdi>
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
                                        <bdi>Diaphragm valves. These valves utilize a flexible diaphragm that moves up and down, drawing in and expelling fluid in a rhythmic manner. Applications ...</bdi>
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
