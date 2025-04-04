import React from "react";

const UserLogin = () => {
  return (
    <>
      <div className="form">
        <form className="w-25 border shadow">
          <div className="m-3">
            <label for="exampleInputEmail1" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="m-3">
            <label for="exampleInputPassword1" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="m-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <div className="text-center mb-3">
            <button type="submit " className="btn btn-primary px-4">
              Log in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserLogin;
