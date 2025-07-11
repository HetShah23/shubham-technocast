import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { set, useForm } from "react-hook-form"; 
import Loader from './Tools/Loader';
import { usePathname } from 'next/navigation'

function ContactUsForm({show_comments=true, btn_ctx="Inquire"}) {

    const pathname = usePathname();
    const [title, set_title] =  useState(<h2>Elevate Your Business with <span>shubham group</span></h2>);

    const firetech_brochre = "https://shubhamtechnocast.com/assets/files/Firetech_Catalogue.pdf";
    const technocast_brochre = "https://shubhamtechnocast.com/assets/files/Shubham_Technocast_Catalogue.pdf";

    useEffect(() => {
        if(pathname === "/contact-us/"){
            set_title(<h2>Elevate Your Business with <span>Shubham Group</span></h2>);
        } else if(!pathname.includes("fire")) { 
            set_title(<h2>Get in Touch with <span>Shubham Technocast</span></h2>);
        } else if(pathname.includes("fire")) {
            set_title(<h2>Strengthen Your Safety Solutions with <br/><span>Shubham Firetech</span></h2>);
        }
	}, []);

    const { 
        register, 
        handleSubmit, 
        getValues, 
        formState: { errors }, 
    } = useForm(); 

    const [submitted, set_submitted] = useState(false);
    const [loader, set_loader] = useState(false);

    const onSubmit = useCallback( async () => { 
       
        set_loader(true);
        const form_data = getValues();
        if(btn_ctx === "Download") form_data.comments = "Catalogue Download";

        if(pathname === "/contact-us/"){
            form_data.for = "General Inquiry";
        } else if(!pathname.includes("fire")) { 
            form_data.for = "Technocast Inquiry";
        } else if(pathname.includes("fire")) {
            form_data.for = "Firetech Inquiry";
        }

        const api_data = {
            sender_email: "dev.shubhamtechnocast@gmail.com",
            sender_password: "fbmnjtgdkqhdcycs",
            reciver_email: form_data.email,
            data: form_data
        }

        try {
            const response = await fetch('https://mail-inquiry-general.vercel.app/handle-mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(api_data),
            });

            if (!response.ok) {
                set_loader(false);
                throw new Error('Network response was not ok');
            }
            
            const result = await response.json();
            set_submitted(true);
            set_loader(false);
        } catch (error) {
            set_loader(false);
            console.error('Error:', error);
            alert("There was an error sending your message. Please try again later.");
        }

        // handleExternalLinkClick();
    }, [getValues]);

    return (
        <div style={{height: "auto", minHeight:"250px"}} className='d-flex flex-column align-items-center justify-content-center m-auto'>
            {loader && <Loader />}
            {
                submitted &&
                <div className="">
                    <h3 style={{fontWeight: "800"}} className="txt-theme-color">Thank you for your inquiry!</h3>
                    <p>We will get back to you shortly. <br/>Meanwhile checkout our Brochure.</p>
                    <div className='d-flex flex-column'>
                        {(!pathname.includes("fire") || pathname.includes("contact")) && <Link href={technocast_brochre} target="_blank" rel="noopener noreferrer" className="btn-1 my-1">
                            Download Technocast Brochure
                        </Link>}
                        {(pathname.includes("fire") || pathname.includes("contact")) && <Link href={firetech_brochre} target="_blank" rel="noopener noreferrer" className="btn-1 my-1">
                            Download Firetech Brochure
                        </Link>}
                    </div>
                </div>
            }
            
            { submitted === false && <div className="row p-2">
                <div className="col-12">
                    <div className="bottom-line-txt">
                        <span>We’re Here to Help You!</span>
                    </div>
                </div>
                <div className="col-12 py-2">
                    <div className="gradiant-txt">
                        {title}
                    </div>
                </div>
                <div className="col-12">
                    <form onSubmit={handleSubmit(onSubmit)} className="row">
                        <div className="col-12 form-group mb-3">
                            <label htmlFor="name" className="label-txt">Name</label>
                            <input 
                                type="text" 
                                className="form-control cust-input" 
                                {...register("name", { required: "Please Enter Your Name" })}
                            />
                            <div className="error-message">{errors.name?.message}</div> 
                        </div>
                        <div className="col-12 form-group mb-3">
                            <label htmlFor="email" className="label-txt">Email</label>
                            <input 
                                type="email" 
                                className="form-control cust-input"
                                {...register("email", { required: "Please Enter Your Email" })} 
                            />
                            <div className="error-message">{errors.email?.message}</div> 
                        </div>
                        <div className="col-12 form-group mb-3">
                            <label htmlFor="companyname" className="label-txt">Company Name</label>
                            <input 
                                type="text" 
                                className="form-control cust-input" 
                                {...register("companyname", { required: "Please Enter Name of Your Company" })}  
                            />
                            <div className="error-message">{errors.companyname?.message}</div> 
                        </div>
                        <div className="col-12 form-group mb-3">
                            <label htmlFor='phoneno' className="label-txt">Phone</label>
                            <input 
                                type="tel" 
                                className="form-control cust-input" 
                                {...register("phoneno", { required: "Please Enter Your Phone Number" })}  
                            />
                            <div className="error-message">{errors.phoneno?.message}</div> 
                        </div>
                        {show_comments && <div className="col-12 form-group mb-3">
                            <label htmlFor='comments' className="label-txt">Comments</label>
                            <textarea 
                                className="form-control cust-input" 
                                placeholder="Write here"
                                {...register("comments")} 
                            ></textarea>
                        </div>}
                        <div className="col-12 text-center">
                            <button type="submit" className="btn-1">{btn_ctx}</button>
                        </div>
                    </form>
                </div>
            </div>}
        </div>
    );
}

export default ContactUsForm;