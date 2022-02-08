import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "../About.module.css";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const HobbyArea = () => {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia height="70" component="svg" className={styles.iconContent}>
          <SportsEsportsIcon className={styles.icon} />
        </CardMedia>
        <CardContent style={{ height: "400px" }}>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            align="center"
            className={styles.infoText}
          >
            Od ukończenia studiów w wolnym czasie pogłębiam wiedzę w zakresie
            Reacta i czytam książki fantasy. Interesuję się także kulturą
            japońską, przez co zaczęłam uczyć się japońskiego na własną rękę.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HobbyArea;
