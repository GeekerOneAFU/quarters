import '../styles/outer-app.css';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { motion } from 'framer-motion';

const Verification = () => {

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const leftCurveVariants = {
        hidden: { opacity: 0, x: "50%", y: "-50%" },
        visible: {
            opacity: 1,
            x: "0%",
            y: "0%",
            transition: {
                duration: 1.5,
                ease: "easeInOut",
            },
        },
    };
    
    const bottomRightShapeVariants = {
        hidden: { opacity: 0, x: "100%", y: "100%" },
        visible: {
            opacity: 1,
            x: "0%",
            y: "0%",
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                delay: 1.5, 
            },
        },
    };

    document.title = 'Quarters | Verify Email';

    return (
        <>
            <Header />
            <div className="outer-app-container">
                
                <motion.img
                    src="./images/v1.png"
                    className="left-curve"
                    alt="Left curve decoration"
                    initial="hidden"
                    animate="visible"
                    variants={leftCurveVariants}
                />
                <motion.img
                    src="./images/v2.png"
                    className="bottom-right-shape"
                    alt="Bottom right shape decoration"
                    initial="hidden"
                    animate="visible"
                    variants={bottomRightShapeVariants}
                />
                <motion.div 
                    className="outer-app-box"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="outer-app-box-header">
                        <h1>Sign-up</h1>
                    </div>

                    <div className="outer-app-box-body">
                        <form autoComplete="off">
                            <label htmlFor="fullName">Full Name*</label>
                            <div className="custom-group">
                                <input
                                    className="round-field"
                                    id="fullName"
                                    name="fullName"
                                />
                            </div>

                            <button type="submit" className="custom-button" disabled={isLoading}>
                                {
                                    isLoading ?
                                        <>Please Wait... <div className="loader"></div></>
                                        : 'Get Started'
                                }
                            </button>
                        </form>
                    </div>
                </motion.div>
                <Footer />
            </div>
        </>
    )
}

export default Verification;