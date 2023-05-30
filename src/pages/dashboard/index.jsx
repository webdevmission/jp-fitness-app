import DefaultLayout from "../../global/components/DefaultLayout";
import Greeting from "./components/Greeting";
import NavBar from "../../global/components/NavBar";
import WorkoutHeading from "./components/WorkoutHeading";
import CheckProgram from "./components/CheckProgram";
import PorgramPreview from "./components/ProgramPreview";

const Dashboard = () => {
  return (
    <DefaultLayout>
      <Greeting />
      <WorkoutHeading />
      <CheckProgram />
      <NavBar />
    </DefaultLayout>
  );
};

export default Dashboard;
