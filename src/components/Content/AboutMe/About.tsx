import { Box, Typography } from "@mui/material";
import styles from "./About.module.css";
import { theme } from "../Profile/theme";
import { ThemeProvider } from "@emotion/react";
import ProfileArea from "./ProfileAreas/ProfileArea";
import TechArea from "./ProfileAreas/TechArea";
import SchoolArea from "./ProfileAreas/SchoolArea";
import HobbyArea from "./ProfileAreas/HobbyArea";

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
      </Box>
    </>
  );
};

export default About;
