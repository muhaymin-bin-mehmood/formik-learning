import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    youtubeChannel: '',
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
        youtubeChannel: Yup.string().required('Required')
})
const YoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
    })
    console.log('YoutubeFormvalidaton', formik.touched);
    return (
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' className={formik.touched.name && formik.errors.name ? 'form-control error' : 'form-control'} id='name' name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? <span className='error_log'>{formik.errors.name}</span> : null}
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>email</label>
                    <input type='email' className={formik.touched.email && formik.errors.email ? 'form-control error' : 'form-control'} id='email' name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? <span className='error_log'>{formik.errors.email}</span> : null}
                </div>
                <div className='form-group'>
                    <label htmlFor='youtubeChannel'>youtube_channel</label>
                    <input type='text' className={formik.touched.youtubeChannel && formik.errors.youtubeChannel ? 'form-control error' : 'form-control'} id='youtubeChannel' name="youtubeChannel" onChange={formik.handleChange} value={formik.values.youtubeChannel} onBlur={formik.handleBlur} />
                    {formik.touched.youtubeChannel && formik.errors.youtubeChannel ? <span className='error_log'>{formik.errors.youtubeChannel}</span> : null}
                </div>
                <div className='form-group'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default YoutubeForm
