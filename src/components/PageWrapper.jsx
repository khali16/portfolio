import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Profile from "./Content/Profile/Profile";
import About from "./Content/AboutMe/About";
import WorkoutPlanner from "./Content/SingleProject/WorkoutPlanner/WorkoutPlanner";
import MeliciiRecipes from "./Content/SingleProject/Melicii/MeliciiRecipes";
import KeepItCool from "./Content/SingleProject/KeepItCool/KeepItCool";
import Project from "./Content/Project/Project";

const sections = [
    <Profile />,
    <Project />,
  <About />,
  <MeliciiRecipes />,
  <KeepItCool />,
  <WorkoutPlanner />,
];

const PageWrapper = () => {
  return (
    <ReactFullpage
      licenseKey={"YOUR_LICENSE_KEY"}
      scrollOverflow={true}
      render={({ fullpageApi }) => {
        return (
          <div id="fullpage">
            {sections.map((section) => (
              <div className="section">{section}</div>
            ))}
          </div>
        );
      }}
    />
  );
};

export default PageWrapper;
