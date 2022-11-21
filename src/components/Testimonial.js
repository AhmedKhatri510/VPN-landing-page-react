import LeftRightArr from "./LeftRightArr";
import Review from "./Review";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div className="testimonial-container">
      <h1>Trusted by Thousands of Happy Customer</h1>
      <p>
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>

      <div className="reviews">
        <Review
          userPhoto="Ellipse 175.png"
          name="Viezh Robert"
          place="Warsaw, Poland"
          reviewText="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
        />
        <Review
          userPhoto="Ellipse 175 (1).png"
          name="Yessica Christy"
          place={"Shanxi, China"}
          reviewText="“I like it because I like to travel far and still can connect with high speed.”."
        />
        <Review
          userPhoto="Ellipse 175 (2).png"
          name={"Kim Young Jou"}
          place="Seoul, South Korea"
          reviewText={
            "“This is very unusual for my business that currently requires a virtual private network that has high security.”."
          }
        />
      </div>

      <div className="sliding-points">
        <div className="points-container">
          <div className="rectangle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <LeftRightArr />
      </div>
    </div>
  );
}
