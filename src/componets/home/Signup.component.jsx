import React, { useState } from "react";

function Signupcomponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save data to local storage
    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // You can also redirect the user to another page or perform additional actions here
    alert("Registration successful");
    console.log("ddd",userData);

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

                  <form class="px-md-2" onSubmit={(e) => handleSubmit(e)}>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example1q">
                        Name
                      </label>
                      <input
                        type="text"
                        id="form3Example1q"
                        class="form-control"
                        onChange={handleChange}
                      />
                    </div>

                    <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                      <div class="col-12">
                        <label class="form-label" for="form3Example1w">
                          Email
                        </label>
                        <div class="form-outline">
                          <input
                            type="email"
                            id="form3Example1w"
                            class="form-control"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                      <div class="col-12">
                        <label class="form-label" for="form3Example1w">
                          Create Password
                        </label>
                        <div class="form-outline">
                          <input
                            type="password"
                            id="form3Example1w"
                            class="form-control"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                      <div class="col-12">
                        <label class="form-label" for="form3Example1w">
                          Confirm Password
                        </label>
                        <div class="form-outline">
                          <input
                            type="password"
                            id="form3Example1w"
                            class="form-control"
                            onChange={handleChange}
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
