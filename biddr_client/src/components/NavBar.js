import React from 'react';
import { NavLink } from "react-router-dom";
import { Session } from "../requests";
const NavBar = ({ currentUser, onSignOut }) => {
  const handleSignOut = () => {
    Session.destroy().then(() => {
      onSignOut();
    });
  };
  return (

      <nav className="d-flex justify-content-between align-items-center p-0">
      <div>
        <img style={{width: "5em"}} src="https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg?cs=srgb&dl=pexels-pixabay-210600.jpg&fm=jpg"></img>
      </div>
      <div>
          <NavLink className="m-2 text-decoration-none text-dark" to="/">Home</NavLink>
          <NavLink className="m-2 text-decoration-none text-dark" to="/auctions">Auctions</NavLink>
        {currentUser ? (
          <>
            <NavLink className="m-2 text-decoration-none text-dark" to="/auctions/new">New Auction</NavLink>
            <span>Welcome, {currentUser.username}</span>{" "}
            <button className="btn btn-secondary m-2" onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <>
            <NavLink className="m-2 text-decoration-none text-dark" to="/sign_in">Sign In</NavLink>
            <NavLink className="m-2 text-decoration-none text-dark" to="/sign_up">Sign Up</NavLink>
          </>
        )}
        </div>
      </nav>

  );
};

export default NavBar;