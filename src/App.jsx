import React from "react";
import Overview from "./components/Overview";
import { MainContext } from "./context/Context";
import "./globals.css";
import ActivityMetrics from "./components/ActivityMetrics";

function App() {
  const { loader } = React.useContext(MainContext);
  return loader ? (
    <div>asdf</div>
  ) : (
    <div className="min-h-screen">
      <Overview />
      <div>
        <ActivityMetrics />
      </div>
    </div>
  );
}

export default App;
