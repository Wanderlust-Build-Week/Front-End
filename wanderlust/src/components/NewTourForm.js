import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const NewTourForm = ({ errors, touched, values, status }) => {
  const [forms , setForms] = useState([]);

  useEffect(() => {
    status && setForms(tours => [...tours, status]);
  }, [status]);

  return (
    <div className="animal-form">
      <h1>Book Your Tour Today!!</h1>
      <Form>
        <Field
          type="text"
          name="title"
          placeholder="Tour Title Here"
          value={values.title}
        />
        {touched.title && errors.title && <p>{errors.title}</p>}

        <Field
          type="text"
          name="start"
          placeholder="Location Here"
          value={values.start}
        />
        {touched.start && errors.start && <p>{errors.start}</p>}

        {/* <Field 
        type="text" 
        name="location" // <----- Did NOT like the word "Location" being used..? (would render Object object
        on the form)
        placeholder="Location Here"
        /> */}

        <Field
          component="textarea"
          type="text"
          name="body"
          placeholder="Tell us about it!"
          value={values.body}
        />
        

        <Field 
        placeholder='# of Days' 
        type="number" 
        name='duration' 
        placeholder="0"
        value={values.duration}
        />
        {touched.duration && errors.duration && <p>{errors.duration}</p>}

        <Field component="select" name="options" value={values.options}>
          <option>Choose an option</option>
          <option>Private</option>
          <option>Professional</option>
          {touched.options && errors.options && <p>{errors.options}</p>}
        </Field>

        <button type="submit">Enter</button>

      </Form>

    </div>
  );
};

// higher order component
const FormikNewTourForm = withFormik({
    mapPropsToValues({ start }) {
        return {
            title: "",
            start: start || "",
            body: "",
            duration: "",
            options: ""
        };
    },

    validationSchema: Yup.object().shape({
        title: Yup.string().required("Please fill this in!"),
        start: Yup.string().required("Please fill this in!"),
        options: Yup.string(),
        body: Yup.string(),
        duration: Yup.string().required("Please fill this in!"),
        options: Yup.string()
      .oneOf(["Private", "Professional"])
      .required("Please choose a value!"),

}),

    handleSubmit(values, { setForms, resetForm }) {
        console.log('Submitting Form:', values);

        axios
        .post("https://wanderlust-shouts.herokuapp.com/api/tours", values)
        .then(res => {
            console.log("Success:", res);
            setForms(res.data);
            resetForm();
        })
        .catch(err => {
            console.log("Error:", err.res);
        })
    }

})(NewTourForm);

export default FormikNewTourForm;