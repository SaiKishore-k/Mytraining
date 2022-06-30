import React from "react";
import { Link, NavLink } from "react-router-dom";
import Home from './Product';
const Navbar = (props) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand mx-auto" to="/">BuyABook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/Product">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Myorders">Myorders</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Cart">Cart</NavLink>
        </li>
      </ul>
    </div>
    <div>
  </div>
</nav>
<Home/>
</>
  );
};

export default Navbar;
