import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
  // State variables to store username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // You can now access username and password state variables here
    const loginData = {
      username: username,
      password: password
    };

    axios.post('/loginToApp', loginData)
      .then(res => {
        console.log(res);
        // Redirect or handle success as needed
      })
      .catch(err => {
        console.error(err);
        // Handle error as needed
      });
  }

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
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Enter your username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
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
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">
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
