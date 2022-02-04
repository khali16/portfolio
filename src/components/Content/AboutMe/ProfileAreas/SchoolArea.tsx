import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import styles from "../About.module.css";

const SchoolArea = () => {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia height="70" component="svg" className={styles.iconContent}>
          <SchoolIcon className={styles.icon} />
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            align="center"
            className={styles.infoText}
          >
            Technikum Informatyczne SCI w Szczecinie
            <Divider className={styles.divider} />
            Uniwersytet Szczeciński - filologia polska, uzyskany tytuł
            licencjata
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SchoolArea;
