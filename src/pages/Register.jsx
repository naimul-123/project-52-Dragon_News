import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        console.log(form.get('name'))
        console.log(form.get('photo'))
        const email = (form.get('email'))
        const password = (form.get('password'))

        // create user
        createUser(email, password)
            .then((result) => console.log(result.user))
            .then((error) => console.log(error.message))

    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-[clac(100vh-80px)] bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Pleasew register now!</h1>
                    </div>
                    <div className="card w-full max-w-2xl shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" required />

                            </div>
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
                                {/* <label className="label">
                  <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="form-control mt-6">
                                <p>Already have an account? Please <Link to="/login" className="link link-secondary"> login Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;