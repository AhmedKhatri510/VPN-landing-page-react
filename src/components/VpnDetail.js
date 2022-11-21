import "./VpnDetail.css";

export default function VpnDetail() {
  return (
    <div className="vpnDetail-container">
      <div className="vpnDetail-item">
        <img src="/Assets/Group 1216.svg" alt="user icon" />
        <div>
          <h3>90+</h3>
          <p>Users</p>
        </div>
      </div>
      <div className="vpnDetail-item">
        <img src="/Assets/Group 1215.svg" alt="location icon" />
        <div>
          <h3>30+</h3>
          <p>Locations</p>
        </div>
      </div>
      <div className="vpnDetail-item">
        <img src="/Assets/Group 1216.svg" alt="user icon" />
        <div>
          <h3>50+</h3>
          <p>Servers</p>
        </div>
      </div>
    </div>
  );
}
