import React from "react";
import melicii from "../../../../Assests/Gifs/MeliciiOverview.gif";
import styles from "./ProjectOverview.module.css";

const ProjectOverview = () => {
  return (
    <>
      <img src={melicii} className={styles.gif} />
    </>
  );
};

export default ProjectOverview;
