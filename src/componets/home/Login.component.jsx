import React from "react";
import backimg from "../../images/backimg.jpg";
function Login() {
  return (
    <div
      className="container mt-5"
      //   style={{ backgroundImage: `url(${backimg})` }}
    >
      <div className="card">
        <div className="row ">
          <div className="col-4">
            <img src={backimg} alt="" className="img-fluid" />
          </div>
          <div className="col-4">
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
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
