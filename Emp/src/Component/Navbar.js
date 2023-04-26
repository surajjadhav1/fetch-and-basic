import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    < >
<nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand fw-4 text-warning font-weight-bold" href="#">Employee Management</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

      <li className="nav-item">
          <Link to="/"  className="nav-link active  text-light" href="#">View Employee</Link>
        </li>
        <li className="nav-item">
          <Link to="/addEmp" className="nav-link active  text-light" aria-current="page" href="#">Add Employee</Link>
        </li>
     
        <li className="nav-item">
          <Link to="/addfeed" className="nav-link active  text-light" aria-current="page" href="#">Add Feedback</Link>
        </li>
        <li className="nav-item">
          <Link to="/feed" className="nav-link active  text-light" aria-current="page" href="#">View Feedback</Link>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar