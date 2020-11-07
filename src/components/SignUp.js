import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => (
    <div class="p-5" >
        <div class="jumbotron text-center">
            <h1 className="display-4 font-weight-bold text-white">Sign Up</h1>
        </div>
        <form classname="">
            <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>

            <div class="form-group">
                <label for="username">Username</label>
                <input type="email" class="form-control" id="username" placeholder="User" />
            </div>

            <div class="form-group">
                <label for="name">Name</label>
                <input type="email" class="form-control" id="name" placeholder="Name" />
            </div>

            <div class="form-group">
                <label for="password1">Password</label>
                <input type="email" class="form-control" id="password1" placeholder="Password" />
            </div>

            <div class="form-group">
                <label for="password2">Retype Password</label>
                <input type="email" class="form-control" id="password2" placeholder="Retype Password" />
            </div>
            
            <div class="form-group">
                <label for="idea">Website Idea</label>
                <textarea class="form-control" id="idea" rows="3"></textarea>
            </div>

            <div class="form-group">
                <label for="adsense">Google AdSense</label>
                <textarea class="form-control" id="adsense" rows="3"></textarea>
            </div>
            <NavLink to="/account">
                <button class="btn btn-primary" type="submit">Submit form</button>
            </NavLink>
            </form>
    </div>  
);

export default SignUp;