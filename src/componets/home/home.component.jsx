import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundimg from "../../images/backgroundimg.jpg";
function Home() {
  return (
    <div>
      <div
        className="bg-img"
      >
        <div class="container text-center mt-5">
          <div class="row">
            <div class="col-4">
              {" "}
              <div class="card custom-card">
                <img
                  src={backgroundimg}
                  class="card-img-top img-fluid"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card custom-card">
                <img
                  src={backgroundimg}
                  class="card-img-top img-fluid"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card custom-card">
                <img
                  src={backgroundimg}
                  class="card-img-top img-fluid"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
