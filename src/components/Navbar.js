import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav-container">
      <img src="/Assets/Logo.svg" alt="logo" />
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
      <div className="btns">
        <a href="#" className="btn">
          Sign In
        </a>
        <a className="btn-outline" href="#">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Navbar;
