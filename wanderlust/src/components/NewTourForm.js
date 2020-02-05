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
        name="location" 
        placeholder="Location Here"  
        />

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
        />

        <Field component="select" name="food">
          <option>Choose an option</option>
          <option>Private</option>
          <option>Professional</option>
        </Field>

        <button type="submit">Submit</button>
      </Form>

    </div>
  );
};

// higher order component
const FormikNewTourForm = withFormik({NewTourForm});

export default FormikNewTourForm;