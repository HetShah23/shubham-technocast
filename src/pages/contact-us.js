import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import React from 'react';

function contactus(props) {
    return (
        <Layout>
            <section className="bg-image bg-contact">
                <div className="container h-100">
                    <div className="row h-100 mt-md-0 mt-5 align-items-lg-center">
                        <div className="col-xl-8 col-lg-10 mx-auto">
                            <div className="top-header-txt text-center">
                                <h1 className="text-white">We Would Love to Chat About Your Project.</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="top-negative-margin top-circle-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="white-box">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="bottom-line-txt">
                                            <span>Lorem ipsum is simple dummy</span>
                                        </div>
                                    </div>
                                    <div className="col-12 py-2">
                                        <div className="gradiant-txt">
                                            <h2>Get in touch with <span>shubham technocast</span></h2>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <form className="row">
                                            <div className="col-12 form-group mb-3">
                                                <label className="label-txt">Name</label>
                                                <input type="text" className="form-control cust-input" placeholder="Enter your name" />
                                            </div>
                                            <div className="col-12 form-group mb-3">
                                                <label className="label-txt">Email</label>
                                                <input type="email" className="form-control cust-input" placeholder="Enter your email" />
                                            </div>
                                            <div className="col-12 form-group mb-3">
                                                <label className="label-txt">Country</label>
                                                <select className="form-control cust-input form-select">
                                                    <option>India</option>
                                                </select>
                                            </div>
                                            <div className="col-12 form-group mb-3">
                                                <label className="label-txt">Phone</label>
                                                <input type="tel" className="form-control cust-input" placeholder="Enter your phone number" />
                                            </div>
                                            <div className="col-12 form-group mb-3">
                                                <label className="label-txt">Comments</label>
                                                <textarea className="form-control cust-input" placeholder="Write here"></textarea>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button className="btn-1">submit</button>
                                            </div>
                                        </form>
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
                        <div className="col-md-12">
                            <div className="white-box">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="white-box gray-bg">
                                            <div className="small-title">
                                                <div className="d-flex align-items-center">
                                                    <svg width="20" className='me-2' height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.5" d="M10 0C4.47715 0 0 5.00323 0 10.625C0 16.2027 3.19166 22.2655 8.17133 24.5931C9.33218 25.1356 10.6678 25.1356 11.8287 24.5931C16.8083 22.2655 20 16.2027 20 10.625C20 5.00323 15.5228 0 10 0Z" fill="url(#paint0_linear_314_9)" />
                                                        <path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" fill="url(#paint1_linear_314_9)" />
                                                        <defs>
                                                            <linearGradient id="paint0_linear_314_9" x1="4.49104e-08" y1="-0.277778" x2="22.4595" y2="2.17177" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#2A519A" />
                                                                <stop offset="1" stop-color="#154090" />
                                                            </linearGradient>
                                                            <linearGradient id="paint1_linear_314_9" x1="6.875" y1="6.80556" x2="13.8475" y2="7.75612" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#2A519A" />
                                                                <stop offset="1" stop-color="#154090" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>

                                                    <span>Address</span>
                                                </div>
                                                <p className='mt-2'>Survey Number : 282, Village : Shapar, Taluka : Kotda Sangani, <br /> Dist. Rajkot- 360024, Gujarat (INDIA)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="white-box gray-bg">
                                            <div className="row">
                                                <div className="col-lg-6 mb-lg-0 mb-4">
                                                    <div className="small-title">
                                                        <div className="d-flex align-items-center">

                                                            <svg width="25" className='me-2' height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.5" d="M15.6952 16.6221L15.1259 17.2215C15.1259 17.2215 13.7727 18.6462 10.0789 14.7574C6.38514 10.8685 7.73838 9.44384 7.73838 9.44384L8.0969 9.06639C8.98009 8.13655 9.06335 6.64371 8.2928 5.55388L6.71657 3.32452C5.76286 1.97562 3.91995 1.79744 2.82681 2.9483L0.864812 5.01392C0.322786 5.58457 -0.0404353 6.32431 0.00360947 7.14492C0.116294 9.24432 1.01339 13.7613 6.0192 19.0315C11.3277 24.6203 16.3085 24.8424 18.3453 24.6414C18.9896 24.5778 19.5499 24.2303 20.0014 23.755L21.7771 21.8855C22.9757 20.6236 22.6378 18.4602 21.1042 17.5775L18.716 16.2029C17.7091 15.6233 16.4822 15.7936 15.6952 16.6221Z" fill="url(#paint0_linear_315_12)" />
                                                                <path d="M12.8244 0.787289C12.9071 0.276177 13.3903 -0.0705412 13.9014 0.0122056C13.933 0.0182616 14.0348 0.0372871 14.0882 0.0491654C14.1948 0.0729193 14.3436 0.109492 14.5291 0.163524C14.9001 0.271578 15.4183 0.449583 16.0404 0.734754C17.2857 1.3057 18.943 2.30445 20.6627 4.0242C22.3825 5.74395 23.3812 7.40122 23.9522 8.64657C24.2373 9.26859 24.4153 9.78684 24.5234 10.1578C24.5774 10.3433 24.614 10.4921 24.6378 10.5988C24.6496 10.6521 24.6583 10.6949 24.6644 10.7266L24.6716 10.7656C24.7543 11.2767 24.4107 11.7798 23.8996 11.8626C23.39 11.9451 22.9099 11.6 22.8251 11.0913C22.8225 11.0777 22.8153 11.041 22.8076 11.0064C22.7922 10.9371 22.7655 10.8273 22.7232 10.6822C22.6386 10.3917 22.4917 9.96007 22.2478 9.42797C21.7605 8.36509 20.8842 6.89736 19.3369 5.35003C17.7896 3.8027 16.3218 2.92646 15.259 2.43917C14.7269 2.19522 14.2952 2.04831 14.0048 1.96372C13.8596 1.92143 13.6771 1.87954 13.6079 1.86412C13.0991 1.77934 12.7418 1.29694 12.8244 0.787289Z" fill="url(#paint1_linear_315_12)" />
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1072 5.09912C13.2494 4.60128 13.7683 4.313 14.2661 4.45524L14.0086 5.35667C14.2661 4.45524 14.2661 4.45524 14.2661 4.45524L14.268 4.45576L14.2699 4.45631L14.274 4.45753L14.2837 4.46042L14.3085 4.46813C14.3273 4.47415 14.3508 4.482 14.3789 4.49196C14.435 4.51188 14.5092 4.54021 14.6003 4.57922C14.7824 4.65726 15.0312 4.77779 15.3368 4.95868C15.9487 5.32078 16.7839 5.92225 17.7651 6.90347C18.7463 7.88468 19.3478 8.71992 19.7099 9.33175C19.8908 9.63739 20.0113 9.88622 20.0894 10.0683C20.1284 10.1593 20.1567 10.2335 20.1766 10.2897C20.1866 10.3177 20.1944 10.3413 20.2004 10.3601L20.2081 10.3848L20.211 10.3945L20.2123 10.3987L20.2128 10.4006C20.2128 10.4006 20.2133 10.4024 19.3119 10.66L20.2133 10.4024C20.3556 10.9003 20.0673 11.4192 19.5695 11.5614C19.0758 11.7024 18.5615 11.4202 18.4142 10.9302L18.4096 10.9167C18.4029 10.8979 18.3891 10.8609 18.366 10.8069C18.3197 10.699 18.2358 10.5225 18.0963 10.2867C17.8176 9.81579 17.3142 9.10423 16.4393 8.22929C15.5643 7.35435 14.8528 6.85097 14.3818 6.57226C14.1461 6.43274 13.9696 6.34887 13.8617 6.30262C13.8076 6.27947 13.7707 6.26568 13.7519 6.25901L13.7384 6.2544C13.2483 6.10705 12.9661 5.59274 13.1072 5.09912Z" fill="url(#paint2_linear_315_12)" />
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_315_12" x1="5.05242e-08" y1="1.9375" x2="25.1009" y2="5.35954" gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#2A519A" />
                                                                        <stop offset="1" stop-color="#154090" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint1_linear_315_12" x1="12.8125" y1="-0.131942" x2="26.0563" y2="1.67308" gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#2A519A" />
                                                                        <stop offset="1" stop-color="#154090" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint2_linear_315_12" x1="12.8125" y1="-0.131942" x2="26.0563" y2="1.67308" gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#2A519A" />
                                                                        <stop offset="1" stop-color="#154090" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>


                                                            <span>Phone</span>
                                                        </div>
                                                        <p className='mt-2'>
                                                            Phone no. 1: <Link href='tel:+91 94265 28500'>+91 94265 28500</Link> <br />
                                                            Phone no. 2: <Link href='tel:+91 89050 96769'>+91 89050 96769</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="small-title">
                                                        <div className="d-flex align-items-center">
                                                            <svg width="28" className='me-2' height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.5" d="M16.5 0H11C5.81455 0 3.22183 0 1.61091 1.64752C0 3.29505 0 5.9467 0 11.25C0 16.5533 0 19.205 1.61091 20.8525C3.22183 22.5 5.81455 22.5 11 22.5H16.5C21.6854 22.5 24.2782 22.5 25.8891 20.8525C27.5 19.205 27.5 16.5533 27.5 11.25C27.5 5.9467 27.5 3.29505 25.8891 1.64752C24.2782 0 21.6854 0 16.5 0Z" fill="url(#paint0_linear_315_15)" />
                                                                <path d="M22.6602 6.29225C23.0978 5.92764 23.1569 5.27737 22.7923 4.83984C22.4276 4.4023 21.7774 4.34318 21.3398 4.7078L18.3714 7.18153C17.0885 8.25055 16.1979 8.99035 15.446 9.47395C14.7181 9.94209 14.2245 10.0992 13.75 10.0992C13.2756 10.0992 12.7819 9.94209 12.0541 9.47395C11.3022 8.99035 10.4115 8.25055 9.1287 7.18153L6.16022 4.7078C5.72268 4.34318 5.07241 4.4023 4.7078 4.83984C4.34318 5.27737 4.4023 5.92764 4.83984 6.29225L7.86002 8.80907C9.07875 9.82472 10.0666 10.6479 10.9384 11.2086C11.8466 11.7927 12.731 12.1617 13.75 12.1617C14.769 12.1617 15.6535 11.7927 16.5617 11.2086C17.4335 10.6479 18.4213 9.82471 19.6401 8.80905L22.6602 6.29225Z" fill="url(#paint1_linear_315_15)" />
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_315_15" x1="6.17519e-08" y1="-0.25" x2="30.4049" y2="4.81629" gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#2A519A" />
                                                                        <stop offset="1" stop-color="#154090" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint1_linear_315_15" x1="4.46875" y1="4.38327" x2="23.5023" y2="10.6445" gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#2A519A" />
                                                                        <stop offset="1" stop-color="#154090" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                            <span>Email</span>
                                                        </div>
                                                        <p className='mt-2'>
                                                            <Link href='mailto:info@shubhamtechnocast.com'>info@shubhamtechnocast.com</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div className="white-box gray-bg text-center">
                                            <div className="small-title">
                                                <span>Follow us</span>
                                            </div>
                                            <div className="social-icn mt-3">
                                                <ul className="d-flex align-items-center justify-content-center">
                                                    <li className="me-2">
                                                        <Link href=''>
                                                            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="30" fill="white" />
                                                                <path d="M32.0882 42V31.0524H35.7621L36.3115 26.7862H32.0882V24.063C32.0882 22.828 32.4322 21.9848 34.2023 21.9848H36.462V18.1629C35.3678 18.0488 34.2681 17.9946 33.1679 18.0004C29.9145 18.0004 27.6739 19.9831 27.6739 23.6402V26.7862H24V31.0524H27.6739V42H32.0882Z" fill="#141414" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                    <li className="me-2">
                                                        <Link href=''>

                                                            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="30" fill="white" />
                                                                <path d="M30.0009 19C27.0135 19 26.6385 19.0131 25.4653 19.0664C24.2942 19.1201 23.4949 19.3055 22.7955 19.5775C22.0719 19.8584 21.4583 20.2343 20.8469 20.8459C20.235 21.4574 19.8591 22.0711 19.5773 22.7943C19.3045 23.4939 19.1189 24.2936 19.0662 25.4641C19.0137 26.6374 19 27.0125 19 30C19 32.9875 19.0132 33.3612 19.0664 34.5345C19.1203 35.7055 19.3057 36.5049 19.5775 37.2043C19.8587 37.9278 20.2345 38.5415 20.8461 39.1529C21.4574 39.7648 22.0711 40.1416 22.7941 40.4225C23.494 40.6945 24.2935 40.8799 25.4643 40.9336C26.6377 40.9869 27.0123 41 29.9996 41C32.9872 41 33.361 40.9869 34.5343 40.9336C35.7053 40.8799 36.5056 40.6945 37.2055 40.4225C37.9287 40.1416 38.5415 39.7648 39.1527 39.1529C39.7646 38.5415 40.1404 37.9278 40.4223 37.2046C40.6927 36.5049 40.8783 35.7053 40.9333 34.5347C40.986 33.3615 40.9998 32.9875 40.9998 30C40.9998 27.0125 40.986 26.6377 40.9333 25.4643C40.8783 24.2933 40.6927 23.494 40.4223 22.7946C40.1404 22.0711 39.7646 21.4574 39.1527 20.8459C38.5409 20.2341 37.9289 19.8582 37.2048 19.5776C36.5036 19.3055 35.7038 19.12 34.5327 19.0664C33.3594 19.0131 32.9858 19 29.9975 19H30.0009ZM29.0141 20.9823C29.307 20.9819 29.6338 20.9823 30.0009 20.9823C32.938 20.9823 33.286 20.9929 34.4458 21.0455C35.5183 21.0946 36.1004 21.2738 36.4882 21.4244C37.0015 21.6237 37.3675 21.8621 37.7523 22.2472C38.1373 22.6322 38.3755 22.9988 38.5754 23.5122C38.726 23.8994 38.9054 24.4815 38.9542 25.554C39.0069 26.7136 39.0184 27.0618 39.0184 29.9975C39.0184 32.9331 39.0069 33.2815 38.9542 34.441C38.9052 35.5135 38.726 36.0956 38.5754 36.4829C38.3761 36.9963 38.1373 37.3618 37.7523 37.7466C37.3673 38.1316 37.0018 38.3698 36.4882 38.5692C36.1009 38.7205 35.5183 38.8992 34.4458 38.9483C33.2862 39.001 32.938 39.0124 30.0009 39.0124C27.0637 39.0124 26.7155 39.001 25.556 38.9483C24.4836 38.8988 23.9014 38.7196 23.5134 38.569C23.0001 38.3696 22.6334 38.1313 22.2484 37.7463C21.8634 37.3613 21.6251 36.9956 21.4253 36.482C21.2747 36.0947 21.0953 35.5126 21.0464 34.4401C20.9937 33.2805 20.9832 32.9322 20.9832 29.9947C20.9832 27.0573 20.9937 26.7108 21.0464 25.5512C21.0955 24.4787 21.2747 23.8966 21.4253 23.5089C21.6247 22.9955 21.8634 22.6289 22.2485 22.2439C22.6335 21.8589 23.0001 21.6205 23.5135 21.4207C23.9012 21.2695 24.4836 21.0907 25.556 21.0415C26.5708 20.9956 26.964 20.9819 29.0141 20.9795V20.9823ZM35.8726 22.8087C35.1439 22.8087 34.5526 23.3994 34.5526 24.1283C34.5526 24.857 35.1439 25.4482 35.8726 25.4482C36.6014 25.4482 37.1926 24.857 37.1926 24.1283C37.1926 23.3995 36.6014 22.8083 35.8726 22.8083V22.8087ZM30.0009 24.351C26.8813 24.351 24.352 26.8803 24.352 30C24.352 33.1197 26.8813 35.6478 30.0009 35.6478C33.1206 35.6478 35.649 33.1197 35.649 30C35.649 26.8804 33.1203 24.351 30.0007 24.351H30.0009ZM30.0009 26.3333C32.0259 26.3333 33.6676 27.9748 33.6676 30C33.6676 32.025 32.0259 33.6667 30.0009 33.6667C27.9758 33.6667 26.3343 32.025 26.3343 30C26.3343 27.9748 27.9758 26.3333 30.0009 26.3333Z" fill="#141414" />
                                                            </svg>

                                                        </Link>
                                                    </li>
                                                    <li className="me-2">
                                                        <Link href=''>
                                                            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="30" fill="white" />
                                                                <path d="M40.0935 24.9789C40.1086 25.1959 40.1086 25.4129 40.1086 25.6319C40.1086 32.3045 35.0289 40 25.7405 40V39.9959C22.9965 39.9999 20.3094 39.214 18 37.7322C18.399 37.7801 18.7999 37.8041 19.202 37.805C21.4762 37.8068 23.6851 37.044 25.4736 35.6392C24.4198 35.6193 23.3986 35.2706 22.5528 34.6419C21.7069 34.0131 21.0787 33.1358 20.7559 32.1325C21.5124 32.2783 22.2924 32.2486 23.0356 32.0455C20.6798 31.5695 18.9849 29.4997 18.9849 27.0958V27.0318C19.6872 27.4229 20.4732 27.6397 21.2767 27.6638C19.058 26.1808 18.374 23.229 19.7138 20.9211C20.9815 22.4812 22.5633 23.7571 24.3563 24.666C26.1494 25.5749 28.1135 26.0965 30.1213 26.1968C29.9211 25.3351 29.9507 24.436 30.207 23.5893C30.4634 22.7426 30.9375 21.9781 31.5821 21.3722C33.616 19.4603 36.8147 19.5583 38.7267 21.5911C39.8575 21.3678 40.942 20.9533 41.9334 20.3652C41.5564 21.5345 40.7675 22.5269 39.7135 23.158C40.7145 23.0401 41.6921 22.7721 42.6134 22.3632C41.9357 23.378 41.0824 24.2637 40.0935 24.9789Z" fill="#141414" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                    <li className="me-2">
                                                        <Link href=''>
                                                            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="30" fill="white" />
                                                                <path d="M40.0329 39.9999H35.8848V33.5036C35.8848 31.9545 35.8571 29.9604 33.7274 29.9604C31.5668 29.9604 31.2363 31.6482 31.2363 33.3909V39.9995H27.0882V26.6405H31.0704V28.4662H31.1261C31.5246 27.7848 32.1005 27.2242 32.7924 26.8442C33.4843 26.4642 34.2663 26.2789 35.0552 26.3082C39.2595 26.3082 40.0347 29.0737 40.0347 32.6714L40.0329 39.9999ZM22.4077 24.8146C21.0782 24.8148 20.0002 23.7371 20 22.4077C19.9998 21.0782 21.0773 20.0002 22.4068 20C23.7363 19.9997 24.8142 21.0773 24.8144 22.4068C24.8146 23.0452 24.5611 23.6576 24.1097 24.1091C23.6583 24.5607 23.0461 24.8144 22.4077 24.8146ZM24.4818 40H20.3293V26.6405H24.4817L24.4818 40Z" fill="#141414" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='common-space pb-0'>
                <iframe src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=G-1951/2,%20Rd%20M,%20jyoti%20cnc,%20gate%20Metoda,%20Metoda,%20Gujarat%20360021&t=&z=14&ie=UTF8&iwloc=B&output=embed" className='w-100' height={400} />
            </section>

        </Layout>
    );
}

export default contactus;