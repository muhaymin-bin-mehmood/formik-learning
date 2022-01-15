import React, {useState} from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from '../TextError'

const initialValues = {
    name: '',
    email: '',
    youtubeChannel: '',
    comments: '',
    address: ''
}
// load saved data
const savedData = {
    name: 'Muhaymin',
    email: 'testing@gmail.com',
    youtubeChannel: 'creative sequence',
    comments: 'asb',
    address: 'testing address'
}


const onSubmit = (values, onSubmitProps) => {
    console.log('data-value', values);
    console.log('onSubmitProps', onSubmitProps);
    onSubmitProps.setSubmitting(false);
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
const ManualFormValidation = () => {
    const [formikValue, setFormikValue] = useState(null)
    return (
        <Formik initialValues={formikValue || initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize
        validateOnMount>
            {/* manually trigger validation  */}
            {formik => {
                console.log('formik', formik);
                return (
                    <Form>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' id='name' name="name" />
                            <ErrorMessage name="name" component={TextError} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>email</label>
                            <Field type='email' id='email' name="email" />
                            <ErrorMessage name="email" component={TextError} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='youtubeChannel'>youtube_channel</label>
                            <Field type='text' id='youtubeChannel' name="youtubeChannel" />
                            <ErrorMessage name="youtubeChannel" component={TextError} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='comments'>comments</label>
                            <Field as='textarea' id='comments' name="comments" />
                            <ErrorMessage name="comments" component={TextError} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='address'>address</label>
                            <Field as='textarea' id='address' name="address" >
                                {props => {
                                    const { Field, form, meta } = props;
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
                            <button type='submit' onClick={() => setFormikValue(savedData)}>load Save Data</button>
                        </div>
                        <div className='form-group'>
                            <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default ManualFormValidation