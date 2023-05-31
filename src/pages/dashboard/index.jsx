import DashboardLayout from "./components/DashboardLayout";
import Greeting from "./components/Greeting";
import NavBar from "../../global/components/NavBar";
import WorkoutHeading from "./components/WorkoutHeading";
import CheckProgram from "./components/CheckProgram";
import PorgramPreview from "./components/ProgramPreview";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Greeting />
      <WorkoutHeading />
      <CheckProgram />
      <NavBar />
    </DashboardLayout>
  );
};

export default Dashboard;
