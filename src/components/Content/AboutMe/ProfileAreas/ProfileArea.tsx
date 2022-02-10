import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
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
        <CardContent style={{ height: "400px" }}>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            align="center"
            className={styles.infoText}
          >
            Od marca zeszłego roku aktywnie tworzę projekty w ReactJS, aby
            zostać programistką front-endową. Zaczęłam naukę od kursu na Udemy,
            a po jego ukończeniu tworzyłam własne aplikacje, które można znaleźć
            na moim{" "}
            {
              <a href="https://github.com/khali16" target="_blank">
                githubie
              </a>
            }
            . Ciekawsze z nich są przedstawione poniżej.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProfileArea;
