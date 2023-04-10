import Sidebar from "../../components/Sidebar";
import DashboardLayout from "../../layouts/Dashboard";

const Dashboard = () => {
  return (
    <div className="dashboard__container d-flex">
      <div className="dashboard-layout__sidebar">
        <Sidebar />
      </div>
      <div className="dashboard-layout__content  p-5 w-100">
        <DashboardLayout/>
      </div>
    </div>
  );
};

export default Dashboard;
