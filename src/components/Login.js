import React from "react";

const Login = () => {
  return (
    <div className="d-flex align-items-center">
      <main class="form-signin w-50 m-auto">
        <form className="form-signin  m-auto w-50">
          <h1 className="h3 mb-3 font-weight-normal">Log in</h1>
          <label for="inputEmail" className="sr-only ">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control mt-2"
            placeholder="Email address"
            required=""
            autofocus=""
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control mt-2"
            placeholder="Password"
            required=""
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
