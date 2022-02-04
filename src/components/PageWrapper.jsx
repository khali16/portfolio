import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Profile from "./Content/Profile/Profile";
import Layout from "./Header/Layout";
import Projects from "./Content/Projects/Projects";
import About from "./Content/AboutMe/About";
import WorkoutPlanner from "./Content/SingleProject/WorkoutPlanner/WorkoutPlanner";

const sections = [
  <>
    <Layout />
    <Profile />
  </>,
  <Projects />,
  <About />,
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
