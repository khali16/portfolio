import { Box, Button, MobileStepper, Typography } from '@mui/material'
import TitleAnimation from '../SingleProject/Title/TitleAnimation'
import styles from './Project.module.css'
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useStyles } from '../SingleProject/ProjectView/style';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { projectData } from './ProjectsData';

const Project = () => {

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
  
    const c = useStyles()
    return (<>
    <Box className={styles.projectContainer}>
        <TitleAnimation titleTop='Moje' titleBottom='projekty' />
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          interval={10000}
          onChangeIndex={handleStepChange}
          enableMouseEvents
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
                    className={styles.githubButton}
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
          classes={{
              root: c.root,
            dot: c.dot,
            dotActive: c.dotActive,
          }}
          className={styles.stepper}
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
    </>)
}

export default Project