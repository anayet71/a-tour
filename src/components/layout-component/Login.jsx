import { Link, Outlet } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-11/12 mx-auto mt-32 ">
            <div className="  ">
                <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h3 className="text-2xl pb-2 font-bold text-black">Login</h3>
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input border-3 border-b" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-warning mt-4">Login</button>
                            <p className="text-black font-semibold">Don't have and account? <span className="text-yellow-500"><Link to='/register'>Create an account</Link>
                            </span> 
                             </p>
                        </fieldset>
                    </div>

                </div>
            </div>
                    <Outlet></Outlet>
        </div>
    );
};

export default Login;