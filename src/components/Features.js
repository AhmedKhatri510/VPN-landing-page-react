import "./Features.css";

export default function Features() {
  return (
    <div className="feature-container">
      <img
        src="/Assets/Illustration 2.svg"
        alt="illustration 2"
        className="illustrator-img"
      />
      <div className="feature-content-container">
        <h1>We Provide Many Features You Can Use</h1>
        <p>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul>
          <li>
            <img src="/Assets/Group 1120.svg" alt="tick" /> Powerfull online
            protection.
          </li>
          <li>
            <img src="/Assets/Group 1120.svg" alt="tick" /> without borders.
          </li>
          <li>
            <img src="/Assets/Group 1120.svg" alt="tick" /> Supercharged VPN
          </li>
          <li>
            <img src="/Assets/Group 1120.svg" alt="tick" /> No specific time
            limits.
          </li>
        </ul>
      </div>
    </div>
  );
}
