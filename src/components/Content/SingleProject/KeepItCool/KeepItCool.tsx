import SingleProject from "../SingleProject";
import statistics from "../../../../Assests/Gifs/Statistics.gif";
import fullMeasurement from "../../../../Assests/Gifs/FullMeasurement.gif";
import measurement from "../../../../Assests/Gifs/Measurement.gif";

const KeepItCool = () => {
  const steps = [
    { path: measurement },
    { path: fullMeasurement },
    { path: statistics },
  ];
  const projectInfo =
    "Keep It Cool to aplikacja służąca do mierzenia ilości wypitych płynów i przygotowania statystyk tygodniowych";
  const techStack = [
    "React",
    "Typescript",
    "Redux Toolkit",
    "Mock server - Express",
    "Material UI",
  ];
  return (
    <SingleProject
      titleTop="Keep It"
      titleBottom="Cool"
      maxSteps={3}
      steps={steps}
      projectInfo={projectInfo}
      techStack={techStack}
    />
  );
};

export default KeepItCool;
