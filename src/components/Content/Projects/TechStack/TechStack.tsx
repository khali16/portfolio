import { Box } from "@mui/material";
import reduxIcon from "../../../../Assests/TechIcons/redux.png";
import reactIcon from "../../../../Assests/TechIcons/react.png";
import materialIcon from "../../../../Assests/TechIcons/materialui.png";
import typescriptIcon from "../../../../Assests/TechIcons/typescript.png";
import firebaseIcon from "../../../../Assests/TechIcons/firebase.png";
import styles from "./TechStack.module.css";

const TechStack = () => {
  return (
    <>
      <Box className={styles.techContainer}>
        <div className={styles.tech}>
          <img src={reactIcon} alt="react icon" />
          <span>React</span>
        </div>
        <div className={styles.tech}>
          <img src={reduxIcon} alt="redux icon" />
          <span>Redux</span>
        </div>
        <div className={styles.tech}>
          <img src={typescriptIcon} alt="ts icon" />
          <span>TypeScript</span>
        </div>
        <div className={styles.tech}>
          <img src={materialIcon} alt="materialui icon" />
          <span>MaterialUI</span>
        </div>
        <div className={styles.tech}>
          <img src={firebaseIcon} alt="firebase icon" />
          <span>Firebase</span>
        </div>
      </Box>
    </>
  );
};

export default TechStack;
