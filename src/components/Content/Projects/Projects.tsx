import { Typography, Box, MobileStepper, Button } from "@mui/material";
import styles from "./Projects.module.css";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { projectData } from "./ProjectData";

const Projects = () => {
  const theme = useTheme();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.titleContainer}>
          <Typography className={styles.title} variant="h2">
            Moje projekty
          </Typography>
        </Box>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          interval={10000}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          className={styles.carouselContainer}
        >
          {projectData.map((step, index) => (
            <div key={index} className={styles.stepsContainer}>
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  <Typography variant="h5" className={styles.projectTitle}>
                    {step.title}
                  </Typography>
                  <Button
                    onClick={() => (window.location.href = step.github)}
                    className={styles.button}
                  >
                    GitHub
                  </Button>
                  <Box
                    component="img"
                    className={styles.projectGif}
                    src={step.path}
                  />
                </>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              className={styles.button}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              className={styles.button}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </>
  );
};

export default Projects;
