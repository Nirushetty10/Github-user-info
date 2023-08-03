import React, { Component } from "react";
import axios from "axios";
import { Formik } from "formik";
import "./Form.scss"

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      resData : ""
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  postData = async(data) => {
    try {
      let res = await axios.post("https://reqres.i/api/registration", data);
      console.log(res);
      if(res.status === 201) {
        this.setState({
          resData : "User Logged in successfully"
        })
      } else {
        this.setState({
          resData : "Something went wrong.. please login again"
        })
      }
    } catch (error) {
      this.setState({
        resData : "Something went wrong.. please login again"
      })
    }
  };

  render() {
    return (
      <div className="login-page">
        <h1 className="title">Login</h1>
    
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (!values.password) {
              errors.password = "Password is required";
            } else if (values.password.length < 8) {
              errors.password = "Password sould should be greater than 7 characters";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            this.postData(values);
            values.email = ""
            values.password = ""
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            touched,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="email">email*</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? 'error' : ''}
              />
              <div className="emailError">{errors.email}</div> 
              <label htmlFor="email">passwod*</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={touched.password && errors.password ? 'error' : ''}
              />
              <div className="passwordError">{errors.password}</div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
        <div className="serverResponse">{this.state.resData}</div>
      </div>
    );
  }
}
