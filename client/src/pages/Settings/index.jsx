import Sidebar from "../../components/Sidebar";
import SettingsLayout from "../../layouts/Settings";
import { useEffect } from "react";
import axios from "axios";

const URL = import.meta.env.VITE_API_SERVER;

const Settings = () => {
  return (
    <div className="dashboard__container d-flex">
      <div className="dashboard-layout__sidebar">
        <Sidebar />
      </div>
      <div className="dashboard-layout__content p-5 w-100">
        <SettingsLayout />
      </div>
    </div>
  );
};

export default Settings;
