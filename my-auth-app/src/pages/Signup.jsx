// src/pages/Signup.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .matches(/[A-Z]/, 'Must contain an uppercase letter')
      .matches(/[a-z]/, 'Must contain a lowercase letter')
      .matches(/[0-9]/, 'Must contain a number')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Create Account</h3>
            <Formik
              initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
              validationSchema={schema}
              onSubmit={(values) => {
                alert('Account Created!\n' + JSON.stringify(values, null, 2));
              }}
            >
              {() => (
                <Form>
                  <div className="mb-3">
                    <label>Full Name</label>
                    <Field name="name" className="form-control" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label>Email</label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label>Password</label>
                    <Field type="password" name="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label>Confirm Password</label>
                    <Field type="password" name="confirmPassword" className="form-control" />
                    <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                  </div>
                  <div className="d-grid mt-3">
                    <button className="btn btn-success" type="submit">Signup</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
