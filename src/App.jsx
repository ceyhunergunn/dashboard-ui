import React from "react";

import "./globals.css";

import { MainContext } from "./context/Context";
import Overview from "./components/Overview";
import Teams from "./components/Teams";
import Courses from "./components/Courses";
import ActivityHours from "./components/ActivityHours";
import SkillsDevelopment from "./components/SkillsDevelopment";
import Loader from "./components/Loader";
import Performance from "./components/Performance";

function App() {
  const { loader } = React.useContext(MainContext);

  return loader ? (
    <Loader />
  ) : (
    <div className="min-h-screen">
      <Overview />
      <div className="main-grid-1">
        <Teams />
        <ActivityHours />
        <Courses />
      </div>
      <div className="main-grid-2">
        <Performance />
        <SkillsDevelopment />
      </div>
    </div>
  );
}

export default App;
