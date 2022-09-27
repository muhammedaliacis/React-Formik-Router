import React from 'react'
import {useFormik} from 'formik';
import Validation2 from './validation2';
import './styles.css'

function Signup() {

    const formik = useFormik({
        initialValues: {
        email: "",
        password: ""
    },
    onSubmit : (values) => {
        console.log(values)
    },
    validationSchema : Validation2
});
  return (
    <form onSubmit={formik.handleSubmit}>
        <h1 className='baslik'>SIGN UP</h1>
        <div className='input-div'>
            <label className='label'>Email:</label>
            <input
            className='input'
            type="email"
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Please enter a email"

            />
            {
            formik.errors.email && <div className='error' >{formik.errors.email}</div>
            }
        </div>
        <div className='input-div'>
            <label className='label'>Password:</label>
            <input
              type="password"

            className='input'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Please enter a password"

            />
            <div className='error' >{formik.errors.password}</div>
        </div>
        <button className='submit' type='submit'>Sign Up</button>
    </form>
  )
}

export default Signup;
