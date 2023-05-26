import DefaultLayout from "../../global/components/DefaultLayout";
import Greeting from "./components/Greeting";
import NavBar from "../../global/components/NavBar";
import WorkoutHeading from "./components/WorkoutHeading";
import BrowseProgram from "./components/BrowseProgram";

const Dashboard = () => {
  return (
    <DefaultLayout>
      <Greeting />
      <WorkoutHeading />
      <BrowseProgram />
      <NavBar />
    </DefaultLayout>
  );
};

export default Dashboard;
