// src/pages/Login.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Login</h3>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={schema}
              onSubmit={(values) => {
                alert('Logged in!\n' + JSON.stringify(values, null, 2));
              }}
            >
              {() => (
                <Form>
                  <div className="mb-3">
                    <label>Email Address</label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label>Password</label>
                    <Field type="password" name="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>
                  <div className="d-grid mt-3">
                    <button className="btn btn-primary" type="submit">Login</button>
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

export default Login;
