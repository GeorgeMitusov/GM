import React from 'react';
import { Field, ErrorMessage } from "formik";

import '../styles/ContactFormItem.scss';

const ContactFormItem = ({ i : { type, id, name, placeholder }}) => {

  return (
    <div className="contact-form-box">
      <Field
        className="contact-form-box-field"
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder}
      />
      <ErrorMessage 
        name={name} 
        component="div"
        className='contact-form-box-error' 
      />
    </div>
  )
}

export default ContactFormItem
