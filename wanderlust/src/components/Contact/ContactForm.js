import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field, Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { StyledContact } from '../../Styles/StyledContact';



function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    } 
    return error;
  }




  const ContactForm = ({ errors, touched, values, status, isSubmitting }) => {

    const [user, setUser] = useState([])
   
    useEffect(() => {
        status && 
        setUser(users => [
            ...users, 
            status
        ])
    }, [status])


    return (
        <div>
            <StyledContact>
            <div className="contact-wrapper">
            <h1 className="heading">Contact Us</h1>
            <Form className="contactForm">
            <Field type="text" name="name" placeholder="Name" value={values.name} />
                
            <Field type="text" name="email" placeholder="Email" value={values.email} validate={validateEmail}/>
                {errors.email && touched.email && <div>{errors.email}</div>}

                <Field type="textarea" name="message" placeholder="Your Message" />

                <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
            </div>
            </StyledContact>
        </div>
    )
}



const FormikContactForm = withFormik({
    mapPropsToValues({ user }) {
        return {
            name: "", 
            email: "",
            message: "",
            
        };
    }, 
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name Required'),
        email: Yup.string().required('Please enter a valid email address'),
        message: Yup.string().required('Please enter a message'),
    }),

    handleSubmit(values, { setStatus, resetForm }) {
        console.log('submitting form:', values);
        axios.post
        ("https://reqres.in/api/users", values)

        .then( res => {
            console.log('Success:', res);
            setStatus(res.data);
            resetForm();
        })
        .catch(err => {
            console.log('Error:', err.response);
        });
    }

})(ContactForm);


export default FormikContactForm;
