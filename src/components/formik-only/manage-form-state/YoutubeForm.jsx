import React from 'react';
import { useFormik } from 'formik';

function YoutubeForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            youtubeChannel: '',
        }
    });
    return (
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' className="form-control" id='name' name="name" onChange={formik.handleChange} value={formik.values.name} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>email</label>
                    <input type='email' className="form-control" id='email' name="email" onChange={formik.handleChange} value={formik.values.email} />
                </div>
                <div className='form-group'>
                    <label htmlFor='youtubeChannel'>youtube_channel</label>
                    <input type='text' className="form-control" id='youtubeChannel' name="youtubeChannel" onChange={formik.handleChange} value={formik.values.youtubeChannel} />
                </div>
                <div className='form-group'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default YoutubeForm
