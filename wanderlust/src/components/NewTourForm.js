import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

//Declaring my form values/wireframe w/ the Formik component
const NewTourForm = () => {
	const [ form, setForm ] = useState([]);

	return (
		<div className='new-tour'>
			<h1>Book a New Tour!</h1>
			{/*Step 1: Set up the fields of the form*/}
			<Formik
				initialValues={{ title: '', location: '', duration: 0, tourStyle:'' }}
				validate={(values) => {
					const errors = {};
					if (!values.title) {
                        errors.title = 'Title Is Required';
                    }
                    if(!values.location){
                        errors.location = "Location is Required"
                    }
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
                        // axios post will go here
						console.log(values);
						setSubmitting(false);
					}, 400);
				}}>
				{({ isSubmitting }) => {
					return (
						<Form>
							<Field placeholder='title' name='title' />
							<Field placeholder='location' name='location' />
							<Field placeholder='duration' type="number" name='duration' />
							<Field name="tourStyle" component='select'>
								<option>Professional</option>
								<option>Private</option>
							</Field>
							<ErrorMessage name='title' component='div' />
							<button type='submit' disabled={isSubmitting}>
								Submit
							</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default NewTourForm;
