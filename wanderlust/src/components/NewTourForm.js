import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";


//Declaring my form values/wireframe w/ the Formik component
const NewTourForm = ({ errors, touched, values, status }) => {
    const [form, setForm] = useState([]);

    return(
        <div className="new-tour">
            <h1>Book a New Tour!</h1>
    {/*Step 1: Set up the fields of the form*/}
                <Field
                type="text"
                name="title"
                placeholder="Book your new tour!"
                />

                {/* <Field
                type="text"
                name="location"
                placeholder="Enter Location Here"
                /> */}
        </div>
    );
};

//Higher Order Component
const FormikNewTourForm = withFormik({})(NewTourForm);

export default NewTourForm;

