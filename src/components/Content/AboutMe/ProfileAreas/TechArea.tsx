import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import styles from "../About.module.css";

const TechArea = () => {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia height="70" component="svg" className={styles.iconContent}>
          <PsychologyIcon className={styles.icon} />
        </CardMedia>
        <CardContent style={{ height: "400px" }}>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            align="center"
            className={styles.infoText}
          >
            Javascript, TypeScript, ReactJS, Redux, RTK Query, React Query,
            Axios, HTML5, CSS, Firebase, Express, Material-UI, Figma.
            <Divider className={styles.divider} />
            Język angielski - poziom B2.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TechArea;
