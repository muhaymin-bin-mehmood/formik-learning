import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    youtubeChannel: '',
    comments: '',
    address: ''
}

const onSubmit = (values) => {
    console.log('data-value', values);
}

const validate = (values) => {
    let error = {};
    if (!values.name) {
        error.name = 'Name is required';
    }
    if (!values.email) {
        error.email = 'Email is required';
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
        error.email = 'Email is not valid';
    }
    if (!values.youtubeChannel) {
        error.youtubeChannel = 'Youtube Channel is required';
    }

    return error;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    youtubeChannel: Yup.string().required('Required'),
    comments: Yup.string().required('Required')
})
const YoutubeFormValidationReducedCode = () => {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name="name" />
                    <ErrorMessage name="name" />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>email</label>
                    <Field type='email' id='email' name="email" />
                    <ErrorMessage name="email" />
                </div>
                <div className='form-group'>
                    <label htmlFor='youtubeChannel'>youtube_channel</label>
                    <Field type='text' id='youtubeChannel' name="youtubeChannel" />
                    <ErrorMessage name="youtubeChannel" />
                </div>
                <div className='form-group'>
                    <label htmlFor='comments'>comments</label>
                    <Field as='textarea' id='comments' name="comments" />
                    <ErrorMessage name="comments" />
                </div>
                <div className='form-group'>
                    <label htmlFor='address'>address</label>
                    <Field as='textarea' id='address' name="address" > 
                        {props => {
                            const {Field, form, meta } = props;
                            return (
                                <div>
                                    <input type="text" id="address" {...Field} />
                                    {meta.touched && meta.error ? <div>{meta.address}</div> : null}
                                </div>
                            )
                        }}
                    </Field> 
                </div>
                <div className='form-group'>
                    <button type='submit'>Submit</button>
                </div>
            </Form>
        </Formik>
    )
}

export default YoutubeFormValidationReducedCode