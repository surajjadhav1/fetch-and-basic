import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <table class="table table-striped">
          <thead>
            <tr className="bg-success">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Harshal singh</td>
              <td>Harshal@email.com</td>
              <td>7620179820</td>
              <td><Link to="/editEmp" className="btn btn-success">Update</Link></td>
              <td><button className="btn btn-danger">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
