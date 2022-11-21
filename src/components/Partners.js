import "./Partners.css";

export default function Partners() {
  const imageNames = [
    "Mask Group.svg",
    "Mask Group (1).svg",
    "Mask Group (2).svg",
    "Mask Group (3).svg",
    "Mask Group (4).svg",
  ];

  return (
    <div className="partner-container">
      {imageNames.map(function (name) {
        return <img src={"/Assets/" + name} alt="partner" />;
      })}
    </div>
  );
}
