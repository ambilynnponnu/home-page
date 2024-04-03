import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('/api/hello')
        .then(res => console.log(res))
        .catch(err => console.error(err));
}, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="card">
            <div className="row ">
              <div className="">
                <div className="card mt-3">
                  <div className="card-body">
                    <h3 className="card-title text-center">Login</h3>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Enter your username"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Enter your password"
                        />
                      </div>
                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary" onClick={() => navigate("/")}>  
                          Login
                        </button>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Don't have an account?
                          <span onClick={() => navigate("/signup")}>
                            {" "}
                            Signup
                          </span>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
