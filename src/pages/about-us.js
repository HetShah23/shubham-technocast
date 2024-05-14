import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function aboutus(props) {
    return (
        <Layout>
            <section className="bg-image bg-about no-margin">
                <div className="container h-100">
                    <div className="row h-100 align-items-end">
                        <div className="col-xl-12 mx-auto">
                            <div className="top-header-txt d-sm-flex align-items-end text-sm-start text-center">
                                <h1 className="text-white mb-sm-3 mb-4">Leaders in The Casting Industry  <br /> Since 2014</h1>
                                <div className='cust-contact ms-auto'>
                                    <Link href="/contact-us" className='cust-contact-btn'>
                                        Contact Us
                                        <svg width="25" className='ms-3' height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 31.8332C24.7443 31.8332 31.8332 24.7443 31.8332 15.9998C31.8332 7.25533 24.7443 0.166504 15.9998 0.166504C7.25533 0.166504 0.166504 7.25533 0.166504 15.9998C0.166504 24.7443 7.25533 31.8332 15.9998 31.8332ZM12.4373 11.2498C12.4373 10.594 12.969 10.0623 13.6248 10.0623H20.7498C21.4057 10.0623 21.9373 10.594 21.9373 11.2498V18.3748C21.9373 19.0307 21.4057 19.5623 20.7498 19.5623C20.094 19.5623 19.5623 19.0307 19.5623 18.3748V14.1167L12.0895 21.5895C11.6258 22.0533 10.8739 22.0533 10.4101 21.5895C9.9464 21.1258 9.9464 20.3739 10.4101 19.9102L17.883 12.4373H13.6248C12.969 12.4373 12.4373 11.9057 12.4373 11.2498Z" fill="#141414" />
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
                        <div className="col-md-4 mb-md-0 mb-3 text-ms-start text-center">
                            <Image
                                src={'/assets/images/about-client.png'}
                                width={450}
                                height={450}
                                quality={100}
                                alt="logo"
                                loading='lazy'
                                className='img-fluid'
                            />
                        </div>
                        <div className='col-md-8'>
                            <div className="gradiant-txt qaulity-txt">
                                <h2>Welcome... <br />   <span> To Shubham Technocast</span></h2>
                                <p>At SHUBHAM TECHNOCAST, we commit to provide you with the best casting & deliver just-in-time. Customer’s requirements are given importance as well quality is maintained. Our team is completely trained & well equipped to meet our customers ‘Requirements’.</p>
                                <p>SHUBHAM TECHNOCAST has started in the year 2014 for manufacture of Ferrous & Non Ferrous Investment Casting as per international standard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="common-space cust-bottom-space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-md-0 mb-3">
                            <div className="bottom-line-txt">
                                <span>Who we are and What we can</span>
                            </div>
                            <div className="gradiant-txt qaulity-txt mt-3">
                                <h2>We are the best always <br />  <span>in this Industry</span></h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                                </p>
                                <p>
                                    Printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                                <ul >
                                    <li className='d-flex align-items-center mb-3'>
                                        <div className='me-2'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.9389 9.19266C21.556 8.7925 21.1599 8.38016 21.0106 8.01758C20.8725 7.68547 20.8644 7.135 20.8562 6.6018C20.841 5.61055 20.8248 4.48727 20.0437 3.70625C19.2627 2.92523 18.1395 2.90898 17.1482 2.89375C16.615 2.88562 16.0645 2.8775 15.7324 2.73937C15.3709 2.59008 14.9575 2.19398 14.5573 1.81109C13.8566 1.13773 13.0603 0.375 12 0.375C10.9397 0.375 10.1445 1.13773 9.44266 1.81109C9.0425 2.19398 8.63016 2.59008 8.26758 2.73937C7.9375 2.8775 7.385 2.88562 6.8518 2.89375C5.86055 2.90898 4.73727 2.92523 3.95625 3.70625C3.17523 4.48727 3.16406 5.61055 3.14375 6.6018C3.13562 7.135 3.1275 7.68547 2.98937 8.01758C2.84008 8.37914 2.44398 8.7925 2.06109 9.19266C1.38773 9.89344 0.625 10.6897 0.625 11.75C0.625 12.8103 1.38773 13.6055 2.06109 14.3073C2.44398 14.7075 2.84008 15.1198 2.98937 15.4824C3.1275 15.8145 3.13562 16.365 3.14375 16.8982C3.15898 17.8895 3.17523 19.0127 3.95625 19.7937C4.73727 20.5748 5.86055 20.591 6.8518 20.6062C7.385 20.6144 7.93547 20.6225 8.26758 20.7606C8.62914 20.9099 9.0425 21.306 9.44266 21.6889C10.1434 22.3623 10.9397 23.125 12 23.125C13.0603 23.125 13.8555 22.3623 14.5573 21.6889C14.9575 21.306 15.3698 20.9099 15.7324 20.7606C16.0645 20.6225 16.615 20.6144 17.1482 20.6062C18.1395 20.591 19.2627 20.5748 20.0437 19.7937C20.8248 19.0127 20.841 17.8895 20.8562 16.8982C20.8644 16.365 20.8725 15.8145 21.0106 15.4824C21.1599 15.1209 21.556 14.7075 21.9389 14.3073C22.6123 13.6066 23.375 12.8103 23.375 11.75C23.375 10.6897 22.6123 9.89445 21.9389 9.19266ZM16.6373 9.88734L10.9498 15.5748C10.8744 15.6504 10.7848 15.7103 10.6861 15.7512C10.5875 15.7921 10.4818 15.8131 10.375 15.8131C10.2682 15.8131 10.1625 15.7921 10.0639 15.7512C9.96523 15.7103 9.87562 15.6504 9.80016 15.5748L7.36266 13.1373C7.28717 13.0619 7.22728 12.9722 7.18643 12.8736C7.14558 12.775 7.12455 12.6693 7.12455 12.5625C7.12455 12.4557 7.14558 12.35 7.18643 12.2514C7.22728 12.1528 7.28717 12.0631 7.36266 11.9877C7.51511 11.8352 7.72189 11.7495 7.9375 11.7495C8.04426 11.7495 8.14997 11.7706 8.2486 11.8114C8.34724 11.8523 8.43685 11.9122 8.51234 11.9877L10.375 13.8513L15.4877 8.73766C15.5631 8.66217 15.6528 8.60228 15.7514 8.56143C15.85 8.52058 15.9557 8.49955 16.0625 8.49955C16.1693 8.49955 16.275 8.52058 16.3736 8.56143C16.4722 8.60228 16.5619 8.66217 16.6373 8.73766C16.7128 8.81315 16.7727 8.90277 16.8136 9.0014C16.8544 9.10003 16.8755 9.20574 16.8755 9.3125C16.8755 9.41926 16.8544 9.52497 16.8136 9.6236C16.7727 9.72223 16.7128 9.81185 16.6373 9.88734Z" fill="#15B92F" />
                                            </svg>
                                        </div>
                                        <p className='mb-0 fw-bold'>We always care about our client satisfaction and our deal</p>
                                    </li>
                                    <li className='d-flex align-items-center'>
                                        <div className='me-2'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.9389 9.19266C21.556 8.7925 21.1599 8.38016 21.0106 8.01758C20.8725 7.68547 20.8644 7.135 20.8562 6.6018C20.841 5.61055 20.8248 4.48727 20.0437 3.70625C19.2627 2.92523 18.1395 2.90898 17.1482 2.89375C16.615 2.88562 16.0645 2.8775 15.7324 2.73937C15.3709 2.59008 14.9575 2.19398 14.5573 1.81109C13.8566 1.13773 13.0603 0.375 12 0.375C10.9397 0.375 10.1445 1.13773 9.44266 1.81109C9.0425 2.19398 8.63016 2.59008 8.26758 2.73937C7.9375 2.8775 7.385 2.88562 6.8518 2.89375C5.86055 2.90898 4.73727 2.92523 3.95625 3.70625C3.17523 4.48727 3.16406 5.61055 3.14375 6.6018C3.13562 7.135 3.1275 7.68547 2.98937 8.01758C2.84008 8.37914 2.44398 8.7925 2.06109 9.19266C1.38773 9.89344 0.625 10.6897 0.625 11.75C0.625 12.8103 1.38773 13.6055 2.06109 14.3073C2.44398 14.7075 2.84008 15.1198 2.98937 15.4824C3.1275 15.8145 3.13562 16.365 3.14375 16.8982C3.15898 17.8895 3.17523 19.0127 3.95625 19.7937C4.73727 20.5748 5.86055 20.591 6.8518 20.6062C7.385 20.6144 7.93547 20.6225 8.26758 20.7606C8.62914 20.9099 9.0425 21.306 9.44266 21.6889C10.1434 22.3623 10.9397 23.125 12 23.125C13.0603 23.125 13.8555 22.3623 14.5573 21.6889C14.9575 21.306 15.3698 20.9099 15.7324 20.7606C16.0645 20.6225 16.615 20.6144 17.1482 20.6062C18.1395 20.591 19.2627 20.5748 20.0437 19.7937C20.8248 19.0127 20.841 17.8895 20.8562 16.8982C20.8644 16.365 20.8725 15.8145 21.0106 15.4824C21.1599 15.1209 21.556 14.7075 21.9389 14.3073C22.6123 13.6066 23.375 12.8103 23.375 11.75C23.375 10.6897 22.6123 9.89445 21.9389 9.19266ZM16.6373 9.88734L10.9498 15.5748C10.8744 15.6504 10.7848 15.7103 10.6861 15.7512C10.5875 15.7921 10.4818 15.8131 10.375 15.8131C10.2682 15.8131 10.1625 15.7921 10.0639 15.7512C9.96523 15.7103 9.87562 15.6504 9.80016 15.5748L7.36266 13.1373C7.28717 13.0619 7.22728 12.9722 7.18643 12.8736C7.14558 12.775 7.12455 12.6693 7.12455 12.5625C7.12455 12.4557 7.14558 12.35 7.18643 12.2514C7.22728 12.1528 7.28717 12.0631 7.36266 11.9877C7.51511 11.8352 7.72189 11.7495 7.9375 11.7495C8.04426 11.7495 8.14997 11.7706 8.2486 11.8114C8.34724 11.8523 8.43685 11.9122 8.51234 11.9877L10.375 13.8513L15.4877 8.73766C15.5631 8.66217 15.6528 8.60228 15.7514 8.56143C15.85 8.52058 15.9557 8.49955 16.0625 8.49955C16.1693 8.49955 16.275 8.52058 16.3736 8.56143C16.4722 8.60228 16.5619 8.66217 16.6373 8.73766C16.7128 8.81315 16.7727 8.90277 16.8136 9.0014C16.8544 9.10003 16.8755 9.20574 16.8755 9.3125C16.8755 9.41926 16.8544 9.52497 16.8136 9.6236C16.7727 9.72223 16.7128 9.81185 16.6373 9.88734Z" fill="#15B92F" />
                                            </svg>
                                        </div>
                                        <p className='mb-0 fw-bold'>Our quality is always profitable for you all time</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <Image
                                src={'/assets/images/about-company.png'}
                                width={450}
                                height={600}
                                quality={100}
                                alt="logo"
                                loading='lazy'
                                className='img-fluid'
                            />
                        </div>

                    </div>
                </div>
            </section>
            <section className="common-space about-bg-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 top-negative-margin about-margin ">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/market-up-1.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="glass-effect text-center">
                                            <h2>Mission</h2>
                                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/market-up-2.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="glass-effect text-center">
                                            <h2>Vision</h2>
                                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/market-up-3.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="glass-effect text-center">
                                            <h2>Core Value</h2>
                                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 pt-5">
                            <div className="common-title">
                                <h2 className="text-center">Markets Served</h2>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/market-1.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="glass-effect text-center">
                                            <h2>Investment Casting Services</h2>
                                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/market-2.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="glass-effect text-center">
                                            <h2>Investment Casting Services</h2>
                                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/market-3.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="glass-effect text-center">
                                            <h2>Investment Casting Services</h2>
                                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/market-4.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="glass-effect text-center">
                                            <h2>Investment Casting Services</h2>
                                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className="common-space top-negative-margin about-margin">
                <div className="container">
                    <div className="row">
                        <div className="white-box bg-light-theme">
                            <div className="row">
                                <div className="col-md-5">
                                    <Image
                                        src={'/assets/images/about-form-1.png'}
                                        width={500}
                                        height={500}
                                        quality={100}
                                        alt="logo"
                                        loading='lazy'
                                        className='img-fluid'
                                    />
                                </div>
                                <div className='col-md-7'>
                                    <div className="gradiant-txt qaulity-txt">
                                        <p className=' txt-theme-color'>We are waiting for you</p>
                                        <h2 ><span className='text-black'> Request a Quote</span></h2>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6 form-group mb-3'>
                                            <label className='label-txt'>Name</label>
                                            <input type='text' className='form-control cust-input' placeholder='Enter your name' />
                                        </div>
                                        <div className='col-6 form-group mb-3'>
                                            <label className='label-txt'>Email</label>
                                            <input type='text' className='form-control cust-input' placeholder='Enter your email' />
                                        </div>
                                        <div className='col-6 form-group mb-3'>
                                            <label className='label-txt'>Phone</label>
                                            <input type='tel' className='form-control cust-input' placeholder='Enter your phone number' />
                                        </div>
                                        <div className='col-6 form-group mb-3'>
                                            <label className='label-txt'>Subject</label>
                                            <input type='text' className='form-control cust-input' placeholder='Enter your subject' />
                                        </div>
                                        <div className='col-12 form-group mb-3'>
                                            <label className='label-txt'>Message</label>
                                            <textarea className='form-control cust-input' rows='5' placeholder='Write here' />
                                        </div>
                                        <div className='col-12'>
                                            <button className='btn-1 w-100'>Send Now</button>
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
                    <div className="row">
                        <div className="col-12 mb-2">
                            <div className="bottom-line-txt">
                                <span>Lorem ipsum is simple dummy</span>
                            </div>
                        </div>
                        <div className="col-12 py-2">
                            <div className="gradiant-txt qaulity-txt">
                                <h2>Client’s   <span>Visiting</span></h2>
                            </div>
                        </div>

                        <div className="col-12 py-2">
                            <div className="row">
                                <div className="col-lg-4 col-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/about-client-1.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="bottom-white-img">
                                            <h2>USA Client Factory Visiting for Rubber Compression</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/about-client-2.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="bottom-white-img">
                                            <h2>USA Client Factory Visiting for Rubber Compression</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/about-client-3.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="bottom-white-img">
                                            <h2>USA Client Factory Visiting for Rubber Compression</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/about-client-6.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="bottom-white-img">
                                            <h2>USA Client Factory Visiting for Rubber Compression</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/about-client-4.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="bottom-white-img">
                                            <h2>USA Client Factory Visiting for Rubber Compression</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6 mb-3">
                                    <div className="image-div-hoverable">
                                        <Image
                                            src={'/assets/images/about-client-5.png'}
                                            width={695}
                                            height={458}
                                            quality={100}
                                            alt="logo"
                                            loading='lazy'
                                            className='img-fluid'
                                        />
                                        <div className="bottom-white-img">
                                            <h2>USA Client Factory Visiting for Rubber Compression</h2>
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
