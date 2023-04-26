import React from 'react'

const Feedback = () => {
  return (
    <div className='container mt-4'>
            <h1 className='text-center text-success'>Feedback</h1>
        <div className="row">
        <table class="table table-striped mt-4">
          <thead>
            <tr className="bg-success">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Feedback</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Harshalsingh</td>
              <td>he is good Employee</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
  )
}

export default Feedback