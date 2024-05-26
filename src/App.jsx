import React from "react";

import "./globals.css";

import { MainContext } from "./context/Context";
import Overview from "./components/Overview";
import Teams from "./components/Teams";
import TopEmployees from "./components/TopEmployees";
import Courses from "./components/Courses";
import ActivityHours from "./components/ActivityHours";
import TopSkills from "./components/TopSkills";
import SkillsDevelopment from "./components/SkillsDevelopment";
import Loader from "./components/Loader";

function App() {
  const { loader } = React.useContext(MainContext);
  return loader ? (
    <Loader />
  ) : (
    <div className="min-h-screen">
      <Overview />
      <div className="main-grid">
        <div className="col-span-2">
          <Teams />
          <ActivityHours />
          <Courses />
        </div>
        <div>
          <TopEmployees />
          <TopSkills />
          <SkillsDevelopment />
        </div>
      </div>
    </div>
  );
}

export default App;
