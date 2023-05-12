import DefaultLayout from "../../global/components/DefaultLayout";
import Greeting from "./components/Title";

const Dashboard = () => {
  return (
    <DefaultLayout>
      <Greeting></Greeting>
    </DefaultLayout>
  );
};

Dashboard();

export default Dashboard;
