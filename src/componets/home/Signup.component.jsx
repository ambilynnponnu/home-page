import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signupcomponent() {
  const navigate = useNavigate();

  // State variables to store form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save data to local storage
    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // You can also redirect the user to another page or perform additional actions here
    alert("Registration successful");
    console.log(userData);

    // Example: Sending data to the server to set credentials
    axios.post('/setCredentials', userData)
      .then(res => {
        console.log(res);
        
        // If setting credentials is successful, send email
        axios.post('/sendEmail', {
          to: formData.email,
          subject: "Welcome to Fruit Mart",
          text: "Thank you for registering with Fruit Mart. We look forward to serving you!",
        })
        .then(emailRes => console.log(emailRes))
        .catch(emailErr => console.error(emailErr));
      })
      .catch(err => console.error(err));
  };


  return (
    <div>
      <section class="h-100 h-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-8 col-xl-6">
              <div class="card rounded-3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                  class="w-100"
                  alt="Sample photo"
                />
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    Create an account
                  </h3>

                  <form class="px-md-2" onSubmit={handleSubmit}>
                    <div class="form-outline mb-4">
                      <label class="form-label" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        id="username"
                        class="form-control"
                        onChange={handleChange}
                        value={formData.username}
                      />
                    </div>

                    <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                      <div class="col-12">
                        <label class="form-label" htmlFor="email">
                          Email
                        </label>
                        <div class="form-outline">
                          <input
                            type="email"
                            id="email"
                            class="form-control"
                            onChange={handleChange}
                            value={formData.email}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                      <div class="col-12">
                        <label class="form-label" htmlFor="password">
                          Create Password
                        </label>
                        <div class="form-outline">
                          <input
                            type="password"
                            id="password"
                            class="form-control"
                            onChange={handleChange}
                            value={formData.password}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                      <div class="col-12">
                        <label class="form-label" htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                        <div class="form-outline">
                          <input
                            type="password"
                            id="confirmPassword"
                            class="form-control"
                            onChange={handleChange}
                            value={formData.confirmPassword}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-3">
                        <button type="submit" class="btn submit-btn mb-1">
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Already have an account?
                        <span onClick={() => navigate("/login")} className="login-link">
                          {" "}
                          Login
                        </span>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signupcomponent;
