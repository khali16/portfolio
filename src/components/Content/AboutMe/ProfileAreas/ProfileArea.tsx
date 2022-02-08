import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import styles from "../About.module.css";

const ProfileArea = () => {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia height="70" component="svg" className={styles.iconContent}>
          <PersonIcon className={styles.icon} />
        </CardMedia>
        <CardContent style={{ height: "300px" }}>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            align="center"
          >
            Od marca zeszłego roku aktywnie tworzyłam projekty w ReactJS, w
            których posługiwałam się JavaScriptem, TypeScriptem, Expressem do
            mockowania serwerów, HTML i CSS, by przygotować się do aplikowania
            do firm jako Junior React Developer.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProfileArea;
