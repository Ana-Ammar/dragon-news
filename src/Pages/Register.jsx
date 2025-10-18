import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";


const Register = () => {
  const { createUser, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
    .then(res => {
      console.log(res.user)
      setUser(res.user)
    })
    .catch(error => {
      console.log(error.message)
    })
  };
  return (
    <div>
      <div className="card bg-base-100 min-w-md shrink-0 shadow-2xl px-12 py-6">
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <h1 className="font-bold text-center text-primary text-3xl">
              Register your account
            </h1>

            <div className="border-1 border-base-200 my-6"></div>
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input bg-base-200 w-full"
              placeholder="Name"
              required
            />

            {/* PhotoUrl */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input bg-base-200 w-full"
              placeholder="PhotoUrl"
              required
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input bg-base-200 w-full"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input bg-base-200 w-full"
              placeholder="Password"
              required
            />
            <button type="submit" className="btn btn-primary mt-4 ">
              Register
            </button>
          </fieldset>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/auth"
              className="text-secondary hover:underline cursor-pointer"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
