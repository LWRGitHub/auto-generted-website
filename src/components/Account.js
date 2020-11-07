import React from 'react';
import { NavLink } from 'react-router-dom';

const Account = () => (
    <div class="p-5" >
        <div class="jumbotron text-center">
            <h1 className="display-4 font-weight-bold text-white">Account</h1>
        </div>
        <form classname="">

            <div className="border p-5">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="email" class="form-control" id="username" placeholder="Test User" />
                </div>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="email" class="form-control" id="name" placeholder="Example Name" />
                </div>

                <button class="btn btn-primary">Edit Password</button>
            </div>
            <button class="btn btn-primary m-1" type="submit">Save</button>
            
        </form>

       

        <div className="border p-5 mt-5">
            <ol>
                <li><a href="#">www.usersite.com</a></li>
            </ol>

            <button class="btn btn-primary">New</button>
        </div>
        <button class="btn btn-primary m-1">Edit</button>
        <button class="btn btn-primary m-1" type="submit">Save</button>
            
    </div>  
);

export default Account;