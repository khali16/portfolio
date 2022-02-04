import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, makeStyles, MobileStepper } from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import addingWorkout from "../../../../../../Assests/Gifs/AddingWorkout.gif";
import calendarGif from "../../../../../../Assests/Gifs/Calendar.gif";
import plannerLogging from "../../../../../../Assests/Gifs/WorkoutPlannerLoggin.gif";
import { theme } from "../../Profile/theme";
import styles from './ProjectView.module.css'
import { useStyles } from "./style";

interface Props {
  steps:{
    path: any;
}[],
maxSteps: number,

}

const ProjectView:React.FC<Props> = ({steps, maxSteps}) => {
    const c = useStyles()
      const [activeStep, setActiveStep] = useState(0);
    
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
<Box className={styles.projectGifContainer}>
          <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          >
            {steps.map((step, index) => (
              <div key={index} className={styles.stepsContainer}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <>
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
            classes={{
              root: c.root,
              dot: c.dot,
              dotActive: c.dotActive
            }}
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
    );
}

export default ProjectView