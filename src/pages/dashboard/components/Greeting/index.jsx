import dashboardImage from "./img/dashboard-pic.jpg";

const userName = "Jamie";

const Greeting = () => {
  return (
    <div>
      <h1 className="font-mainSans text-4xl font-bold text-d-light">
        Hi {userName}!
      </h1>
      <img src={dashboardImage} alt="Frau macht Yoga" />
    </div>
  );
};

export default Greeting;
