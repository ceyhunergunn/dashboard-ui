import React from "react";

import "./globals.css";

import { MainContext } from "./context/Context";
import Overview from "./components/Overview";
import Teams from "./components/Teams";
import Courses from "./components/Courses";
import ActivityHours from "./components/ActivityHours";
import SkillsDevelopment from "./components/SkillsDevelopment";
import Loader from "./components/Loader";
import TopEmployees from "./components/TopEmployees";
import TopSkills from "./components/TopSkills";

function App() {
  const { loader } = React.useContext(MainContext);

  return loader ? (
    <Loader />
  ) : (
    <div className="min-h-screen">
      <Overview />
      <div className="main-grid-2">
        <Teams />
        <ActivityHours />
      </div>
      <div className="main-grid-1">
        <TopEmployees />
        <TopSkills />
        <SkillsDevelopment />
      </div>
      <div className="">
        <Courses />
      </div>
    </div>
  );
}

export default App;
