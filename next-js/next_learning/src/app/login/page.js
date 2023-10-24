import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function login() {
  return (
   <>
   <section className="vh-100" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong">
          <div className="card-body p-5 text-center bg-primary-subtle">

            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlfor="typeEmailX-2">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlfor="typePasswordX-2">Password</label>
            </div>

            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" htmlfor="form1Example3"> Remember password </label>
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            <hr className="my-4"/>

            <button className="btn btn-lg btn-block btn-warning  my-2" 
              type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
            <button className="btn btn-lg btn-block  btn-warning " 
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section></>
  )
}