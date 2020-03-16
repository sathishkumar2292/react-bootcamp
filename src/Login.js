import React, { useRef, useState } from 'react';

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  let [loginShow, setLoginShow] = useState(true);
  function toggleForm(e) {
    e.preventDefault();
    setLoginShow(!loginShow);
  }

  let form = loginShow ?
    <div className="login-form">
      <h2 className="mb-4 text-center text-primary">Login</h2>
      <form>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-12 col-form-label">Email</label>
          <div className="col-sm-12">
            <input type="text" className="form-control" id="email" ref={email} placeholder="Email" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-12 col-form-label">Password</label>
          <div className="col-sm-12">
            <input type="text" className="form-control" id="password" ref={password} placeholder="Password" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="description" className="col-sm-12 col-form-label"></label>
          <div className="col-sm-12 text-right">
            <button className="btn btn-primary col-sm-12">Login</button>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-12 text-center">Or</label>
          <label className="col-sm-12 text-center"><a href="#" onClick={(e) => toggleForm(e)}>Register now</a></label>
        </div>
      </form>
    </div>
    : <div className="login-form">
      <h2 className="mb-4 text-center text-primary">Register now</h2>
      <form>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-12 col-form-label">Email</label>
          <div className="col-sm-12">
            <input type="text" className="form-control" id="email" ref={email} placeholder="Email" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-12 col-form-label">Name</label>
          <div className="col-sm-12">
            <input type="text" className="form-control" id="name" ref={name} placeholder="Name" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-12 col-form-label">Password</label>
          <div className="col-sm-12">
            <input type="text" className="form-control" id="password" ref={password} placeholder="Password" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="description" className="col-sm-12 col-form-label"></label>
          <div className="col-sm-12 text-right">
            <button className="btn btn-primary col-sm-12">Register</button>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-12 text-center">Or</label>
          <label className="col-sm-12 text-center"><a href="#" onClick={(e) => toggleForm(e)}>Already have account? Login here</a></label>
        </div>
      </form>
    </div>;
  return (
    <div className="col-10 col-sm-8 col-md-5" style={{ margin: "0 auto" }}>
      {form}


    </div>
  );
}

export default Login;
