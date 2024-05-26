import React from "react";
import Overview from "./components/Overview";
import { MainContext } from "./context/Context";
import "./globals.css";
import Teams from "./components/Teams";
import TopEmployees from "./components/TopEmployees";
import Courses from "./components/Courses";
import ActivityHours from "./components/ActivityHours";
import TopSkills from "./components/TopSkills";
import SkillsDevelopment from "./components/SkillsDevelopment";

function App() {
  const { loader } = React.useContext(MainContext);
  return loader ? (
    <div>asdf</div>
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
