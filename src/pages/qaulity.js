import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function qaulity(props) {
    return (
        <Layout>
            <section className="bg-image bg-quality no-margin">
                <div className="container h-100">
                    <div className="row h-100 align-items-end">
                        <div className="col-xl-12 mx-auto">
                            <div className="top-header-txt d-sm-flex align-items-end text-sm-start text-center">
                                <h1 className="text-white mb-sm-3 mb-4">Quality Control & Inspection <br /> of Equipment</h1>
                                <div className='cust-contact ms-auto'>
                                    <Link href="/contact-us" className='cust-contact-btn'>
                                        Contact Us

                                        <svg width="25" className='ms-3' height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.9998 31.8332C24.7443 31.8332 31.8332 24.7443 31.8332 15.9998C31.8332 7.25533 24.7443 0.166504 15.9998 0.166504C7.25533 0.166504 0.166504 7.25533 0.166504 15.9998C0.166504 24.7443 7.25533 31.8332 15.9998 31.8332ZM12.4373 11.2498C12.4373 10.594 12.969 10.0623 13.6248 10.0623H20.7498C21.4057 10.0623 21.9373 10.594 21.9373 11.2498V18.3748C21.9373 19.0307 21.4057 19.5623 20.7498 19.5623C20.094 19.5623 19.5623 19.0307 19.5623 18.3748V14.1167L12.0895 21.5895C11.6258 22.0533 10.8739 22.0533 10.4101 21.5895C9.9464 21.1258 9.9464 20.3739 10.4101 19.9102L17.883 12.4373H13.6248C12.969 12.4373 12.4373 11.9057 12.4373 11.2498Z" fill="#141414" />
                                        </svg>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="top-circle-bg common-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <div className="bottom-line-txt">
                                <span>Ensuring Excellence in Every Component</span>
                            </div>
                        </div>
                        <div className="col-12 py-2">
                            <div className="gradiant-txt qaulity-txt">
                                <h2>Quality  <span>Assurance</span></h2>
                                <p>
                                    SHUBHAM TECHNOCAST takes quality as our Enterprise life,and numerous quality practices have been set up to control the quality of the castings and machining. We are consistently do whatever we can do to insure our customers receive the parts they want. Based on the recognition that rigid quality control is paramount to our customers, we take quality as our self-esteem. Well organized equipment and knowledgeable employees are the keys to our outstanding record of quality.
                                </p>
                                <p>
                                    The strict internal standards in SHUBHAM TECHNOCAST require us to proceed strict testing and quality control procedures, beginning from the design stages all the way through final inspection. SHUBHAM TECHNOCAST is always willing to take additional steps in testing and quality control procedures so as to match or even beyond the most exacting customer requirements.
                                </p>
                                <p>
                                    With fully-equipped materials testing laboratory and spectrometers, hardness and tensile testing machines, our colleagues could proceed the testing totally according to your unique strict requirements. We utilize NDT facility for in-house magnetic particle testing and liquid penetrant testing. Additionally, we can offer other test service with fully certified X-ray flaw testing and ultrasonic flaw testing vendors in our area from the third-party.
                                </p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/quality-1.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="glass-effect">
                                            <h2>Chemical Analysis</h2>
                                            <ul>
                                                <li>
                                                    <div className="d-flex align-items-center">

                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="white" />
                                                        </svg>
                                                        <p className="ms-2 mb-0">In house Spectrometer</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">

                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="white" />
                                                        </svg>
                                                        <p className="ms-2 mb-0">All heats poured are tested on-line Spectrometer.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">

                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="white" />
                                                        </svg>
                                                        <p className="ms-2 mb-0">All the scrap used are also tested before using.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">

                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="white" />
                                                        </svg>
                                                        <p className="ms-2 mb-0">Test specimens are stored for particular period.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/quality-3.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="glass-effect">
                                            <h2>Machining Shop</h2>
                                            <ul>
                                                <li>
                                                    <div className="d-flex align-items-center">

                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="white" />
                                                        </svg>
                                                        <p className="ms-2 mb-0">CNC turning lathe</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">

                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="white" />
                                                        </svg>
                                                        <p className="ms-2 mb-0">Milling, VTL & VMC</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">

                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="white" />
                                                        </svg>
                                                        <p className="ms-2 mb-0">Radial Drill, Conventional Lathe</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">

                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="white" />
                                                        </svg>
                                                        <p className="ms-2 mb-0">Pressure Testing, CMM Machine</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/quality-2.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="glass-effect">
                                            <h2>Ferrous</h2>
                                            <ul>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="white" />
                                                            </svg>
                                                        </div>
                                                        <p className="ms-2 mb-0">Austenitic Stainless Steel, Carbon Steel, Low Alloy Steel, Nickle Based Super Alloy, Heat Resisting Steel, Martensitic Stainless Steel, Duplex Steel, Precipitation Hardened Steel.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/quality-4.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="glass-effect">
                                            <h2>Non Ferrous</h2>
                                            <ul>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="10" height="10" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.5)" fill="white" />
                                                            </svg>
                                                        </div>
                                                        <p className="ms-2 mb-0">Phosphor Bronze 1, Phosphor Bronze 2, Aluminum Bronze, Brass, Copper, Aluminum.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-2">
                            <div className="gradiant-txt qaulity-txt">
                                <p>The following photos show how we inspect the products and control the quality for the requirements of chemical composition, mechanical properties, geometrical and dimensional tolerances. And other special tests such as thickness of surface film, inside defects testing, dynamic balancing, static balancing, air pressure testing, water pressure testing and so on. </p>
                            </div>
                        </div>
                        <div className="col-12 py-2">
                            <div className="row">
                                <div className="col-lg-4 col-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/quality-5.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="bottom-white-img">
                                            <h2>Dimension Checking</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/quality-6.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="bottom-white-img">
                                            <h2>Carbon Sulfur Analyzer</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/quality-7.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="bottom-white-img">
                                            <h2>Carbon Sulfur Analyzer</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/quality-8.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="bottom-white-img">
                                            <h2>Hardness Tester</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/quality-9.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="bottom-white-img">
                                            <h2>Dimension Testing</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/quality-10.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="bottom-white-img">
                                            <h2>Inspection Lab</h2>
                                        </div>
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

export default qaulity;