import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

export default function Navbar() {
  const [navstate, SetnavState] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const closeNavonscroll = () => {
      if (window.scrollY > 20) {
        SetnavState(false);
      }
    };
    window.addEventListener('scroll', closeNavonscroll);
  }, []);

  return (
    <div style={{ height: 'auto' }}>
      <div className="container-fluid position-relative p-0 ">
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <img src="assets/img/logo/logo.jpeg" className='log' alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" onClick={() => SetnavState(!navstate)} >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse" style={{ display: navstate ? "block" : "none" }}>
            <div className="navbar-nav ms-auto py-0">
              <NavLink to="/" label="Home" />
              <NavLink to="/about" label="About" />
              <NavLink to="/treatment" label="Therapeutic Approaches" />
              <NavLink to="/Products" label="Our Offerings" />
              <NavLink to="/Institution" label="Atama Study Center" />
              <NavLink to="/contact" label="Contact Us" />
            </div>
            <div class="dropdowns">
              <button class="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Book Appointment
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="/">Appointment</a>
                <a class="dropdown-item" href="/institution">Admission</a>
                <a class="dropdown-item" href="/contact">Enquiry Form</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );

  function NavLink({ to, label }) {
    const isActive = location.pathname === to;
    return (
      <Link to={to} className={`nav-item nav-link ${isActive ? 'active' : ''}`}>{label}</Link>
    );
  }
}
