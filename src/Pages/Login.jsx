import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {
  const [error, setError] = useState("")
  const { signIn, passwordResetEmail } = use(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const emailRef = useRef(null)


  const handleSignInBtn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;


    signIn(email, password)
    .then(res => {
      // console.log(res.user)
      navigate(`${location.state ? location.state : '/'}`)
    })
    .catch(error => {
      setError(error.code, error.message)
    })
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    passwordResetEmail(email)
    .then(() => {
      alert('Password reset email sent')
    })
    .catch(error => {
      console.log(error.code, error.message)
      setError(error.code, error.message)
    })
  }

  return (
    <div>
      <div className="card bg-base-100 min-w-md shrink-0 shadow-2xl px-12 py-6">
        <form onSubmit={handleSignInBtn} className="card-body">
          <fieldset className="fieldset">
            <h1 className="font-bold text-center text-primary text-3xl">
              Login your account
            </h1>
            <div className="border-1 border-base-200 my-6"></div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="input bg-base-200"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input bg-base-200"
              placeholder="Password"
            />
            <div>
              <button
              onClick={handleForgetPassword}
              type="button"
               className="link link-hover">Forgot password?</button>
            </div>
            <button type="submit" className="btn btn-primary mt-4 ">
              Login
            </button>
          </fieldset>
          <p className="text-center mt-4">
            Dont’t Have An Account ?{" "}
            <Link
              to="/auth/register"
              state={location.state}
              className="text-secondary hover:underline cursor-pointer"
            >
              Register
            </Link>
          </p>
         {error && <p className="text-center mt-4 text-secondary">Plaese provide registered email and password</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
