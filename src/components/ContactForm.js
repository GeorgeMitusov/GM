import React, { useContext, useEffect } from 'react';
import { Context } from '../context/Context';

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { motion, AnimatePresence } from "framer-motion";

import { BeatLoader } from 'react-spinners';

import ContactFormItem from './ContactFormItem';

import '../styles/ContactForm.scss';

const contactFormData = [
    {
        type: "text", 
        id: "name", 
        name: "name", 
        placeholder: 'Full Name*'
    },
    {
        type: "email", 
        id: "email", 
        name: "email", 
        placeholder: 'Email address*'
    },
]

const ContactForm = () => {

    const { toggleIsContact, successMsg, setSuccessMsg,
        isFormSubmitting, setIsFormSubmitting, startFormSubmit } = useContext(Context);

    useEffect(() => {
        function handleEscKeyPress(event) {
          if (event.keyCode === 27) {
            toggleIsContact();
          }
        }
    
        window.addEventListener('keydown', handleEscKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleEscKeyPress);
        };
    }, []);

    const initialValues = {
        name: "",
        email: "",
        message: "",
    };
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        message: Yup.string().required("Message is required"),
    });
    
    const handleSubmit = (values, { resetForm }) => {
        const serviceId = "service_kxmglya";
        const templateId = "zakazgerm_gmail";
        const userId = "X6BZThkDbGkN2NKjC";
    
        emailjs.send(serviceId, templateId, values, userId)
          .then((result) => {
            console.log(result.text);
            setSuccessMsg(true);
            setIsFormSubmitting(false);
            resetForm();
          }, (error) => {
            console.log(error.text);
          });
    };

    const formVars = {
        initial: { scale: 0,  opacity: 0 },
        enter: { 
            scale: 1, 
            opacity: 1,
            transition: { duration: 2 }
        },
        exit: { 
            opacity: 0, 
            scale: 0,
            transition: { duration: 1 }
        }
    };

    const sucMsg = (
        <div className='message-success'>
            <p className="success-msg"> 
                Your message has been sent!  <br />
                Our support team will contact you as soon as possible! 
            </p> 
            <i className='contact-form-close suc'>
                <FontAwesomeIcon 
                    className='contact-form-close-sign suc' 
                    icon={faClose} 
                    onClick={toggleIsContact}
                />
            </i>
        </div>
    ); 

    const contactFormItem = contactFormData.map(({ id, ...rest }) => (
        <ContactFormItem key={id} i={rest} />
    ))

    const form = successMsg ? sucMsg : (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ touched, errors }) => (
                <Form className='contact-form'>
                    
                    { contactFormItem }

                    <div className="contact-form-box">
                        <Field 
                            className="contact-form-box-field textarea"
                            as="textarea" 
                            id="message" 
                            name="message"
                            placeholder='Your message*' 
                        />
                        <ErrorMessage 
                            name="message" 
                            component="div" 
                            className='contact-form-box-error'
                        />
                    </div>

                    <div className="contact-form-box">
                        <button
                            className='contact-form-submit-btn' 
                            type="submit"
                            onClick={startFormSubmit}
                            disabled={ Object.keys(errors).length > 0 ||
                                Object.keys(touched).length === 0}
                        >   
                            <AnimatePresence>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, ease: "easeIn" }}
                                >
                                    { 
                                        isFormSubmitting ? ( 
                                            <BeatLoader 
                                                size={10} 
                                                color={'#ffffff'} 
                                                loading={true} 
                                                width="60%"
                                            />) : "Submit" 
                                        } 
                                </motion.p>
                            </AnimatePresence>
                        </button>
                    </div>

                </Form>
            )}
        </Formik>
    )

    return (
        <div className='contact-form-wrap'>
            <motion.div 
                className='contact-form-container'
                variants={formVars}
                initial="initial"
                animate='enter'
                exit='exit'
            >

                { form }

                { !successMsg && 
                    <i className='contact-form-close'>
                        <FontAwesomeIcon 
                            className='contact-form-close-sign' 
                            icon={faClose} 
                            onClick={toggleIsContact}
                        />
                    </i>
                }

            </motion.div>
        </div>
    )
}

export default ContactForm;