import dashboardImage from "./img/dashboard-pic.png";

const userName = "Jamie";

const Greeting = () => {
  return (
    <div className="w-full px-4">
      <h1 className="mb-5 pt-10 font-mainSans text-4xl font-bold text-d-light">
        Hi {userName}!
      </h1>
      <img
        className="mx-auto pb-10"
        src={dashboardImage}
        alt="Frau macht Yoga"
      />
    </div>
  );
};

export default Greeting;
