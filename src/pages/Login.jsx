import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
  const { logIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate();
  const handleLogin = (e) => {

    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = (form.get('email'))
    const password = (form.get('password'))
    logIn(email, password)
      .then(() => navigate(location?.state ? location.state : '/'))
      .then((error) => console.error(error))

  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-[clac(100vh-80px)] bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Login here!</h1>
          </div>
          <div className="card w-full max-w-2xl shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control mt-6">
                <p>Already have an account? Please <Link to="/register" className="link link-secondary"> Register Here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Login;