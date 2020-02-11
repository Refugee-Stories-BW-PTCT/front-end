import React, { useState, useEffect } from "react";
import { api } from "../../utils/api";

import { Form, Field, withFormik } from "formik";
import * as yup from "yup";

const SubmitStory = ({
  errors,
  touched,
  values,
  status,
  handleReset,
  ...props
}) => {
  const [storiesPending, setStoriesPending] = useState([]);

  useEffect(() => {
    if (status) {
      setStoriesPending([...storiesPending, status]);
    }
  }, []);

  return (
    <div>
      <h2>Tell Us Your Story!</h2>
      <div></div>

      <Form>
        <Field name="name" type="text" placeholder="Your name" />

        {touched.name && errors.name && <p className="error">{errors.name}</p>}

        <Field name="email" type="email" placeholder="Your email" />

        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <Field name="title" type="text" placeholder="Title of Your Story" />

        {touched.title && errors.title && (
          <p className="error">{errors.title}</p>
        )}

        <Field
          component="textarea"
          name="contents"
          type="text"
          placeholder="Enter your story..."
        />

        {touched.story && errors.story && (
          <p className="error">{errors.story}</p>
        )}

        <div style={{ marginTop: "40px" }}>
          <button className="button" type="submit">
            Submit the Story
          </button>
        </div>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      name: values.name || "",
      email: values.email || "",
      title: values.title || "",
      contents: values.contents || "",
      pending: 1
    };
  },
  validationSchema: yup.object().shape({
    title: yup.string().required("Required!"),
    contents: yup.string().required("Required!"),
    name: yup.string().required("Required!"),
    email: yup
      .string()
      .email("Email Not Valid!")
      .required()
  }),

  handleSubmit(values, { setStatus, props }) {
    api()
      .post("/stories", values)
      .then(res => {
        setStatus(res.data);
        props.history.push("/stories");
      })
      .catch(err => console.log(err.response));
  }
})(SubmitStory);
