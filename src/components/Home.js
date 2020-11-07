import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
    <div className="jumbotron text-center m-5" >
      <h1 className="display-4 font-weight-bold text-white">Auto Generated Website To Make You Money</h1>
      <NavLink className="btn btn-primary m-2 mt-5" to="/signup">Sign up</NavLink>
    </div>  
);

export default Home;

