import { Box } from "@mui/material";
import reduxIcon from "../../../../Assests/TechIcons/redux.png";
import reactIcon from "../../../../Assests/TechIcons/react.png";
import materialIcon from "../../../../Assests/TechIcons/materialui.png";
import typescriptIcon from "../../../../Assests/TechIcons/typescript.png";
import firebaseIcon from "../../../../Assests/TechIcons/firebase.png";
import styles from "./TechStack.module.css";

const TechStack = () => {
  return (
    <Box className={styles.techContainer}>
      <img src={reactIcon} alt="react icon" />
      <img src={reduxIcon} alt="redux icon" />
      <img src={typescriptIcon} alt="ts icon" />
      <img src={materialIcon} alt="materialui icon" />
      <img src={firebaseIcon} alt="firebase icon" />
    </Box>
  );
};

export default TechStack;
