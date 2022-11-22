import "./Review.css";

export default function Review({ userPhoto, name, place, reviewText, active }) {
  return (
    <div
      className={"review-container" + (active === 1 ? " active-review" : "")}
    >
      <div className="user-detail">
        <img src={"/Assets/" + userPhoto} alt="user-photo" />
        <div>
          <h4 className="name">{name}</h4>
          <p className="place">{place}</p>
        </div>
        <div>
          <span className="rating">4.5</span>{" "}
          <img src="/Assets/star.png" alt="star" className="star" />
        </div>
      </div>
      <p className="review-text">{reviewText}</p>
    </div>
  );
}
