const userName = "Jamie";

const Greeting = () => {
  return (
    <div>
      <h1 className=" text-d-light font-mainSans font-bold text-4xl">
        Hi {userName}!
      </h1>
      <img src="./img/dashboard-pic.jpg" alt="Frau macht Yoga" />
    </div>
  );
};

export default Greeting;
