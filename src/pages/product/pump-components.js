import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";



const images = [
    {
        src: "/assets/images/gallery-1.png",
        original: "/assets/images/gallery-1.png",
        width: 1000,
        height: 800,
        caption: "",
    },
    {
        src: "/assets/images/gallery-2.png",
        original: "/assets/images/gallery-2.png",
        width: 1000,
        height: 400,
        caption: "",
    },
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
            <section className="bg-image bg-pump-componet no-margin h-auto">
                <div className="container h-100 ">
                    <div className="row h-100 align-items-center common-space">
                        <div className="col-lg-6 text-lg-start text-center mb-lg-0 mb-3">
                            <div className="common-title">
                                <h1>Pump Components</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-end text-center">
                            <Image
                                src={'/assets/images/pump-1.png'}
                                width={450}
                                height={450}
                                quality={100}
                                alt="logo"
                            // className='img-fluid'
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
                                <span>Lorem ipsum is simple dummy</span>
                            </div>
                        </div>
                        <div className="col-12 py-2">
                            <div className="gradiant-txt qaulity-txt">
                                <div className="d-flex align-items-center mb-3">
                                    <h2 className="mb-0">Product    <span>Photo Gallery</span></h2>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-12">
                                    {/* <Gallery
                                        images={images}
                                        onClick={handleClick}
                                        enableImageSelection={false}
                                    />
                                    {!!currentImage && (
                                        <Lightbox
                                            mainSrc={currentImage.original}
                                            imageTitle={currentImage.caption}
                                            mainSrcThumbnail={currentImage.src}
                                            nextSrc={nextImage.original}
                                            nextSrcThumbnail={nextImage.src}
                                            prevSrc={prevImage.original}
                                            prevSrcThumbnail={prevImage.src}
                                            onCloseRequest={handleClose}
                                            onMovePrevRequest={handleMovePrev}
                                            onMoveNextRequest={handleMoveNext}
                                        />
                                    )} */}
                                    <div className='row'>
                                        <div className='col-lg-8 col-8 mb-3'>
                                            <img src="/assets/images/gallery-1.png" className='img-fluid w-100' alt="Image 1" />
                                        </div>
                                        <div className='col-lg-4 col-4 mb-3'>
                                            <img src="/assets/images/gallery-2.png" className='img-fluid w-100 h-100' alt="Image 1" />
                                        </div>
                                        <div className='col-lg-3 col-6 mb-3'>
                                            <img src="/assets/images/gallery-3.png" className='img-fluid w-100 h-100' alt="Image 1" />
                                        </div>
                                        <div className='col-lg-3 col-6 mb-3'>
                                            <img src="/assets/images/gallery-4.png" className='img-fluid w-100 h-100' alt="Image 1" />
                                        </div>
                                        <div className='col-lg-6 col-md-6 mb-3'>
                                            <img src="/assets/images/gallery-5.png" className='img-fluid w-100 h-100' alt="Image 1" />
                                        </div>
                                        <div className='col-lg-4 col-6 mb-3'>
                                            <img src="/assets/images/gallery-6.png" className='img-fluid w-100 h-100' alt="Image 1" />
                                        </div>
                                        <div className='col-lg-8 col-6 mb-3'>
                                            <img src="/assets/images/gallery-7.png" className='img-fluid w-100 h-100' alt="Image 1" />
                                        </div>
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
                                    <h2>If you’re interested in ordering a Pump Components or if you have additional questions, we will be happy to talk to you.</h2>
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
                            <button className="btn-1" disabled>Lorem ipsum</button>
                            <div className="gradiant-txt qaulity-txt mt-3">
                                <div className="d-flex align-items-center mb-3">
                                    <h2 className="mb-0 fw-bold">What types of <span>Pump Components can be ordered</span> from Shubham Technocast? <span>The main types of Pump Components</span>  that are produced at Shubham Technocast.</h2>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 mb-3 text-lg-center text-center'>
                            <Image
                                src={'/assets/images/gallery-2.png'}
                                width={700}
                                height={350}
                                quality={100}
                                alt="logo"
                                objectFit={'cover'}
                                className='img-fluid h-auto w-75'
                            />
                        </div>
                        <div className='col-md-6 mb-3'>
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
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
}
