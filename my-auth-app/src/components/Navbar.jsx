import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <Link className="navbar-brand" to="/">AuthApp</Link>
    <div className="ml-auto">
      <Link to="/login" className="btn btn-outline-light me-2"><FaUser /> Login</Link>
      <Link to="/signup" className="btn btn-outline-success">Signup</Link>
    </div>
  </nav>
);

export default Navbar;
