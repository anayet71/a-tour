import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const {createNewUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.name.value)
        const form  = new FormData (e.target)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const photo = form.get('photo')
        console.log(name, password)

        createNewUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            // ..
          });
    }
    return (
        <div>

            <div className=" mt-32 ">
                <div className="hero-content flex-col lg:flex-row-reverse text-black">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h2 className='text-2xl font-semibold'>Register</h2>
                            <form  onSubmit={handleSubmit} className="fieldset">
                                <label className="label">Name</label>
                                <input name='name' type="text" className="input" placeholder="Name" />
                                <label className="label">Phone</label>
                                <input name='phone' type="number" className="input" placeholder="Phone" />
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Photo</label>
                                <input name='photo' type="text" className="input" placeholder="Photo" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-warning font-semibold mt-4">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register; <h1>Register</h1>