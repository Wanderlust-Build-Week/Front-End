import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterForm = ({ errors, touched, values, status }) => {
    const [register, setRegister] = useState([]);

return(
    <div className = "register-form">
        <h1>Register</h1>
        <Form>
            <Field
            type="text"
            name="username"
            placeholder="Username"
            value={values.Tester123}
            />
        </Form>
    </div>
)
}

export default RegisterForm;