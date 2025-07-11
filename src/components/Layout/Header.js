import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ContactUsForm from '../ContactUsForm';

function Header(props) {

    const router = useRouter();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const yourNavigation = document.querySelector('.header-fixed');
        const stickyDiv = 'header-sticky';
        const yourHeader = yourNavigation.clientHeight;

        const handleScroll = () => {
            if (window.scrollY > yourHeader) {
                yourNavigation.classList.add(stickyDiv);
            } else {
                yourNavigation.classList.remove(stickyDiv);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const humbergeropen = () => {
        document.getElementById('hamburger-icn').classList.toggle('is-active')
    }

    return (
        <>
            <header className='header-fixed'>
                <div className='position-relative'>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='main-header-wraper'>
                                    <div className='logo-div'>
                                        <div className='position-relative'>
                                            <div className='d-flex align-items-center'>
                                                <Link href={'/'} className={router.pathname == '/' ? 'active d-block' : 'd-block'}>
                                                    <Image
                                                        src={'/assets/images/shubham_technocast.svg'}
                                                        width={150}
                                                        height={60}
                                                        quality={100}
                                                        alt="logo"
                                                    />
                                                </Link>
                                                <div className="headr-dropdwon-button">
                                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.00004 7.33398L13.6667 0.667318L0.333374 0.667318L7.00004 7.33398Z" fill="#fff"></path>
                                                    </svg>
                                                </div>
                                                <div className="headr-dropdwon-body-main">
                                                    <div className="headr-dropdwon-body-inner">

                                                        <Link href={'/fire-tech'} className={router.pathname == '/' ? 'active' : ''}>
                                                            <Image
                                                                src={'/assets/images/firetechlogo.svg'}
                                                                width={150}
                                                                height={60}
                                                                quality={100}
                                                                alt="logo"
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-wrapper">
                                        <ul>
                                            <li>
                                                <Link href={'/'} className={router.pathname == '/' ? 'active' : ''}>
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/about-us'} className={router.pathname == '/about-us' ? 'active' : ''}>
                                                    About us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/product'} className={router.pathname == '/product' ? 'active' : ''}>
                                                    Products
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/qaulity'} className={router.pathname == '/qaulity' ? 'active' : ''}>
                                                    Quality
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/career'} className={router.pathname == '/career' ? 'active' : ''}>
                                                    Careers
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/contact-us'} className={router.pathname == '/contact-us' ? 'active' : ''}>
                                                    Contact us
                                                </Link>
                                            </li>
                                            <li className="d-block d-lg-none">
                                                <div onClick={() => handleShow()} style={{cursor: "pointer !important"}} className="border-top border-bottom py-2 px-2 fw-bold text-white" rel="noopener noreferrer" target="_blank">
                                                    Technocast Brochure
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="hamburger d-lg-none d-block" id="hamburger-icn" onClick={() => humbergeropen()}>
                                            <span className="line"></span>
                                            <span className="line"></span>
                                            <span className="line"></span>
                                        </div>
                                    </div>
                                    <div className="call-div d-lg-block d-none">
                                        {/* <div className="d-flex align-items-center">
                                            <svg width="40" className='me-3' height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="40" height="40" rx="20" fill="white" />
                                                <path d="M21.375 10.8335C21.375 10.8335 23.514 11.028 26.2364 13.7503C28.9587 16.4727 29.1532 18.6117 29.1532 18.6117" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M22.0232 14.0742C22.0232 14.0742 22.9306 14.3335 24.2918 15.6947C25.653 17.0559 25.9123 17.9633 25.9123 17.9633" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M22.8423 22.7749L23.3861 23.2915V23.2915L22.8423 22.7749ZM23.2598 22.3354L22.716 21.8189V21.8189L23.2598 22.3354ZM25.4751 22.028L25.1009 22.678H25.1009L25.4751 22.028ZM27.2264 23.036L26.8522 23.686L27.2264 23.036ZM27.7199 26.1952L28.2637 26.7117L27.7199 26.1952ZM26.4177 27.5662L25.8739 27.0497L26.4177 27.5662ZM25.2033 28.2162L25.2769 28.9625L25.2033 28.2162ZM16.1641 24.1023L15.6203 24.6188L16.1641 24.1023ZM11.7526 15.3854L11.0037 15.4256L11.0037 15.4256L11.7526 15.3854ZM17.4248 17.0713L17.9686 17.5878L17.4248 17.0713ZM17.6877 16.7945L18.2315 17.311H18.2315L17.6877 16.7945ZM17.8314 14.2187L18.4438 13.7857H18.4438L17.8314 14.2187ZM16.6755 12.5838L16.0631 13.0168L16.0631 13.0168L16.6755 12.5838ZM13.823 12.3079L14.3668 12.8244L14.3668 12.8244L13.823 12.3079ZM12.3842 13.8227L11.8404 13.3062L11.8404 13.3062L12.3842 13.8227ZM19.1412 20.9679L19.685 20.4514L19.1412 20.9679ZM23.3861 23.2915L23.8036 22.8519L22.716 21.8189L22.2985 22.2584L23.3861 23.2915ZM25.1009 22.678L26.8522 23.686L27.6005 22.386L25.8492 21.3779L25.1009 22.678ZM27.1761 25.6787L25.8739 27.0497L26.9615 28.0827L28.2637 26.7117L27.1761 25.6787ZM25.1296 27.4698C23.8304 27.598 20.4182 27.492 16.7079 23.5857L15.6203 24.6188C19.6958 28.9095 23.5888 29.1292 25.2769 28.9625L25.1296 27.4698ZM16.7079 23.5857C13.1655 19.8563 12.5751 16.7151 12.5016 15.3452L11.0037 15.4256C11.0955 17.1349 11.8208 20.6187 15.6203 24.6188L16.7079 23.5857ZM17.9686 17.5878L18.2315 17.311L17.1439 16.278L16.881 16.5548L17.9686 17.5878ZM18.4438 13.7857L17.2879 12.1508L16.0631 13.0168L17.219 14.6517L18.4438 13.7857ZM13.2792 11.7914L11.8404 13.3062L12.928 14.3392L14.3668 12.8244L13.2792 11.7914ZM17.4248 17.0713C16.881 16.5548 16.8803 16.5555 16.8796 16.5563C16.8794 16.5565 16.8787 16.5573 16.8782 16.5578C16.8773 16.5588 16.8763 16.5598 16.8753 16.5609C16.8734 16.563 16.8714 16.5652 16.8693 16.5674C16.8651 16.572 16.8607 16.5769 16.8561 16.5822C16.8469 16.5928 16.8369 16.6048 16.8262 16.6183C16.8048 16.6453 16.7808 16.6783 16.7557 16.7175C16.7054 16.7962 16.6512 16.8991 16.6055 17.0277C16.5124 17.2893 16.4627 17.6329 16.5251 18.0589C16.6476 18.8949 17.1932 20.006 18.5974 21.4844L19.685 20.4514C18.3805 19.078 18.0678 18.2408 18.0093 17.8415C17.9812 17.6498 18.0103 17.554 18.0187 17.5306C18.0236 17.5166 18.0258 17.5156 18.0192 17.526C18.0159 17.5311 18.0106 17.5389 18.0024 17.5492C17.9984 17.5543 17.9936 17.5601 17.988 17.5666C17.9852 17.5698 17.9821 17.5732 17.9789 17.5767C17.9773 17.5785 17.9757 17.5803 17.9739 17.5822C17.9731 17.5831 17.9722 17.584 17.9713 17.585C17.9709 17.5854 17.9702 17.5862 17.97 17.5864C17.9693 17.5871 17.9686 17.5878 17.4248 17.0713ZM18.5974 21.4844C19.9971 22.9581 21.0631 23.5473 21.8873 23.6812C22.3109 23.7499 22.6564 23.6953 22.9201 23.5913C23.0489 23.5405 23.1511 23.4807 23.2283 23.426C23.2668 23.3987 23.299 23.3727 23.3251 23.3498C23.3382 23.3383 23.3498 23.3276 23.3599 23.3178C23.365 23.3129 23.3697 23.3083 23.3741 23.3039C23.3763 23.3017 23.3784 23.2995 23.3804 23.2975C23.3814 23.2964 23.3823 23.2954 23.3833 23.2944C23.3838 23.2939 23.3845 23.2932 23.3847 23.2929C23.3854 23.2922 23.3861 23.2915 22.8423 22.7749C22.2985 22.2584 22.2992 22.2577 22.2999 22.257C22.3001 22.2568 22.3008 22.256 22.3013 22.2556C22.3022 22.2546 22.303 22.2537 22.3039 22.2528C22.3057 22.251 22.3074 22.2492 22.3091 22.2475C22.3125 22.2441 22.3158 22.2409 22.3189 22.2379C22.3251 22.2319 22.3308 22.2267 22.3359 22.2222C22.3462 22.2131 22.3544 22.2068 22.3605 22.2025C22.3728 22.1938 22.3763 22.1933 22.3698 22.1959C22.3627 22.1987 22.2908 22.227 22.1278 22.2006C21.7786 22.1438 20.994 21.8295 19.685 20.4514L18.5974 21.4844ZM17.2879 12.1508C16.3379 10.8072 14.4325 10.5772 13.2792 11.7914L14.3668 12.8244C14.8167 12.3507 15.6143 12.3821 16.0631 13.0168L17.2879 12.1508ZM12.5016 15.3452C12.4831 15.0006 12.6327 14.6501 12.928 14.3392L11.8404 13.3062C11.3407 13.8323 10.9576 14.5667 11.0037 15.4256L12.5016 15.3452ZM25.8739 27.0497C25.625 27.3117 25.3704 27.446 25.1296 27.4698L25.2769 28.9625C25.981 28.893 26.5482 28.5178 26.9615 28.0827L25.8739 27.0497ZM18.2315 17.311C19.1402 16.3544 19.2031 14.8597 18.4438 13.7857L17.219 14.6517C17.5898 15.1761 17.5306 15.8709 17.1439 16.278L18.2315 17.311ZM26.8522 23.686C27.5709 24.0996 27.709 25.1177 27.1761 25.6787L28.2637 26.7117C29.4887 25.422 29.1312 23.267 27.6005 22.386L26.8522 23.686ZM23.8036 22.8519C24.1366 22.5013 24.6554 22.4215 25.1009 22.678L25.8492 21.3779C24.8179 20.7843 23.5373 20.9542 22.716 21.8189L23.8036 22.8519Z" fill="#141414" />
                                            </svg>
                                            <div >
                                                <p className="mb-1">
                                                    CALL US NOW
                                                </p>
                                                <Link href="tel:+91 9714028500">
                                                    +91 9714028500
                                                </Link>
                                            </div>
                                        </div> */}

                                        <div onClick={() => handleShow()} style={{cursor: "pointer !important"}} className="border-top border-bottom py-2 text-white">
                                            Technocast Brochure
                                        </div>

                                        {/* <div type="button" data-toggle="modal" data-target="#brochureForm" className="text-white border-top border-bottom py-2 cursor-pointer">
                                            Brochure
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <ContactUsForm show_comments={false} btn_ctx={"Download"} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Header;