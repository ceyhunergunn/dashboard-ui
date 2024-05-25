import React from "react";
import Overview from "./components/Overview";
import { MainContext } from "./context/Context";
import "./globals.css";
import TeamPerformance from "./components/TeamPerformance";
import TopEmployees from "./components/TopEmployees";
import Courses from "./components/Courses";
import ActivityHours from "./components/ActivityHours";
import TopSkills from "./components/TopSkills";

function App() {
  const { loader } = React.useContext(MainContext);
  return loader ? (
    <div>asdf</div>
  ) : (
    <div className="min-h-screen">
      <Overview />
      <div className="main-grid">
        <div className="col-span-2">
          <TeamPerformance />
          <ActivityHours />
        </div>
        <div>
          <TopEmployees />
          <TopSkills />
        </div>
      </div>
    </div>
  );
}

export default App;
