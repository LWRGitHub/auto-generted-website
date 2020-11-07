import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="d-flex">
      <NavLink className="btn btn-primary m-2" to="/home">Home</NavLink>
        <div class="btn-group dropleft ml-auto m-2">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Log in/out
            </button>

            
            <div class="dropdown-menu ">
                <form class="px-4 py-3">
                    <div class="form-group">
                    <label for="exampleDropdownFormEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                    </div>
                    <div class="form-group">
                    <label for="exampleDropdownFormPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                    </div>
                    <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                    <label class="form-check-label" for="dropdownCheck">
                        Remember me
                    </label>
                    </div>
                    <NavLink to="/account">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </NavLink>
                </form>
                <div class="dropdown-divider"></div>
                <NavLink to="/signup">
                    <a class="dropdown-item" href="/signup">New around here? Sign up</a>
                </NavLink>
                <a class="dropdown-item" >Forgot password?</a>
            </div>

        </div>
    </nav>
  </header>
);


export default Header;