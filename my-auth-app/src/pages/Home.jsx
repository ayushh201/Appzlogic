// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { FaLock, FaRocket } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="display-5 fw-bold">Welcome to <span className="text-primary">AuthApp</span></h1>
          <p className="lead">
            A secure and scalable authentication system built with modern technologies.
            Sign up or log in to access your dashboard and experience a seamless authentication flow.
          </p>
          <div className="d-flex gap-3 mt-4">
            <Link to="/login" className="btn btn-outline-primary btn-lg">
              <FaLock className="me-2" />
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary btn-lg">
              <FaRocket className="me-2" />
              Get Started
            </Link>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="Secure Login"
            className="img-fluid"
            style={{ maxHeight: '300px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
