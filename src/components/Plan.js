import PlanCard from "./PlanCard";
import "./Plan.css";

export default function Plan() {
  return (
    <div className="plan-container">
      <h1>Choose your plan</h1>
      <p>
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
      <div className="plan-cards">
        <PlanCard
          planName="Free Plan"
          points="Unlimited Bandwitch, Encrypted Connection, No Traffic Logs, Works on All Devices"
          price="Free"
        />
        <PlanCard
          planName="Standard Plan"
          points="Unlimited Bandwitch, Encrypted Connection, Yes Traffic Logs, Works on All Devices, Connect Anyware"
          price="$9"
        />
        <PlanCard
          planName="Premium Plan"
          points="Unlimited Bandwitch, Encrypted Connection, Yes Traffic Logs, Works on All Devices, Connect Anyware, Get New Features"
          price="$12"
        />
      </div>
    </div>
  );
}
