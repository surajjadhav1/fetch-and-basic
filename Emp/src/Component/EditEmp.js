import React from 'react'

const EditEmp = () => {
  return (
    <div className='container mt-5'>
    <div className="row">
        <div className="col-md-6 offset-md-3">
        <div className="card">
        <div className="card-header">
                <h1 className='text-center text-success'>Edit Employee</h1>
        </div>
        <div className="card-body">
          <form action="">

            <label htmlFor="">Id</label>
            <input type="text" name='id' className='form-control mb-4'/>

            <label htmlFor="">Name</label>
            <input type="text" name='name' className='form-control mb-4'/>

            <label htmlFor="">Email</label>
            <input type="text" name='email' className='form-control mb-4'/>

            <label htmlFor="">Phone</label>
            <input type="text" name='phone' className='form-control mb-4'/>

            <button className='form-control btn btn-lg btn-primary mb-4' >Update</button>
          </form>
        </div>
    </div>
        </div>
    </div>
    

</div>
  )
}

export default EditEmp