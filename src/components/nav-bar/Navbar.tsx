import { Link } from 'react-router-dom';
import { LINKS } from '../../types/consts';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">{LINKS.HOME}</Link>
        </li>
        <li>
          <Link to="/about-me" className="navbar-link">{LINKS.ABOUT_ME}</Link>
        </li>
        <li>
          <Link to="/projects" className="navbar-link">{LINKS.PROJECTS}</Link>
        </li>
        <li>
          <Link to="/contact-me" className="navbar-link">{LINKS.CONTACT_ME}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
