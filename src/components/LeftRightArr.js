import "./LeftRightArr.css";

export default function LeftRightArr({ setActiveReview, setActiveRect }) {
  const htmlColl = document.getElementsByClassName("review-container");
  const pointsContainerColl =
    document.getElementsByClassName("points-container")[0]?.children;

  // console.log(pointsContainerColl);

  let nextHtmlIdx;
  let nextPtIdx;

  function shiftPointRight() {
    console.log(pointsContainerColl);

    for (let i = 0; i < pointsContainerColl.length - 1; i++) {
      console.log(pointsContainerColl[i].className);
      console.log(i);
      if (
        pointsContainerColl[i].className === "rectangle" &&
        i !== pointsContainerColl.length - 2
      ) {
        nextPtIdx = i + 2;
        console.log("hello1");
        break;
      }

      if (
        pointsContainerColl[i].className === "rectangle" &&
        i === pointsContainerColl.length - 2
      ) {
        nextPtIdx = 1;
        console.log("hello2");
        break;
      }
    }

    setActiveRect(nextPtIdx);
  }

  function handleRightClick(e) {
    e.preventDefault();

    //shifting points to the right
    // console.log(pointsContainerColl);

    //shifting border to the right

    for (let i = 0; i < htmlColl.length; i++) {
      if (
        htmlColl[i].className?.split(" ")?.length === 2 &&
        i === htmlColl.length - 1
      ) {
        nextHtmlIdx = 0;
        break;
      }
      if (htmlColl[i].className?.split(" ")?.length === 2) {
        nextHtmlIdx = i + 1;
        break;
      }
    }

    const activeUser = htmlColl[nextHtmlIdx];

    const name =
      activeUser.children[0].getElementsByClassName("name")[0].innerText;

    shiftPointRight();
    setActiveReview(name);

    console.log(name);
  }

  function handleLeftClick(e) {
    e.preventDefault();

    for (let i = htmlColl.length - 1; i >= 0; i--) {
      if (htmlColl[i].className?.split(" ")?.length === 2 && i === 0) {
        nextHtmlIdx = htmlColl.length - 1;
        break;
      }
      if (htmlColl[i].className?.split(" ")?.length === 2) {
        nextHtmlIdx = i - 1;
        break;
      }
    }

    const activeUser = htmlColl[nextHtmlIdx];

    const name =
      activeUser.children[0].getElementsByClassName("name")[0].innerText;

    setActiveReview(name);

    console.log(name);
  }

  return (
    <div className="left-right-arr-container">
      <div className="left-arr" onClick={handleLeftClick}>
        <strong>&larr;</strong>
      </div>
      <div className="right-arr" onClick={handleRightClick}>
        <strong>&rarr;</strong>
      </div>
    </div>
  );
}
