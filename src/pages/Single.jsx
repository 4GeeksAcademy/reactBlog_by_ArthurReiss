import React from "react";

const SingleElementPage = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="page_2 d-flex p-5 mb-4 bg-dark bg-opacity-50 rounded-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzgzXwzB9-pDbxkXYVfANDyedkpM6e8w5BYckHhItAyoy_x7PSOhPZA8fm&s=10"
          className="img-fluid imgJumbo rounded-top"
          alt="Object"
        />

        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-white">character</h1>
          <p className="col-md-8 text-white fs-4">
            Using a series of utilities, you can create this highlighted hero
            section. Check out the examples below for how you can remix and
            restyle it to your liking.
          </p>
          <div className="d-flex stacks">
            <div className="card text-center mx-2">
              <div className="card-body">
                <h4 className="card-title">stack</h4>
                <p className="card-text">description</p>
              </div>
            </div>
            <div className="card text-center mx-2">
              <div className="card-body">
                <h4 className="card-title">stack</h4>
                <p className="card-text">description</p>
              </div>
            </div>
            <div className="card text-center mx-2">
              <div className="card-body">
                <h4 className="card-title">stack</h4>
                <p className="card-text">description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleElementPage;
