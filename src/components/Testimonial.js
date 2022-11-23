import LeftRightArr from "./LeftRightArr";
import Review from "./Review";
import "./Testimonial.css";
import { useState } from "react";
import Subscribe from "./Subscribe";

export default function Testimonial() {
  const [activeReview, setActiveReview] = useState("Viezh Robert");
  const [activeRect, setActiveRect] = useState(1);
  // const [hideReview, setHideReview] = useState("");

  // let htmlColl = document.getElementsByClassName("review-container");
  // if (window.innerWidth < 930) {
  //   let activeUser;

  //   for (let i = 0; i < htmlColl.length; i++) {
  //     if (htmlColl[i].className?.split(" ")?.length === 2) {
  //       activeUser = htmlColl[i];
  //       break;
  //     }
  //   }

  //   for (let i = 0; i < htmlColl.length; i++) {
  //     if (activeUser.isEqualNode(htmlColl[i])) {
  //       setHideReview((i + 1).toString());
  //       break;
  //     }
  //   }
  // }
  // if (window.innerWidth > 930) {
  //   setHideReview("");
  // }

  return (
    <div className="a-container">
      <div className="testimonial-container">
        <h1>Trusted by Thousands of Happy Customer</h1>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>

        <div className="reviews">
          <div
            className={
              activeReview === "Viezh Robert" ? "a-acitve" : "hide-review"
            }
          >
            <Review
              userPhoto="Ellipse 175.png"
              name="Viezh Robert"
              place="Warsaw, Poland"
              reviewText="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
              active={activeReview === "Viezh Robert" ? 1 : 0}
            />
          </div>
          <div
            className={
              activeReview === "Yessica Christy" ? "a-review" : "hide-review"
            }
          >
            <Review
              userPhoto="Ellipse 175 (1).png"
              name="Yessica Christy"
              place={"Shanxi, China"}
              reviewText="“I like it because I like to travel far and still can connect with high speed.”."
              active={activeReview === "Yessica Christy" ? 1 : 0}
            />
          </div>
          <div
            className={
              activeReview === "Kim Young Jou" ? "a-review" : "hide-review"
            }
          >
            <Review
              userPhoto="Ellipse 175 (2).png"
              name={"Kim Young Jou"}
              place="Seoul, South Korea"
              reviewText={
                "“This is very unusual for my business that currently requires a virtual private network that has high security.”."
              }
              active={activeReview === "Kim Young Jou" ? 1 : 0}
            />
          </div>
        </div>

        <div className="sliding-points">
          <div className="points-container">
            <div className={activeRect === 1 ? "rectangle" : "circle"}></div>
            <div className={activeRect === 2 ? "rectangle" : "circle"}></div>
            <div className={activeRect === 3 ? "rectangle" : "circle"}></div>
            <div className="circle"></div>
          </div>
          <LeftRightArr
            setActiveReview={setActiveReview}
            setActiveRect={setActiveRect}
            // setHideReview={setHideReview}
          />
        </div>
      </div>
      <Subscribe />
    </div>
  );
}
