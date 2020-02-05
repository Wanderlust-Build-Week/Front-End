import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const NewTourForm = ({ errors, touched, values, status }) => {
  const [forms , setForms] = useState([]);

  return (
    <div className="animal-form">
      <h1>Book Your Tour Today!!</h1>
      <Form>
        <Field
          type="text"
          name="title"
          placeholder="Tour Title Here"
        />

        <Field
          type="text"
          name="start"
          placeholder="Location Here"
          value={values.start}
        />

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
        />

        <Field 
        placeholder='# of Days' 
        type="number" 
        name='duration' 
        placeholder="0"
        />

        <Field component="select" name="options">
          <option>Choose an option</option>
          <option>Private</option>
          <option>Professional</option>
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
            start: start,
            body: "",
            duration: "",
            options: ""
        };
    }
})(NewTourForm);

export default FormikNewTourForm;