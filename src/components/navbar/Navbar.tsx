import { useState } from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>GreenEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/list">List</a>
        <a href="/newPost">New Post</a>
        <a href="/ profilePage">Profile</a>
        <a href="/register">Register</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <NavLink to={"/list"}>List</NavLink>
          <NavLink to={"/newPost"}>New Post</NavLink>
          <NavLink to={"/profilePage"}>Profile</NavLink>
          <NavLink to={"/register"}>Register</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
