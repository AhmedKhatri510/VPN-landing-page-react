import "./PlanCard.css";

export default function PlanCard({ planName, points, price }) {
  let pointsArr = points.split(", ");

  return (
    <div className="planCard-container">
      <img src="/Assets/Free.svg" alt="box" className="box-image" />
      <h3>{planName}</h3>
      <ul>
        {pointsArr.map(function (point) {
          return (
            <li>
              <img src="/Assets/Group 1120.svg" alt="thin-tick" />
              {point}
            </li>
          );
        })}
      </ul>
      <div>
        <h2>
          {price === "Free" ? (
            price
          ) : (
            <>
              {price}
              <span> /mo</span>
            </>
          )}
        </h2>
        <a className="btn-outline" href="#">
          Select
        </a>
      </div>
    </div>
  );
}
