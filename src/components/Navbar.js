import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  const [isNavClicked, setIsNavClicked] = useState(1);

  return (
    <div className="nav-container">
      <img src="/Assets/Logo.svg" alt="logo" />
      <ul className="links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
      <div className="btns">
        <a href="#" className="btn">
          Sign In
        </a>
        <a className="btn-outline" href="#">
          Sign Up
        </a>
      </div>
      {isNavClicked === 1 ? (
        <HiMenu
          className="menu"
          onClick={() => {
            setIsNavClicked(0);
          }}
        />
      ) : (
        <div className="mob-links">
          <RiCloseFill
            className="close"
            onClick={() => {
              setIsNavClicked(1);
            }}
          />
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
          <div className="mob-btn">
            <a href="#" className="btn">
              Sign In
            </a>
            <a className="btn-outline" href="#">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
