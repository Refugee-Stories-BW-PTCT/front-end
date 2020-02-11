import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import { api } from "../../utils/api";

function Admin({ touched, errors }) {
  return (
    <Form>
      <div>
        <Field
          name="username"
          type="username"
          placeholder="Username"
          autoComplete="off"
        />
        <p>{touched.username && errors.username}</p>
      </div>
      <div>
        <Field
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
        <p>{touched.password && errors.password}</p>
      </div>
      <button type="submit">Come on in &rarr; </button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required(),
    password: yup
      .string()
      .min(6)
      .required()
  }),
  handleSubmit(values, formikBag) {
    api()
      .post("/auth/register", values)
      .then(res => {
        console.log("LOGIN", res);
        localStorage.setItem("token", res.data.token);
        formikBag.props.history.push("/pending");
      }).catch(err => {
          console.log(err)
      });
  }
})(Admin);

