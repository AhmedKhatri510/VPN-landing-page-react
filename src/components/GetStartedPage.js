import "./GetStartedPage.css";
export default function GetStarted() {
  return (
    <div className="getStarted-container">
      <div className="getStarted-content">
        <h1>
          Want anything to be easy with{" "}
          <span style={{ fontWeight: 900 }}>LaslesVPN.</span>
        </h1>
        <p>
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </p>
        <button className="btn-getStarted">Get Started</button>
      </div>
      <img src="/Assets/Illustration 1.svg" alt="illustration1" />
    </div>
  );
}
