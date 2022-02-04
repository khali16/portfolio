import {
  Box,
  Typography,
  ThemeProvider,
  Button,
  MobileStepper,
} from "@mui/material";
import styles from "./WorkoutPlanner.module.css";
import { theme } from "../../Profile/theme";
import SwipeableViews from "react-swipeable-views";
import addingWorkout from "../../../../Assests/Gifs/AddingWorkout.gif";
import calendarGif from "../../../../Assests/Gifs/Calendar.gif";
import plannerLogging from "../../../../Assests/Gifs/WorkoutPlannerLoggin.gif";
import { useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const WorkoutPlanner = () => {
  const steps = [
    { path: addingWorkout },
    { path: calendarGif },
    { path: plannerLogging },
  ];
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
    <Box className={styles.plannerContainer}>
      <ThemeProvider theme={theme}>
        <Box className={styles.title}>
          <Typography variant="h2">Workout Planner</Typography>
        </Box>
        <Box style={{ width: "60vw", height: "60vh" }}>
          <SwipeableViews>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepsContainer}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <>
                    <Typography variant="h5" className={styles.projectTitle}>
                      test
                    </Typography>
                    <Button className={styles.button}>GitHub</Button>
                    <Box
                      component="img"
                      className={styles.projectGif}
                      src={step.path}
                    />
                  </>
                ) : null}
              </div>
            ))}
          </SwipeableViews>
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
      </ThemeProvider>
    </Box>
  );
};

export default WorkoutPlanner;
