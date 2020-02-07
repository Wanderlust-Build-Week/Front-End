import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { StyledTourForm } from '../Styles/StyledTourForm';
import NavBar from './NavBar/NavBar'

//Bring in Props
const NewTourForm = ({ errors, touched, values, status, handleSubmit }) => {
  const [forms , setForm] = useState([]);

  useEffect(() => {
    status && setForm(tours => [...tours, status]);
  }, [status]);

  return (
   
    <StyledTourForm>
     <NavBar />
     <div className="tour-form">
      <h1>Book Your Tour Today!!</h1>
      <Form onSubmit={handleSubmit}>
      

        <Field 
        type="text"
        name="photo"
        placeholder="Img Url"
        value={values.photo}
        />
        {touched.photo && errors.photo && <p>{errors.photo}</p>}

        <Field
          type="text"
          name="title"
          placeholder="Tour Title Here"
          value={values.title}
        />
        {touched.title && errors.title && <p>{errors.title}</p>}

        <Field
          type="text"
          name="location"
          placeholder="Location Here"
          value={values.location}
        />
        {touched.location && errors.location && <p>{errors.location}</p>}

        <Field
          component="textarea"
          type="text"
          name="description"
          placeholder="Tell us about it!"
          value={values.description}
        />
        {touched.description && errors.description && <p>{errors.description}</p>}
        

        <Field 
        placeholder='# of Days' 
        type="number" 
        name='duration' 
        placeholder="0"
        value={values.duration}
        />
        {touched.duration && errors.duration && <p>{errors.duration}</p>}

        <Field as="select" name="guide">
          <option>Choose an option</option>
          <option value="Private">Private</option>
          <option value="Professional">Professional</option>
          {touched.guide && errors.guide && <p>{errors.guide}</p>}
        </Field>
        

        <button type="submit">Enter</button>

      </Form>

    </div>
    </StyledTourForm>
  );
};

// higher order component
const FormikNewTourForm = withFormik({
    mapPropsToValues({ start }) {
        return{
            photo:"",
            title: "",
            location: "",
            description: "",
            duration: "",
            guide: ""
        };
    },

    validationSchema: Yup.object().shape({
        photo:Yup.string().required("Please provide a img url"),
        title: Yup.string().required("Please fill this in!"),
        location: Yup.string().required("Please fill this in!"),
        description: Yup.string(),
        duration: Yup.string().required("This is required!"),
        guide: Yup.string()
      .oneOf(["Private", "Professional"])
      .required("Please choose a value!"),

}),

    handleSubmit(values,{ setForms, resetForm }) {
        console.log('Submitting Form:', values);
        
        const tour = values;

        axios
        .post("https://wanderlust-shouts.herokuapp.com/api/tours/upload", {tour, token: localStorage.getItem('token')}
        )
        
        .then(res => {
            console.log("Success:", res.data);
            setForms(res.data);
            resetForm();
        })
        .catch(err => {
            console.log("Error:", err.res);
        })
    }

})(NewTourForm);

export default FormikNewTourForm;