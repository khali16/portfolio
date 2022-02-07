import { Box, Typography } from "@mui/material";
import styles from "./About.module.css";
import { theme } from "../Profile/theme";
import { ThemeProvider } from "@emotion/react";
import ProfileArea from "./ProfileAreas/ProfileArea";
import TechArea from "./ProfileAreas/TechArea";
import SchoolArea from "./ProfileAreas/SchoolArea";
import HobbyArea from "./ProfileAreas/HobbyArea";
import CV from "../../../files/CV.pdf";
import AboutMe from "../../../files/AboutMe.pdf";
import "./style.css";

const About = () => {
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.header}>
          <ThemeProvider theme={theme}>
            <Box className={styles.titleContainer}>
              <div className={styles.title}>
                <div className={styles.titleText}>
                  <div>
                    <span>O mnie</span>
                  </div>
                </div>
              </div>
            </Box>
          </ThemeProvider>
        </Box>
        <Box className={styles.body}>
          <ProfileArea />
          <TechArea />
          <SchoolArea />
          <HobbyArea />
        </Box>
        <Box className={styles.downloadContainer}>
          <a href={CV} className="hvr-grow">
            Download CV
          </a>
          <a href={AboutMe} className="hvr-grow">
            About me
          </a>
        </Box>
      </Box>
    </>
  );
};

export default About;
