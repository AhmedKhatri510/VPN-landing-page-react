import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <img src="/Assets/Logo.svg" alt="logo" className="footer-logo" />
        <p>
          <strong>LaslesVPN</strong> is a private virtual network that has
          unique features and has high security.
        </p>
        <div className="social-icons">
          <img src="/Assets/Facebook.svg" alt="logo" />
          <img src="/Assets/Twitter.svg" alt="logo" />
          <img src="/Assets/Instagram.svg" alt="logo" />
        </div>
        <p className="copyright">©2020LaslesVPN</p>
      </div>
      <table className="footer-right">
        <tr>
          <th>Product</th>
          <th>Engage</th>
          <th>Earn Money</th>
        </tr>
        <tr>
          <td>Download </td>
          <td>LaslesVPN ? </td>
          <td>Affiliate</td>
        </tr>
        <tr>
          <td>Pricing</td>
          <td>FAQ</td>
          <td>Become Partner</td>
        </tr>
        <tr>
          <td>Locations</td>
          <td>Tutorials</td>
        </tr>
        <tr>
          <td>Server</td>
          <td>About Us</td>
        </tr>
        <tr>
          <td>Countries</td>
          <td>Privacy Policy</td>
        </tr>
        <tr>
          <td>Blog</td>
          <td>Terms of Service</td>
        </tr>
      </table>
    </div>
  );
}
