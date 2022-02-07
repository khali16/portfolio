import { Box, Typography } from "@mui/material";
import portrait from "../../../Assests/portrait.png";
import styles from "./Profile.module.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import TechStack from "../Projects/TechStack/TechStack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Profile = ({ moveDown }) => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Junior React", "Developer"],
    });
  }, []);

  return (
    <>
      <Box className={styles.profileContainer}>
        <img src={portrait} alt="" className={styles.portrait} />
        <Box className={styles.infoBox}>
          <ThemeProvider theme={theme}>
            <Box className={styles.font}>
              <Typography variant="h3">Cześć, nazywam się</Typography>
            </Box>
            <Box className={styles.name}>
              <Typography variant="h2">Kamila Linert</Typography>
            </Box>
            <Box className={styles.title}>
              <Typography variant="h4">
                Aspirant <span ref={textRef}></span>
              </Typography>
            </Box>
          </ThemeProvider>
          <TechStack />
          <ArrowDownwardIcon className={styles.icon} onClick={moveDown} />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
