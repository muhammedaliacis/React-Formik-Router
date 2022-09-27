import React from 'react'
import { useFormik } from "formik";
import Validation from '../validation';


function Login() {
  const formik = useFormik({
    initialValues: { 
      email: "",
      password: "", 
      confirmPassword: ""

  },
    onSubmit : (values) => {
      alert("Success Login " + values.email);
    },
  validationSchema: Validation

  });
  return (
    <form onSubmit={formik.handleSubmit}>
  <h1 className='baslik'>LOG IN</h1>

      <div className='input-div'>
          <label className='label' htmlFor="email">Email Address</label>
          <input
          className='input'
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Please enter a email"
          />
          <div className='error' >{formik.errors.email}</div>
      </div>

      <div className='input-div'>
          <label className='label' htmlFor="email">Password</label>
          <input
          className='input'
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Please enter a password"
    autoComplete='off'
          />
          <div className='error' >{formik.errors.password}</div>

      </div>
      

      <div className='input-div'>
          <label className='label' htmlFor="password">Confirm Password</label>
          <input
          className='input'
          autoComplete='off'
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          placeholder="Please enter try password"

          />
          <div className='error' >{formik.errors.confirmPassword}</div>

      </div>

      <button className='submit' type="submit">Log In</button>
    </form>
  )
}
export default Login;
