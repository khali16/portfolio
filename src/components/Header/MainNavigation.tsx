import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import styles from "./MainNavigation.module.css";

interface Props {
  moveToAbout: any;
  moveToProjects: any;
}

const MainNavigation: React.FC<Props> = ({ moveToAbout, moveToProjects }) => {
  return (
    <AppBar position="static" className={styles.appbar} elevation={0}>
      <Toolbar className={styles.toolbar}>
        <Box className={styles.link}>
          <Typography variant="h6" component="div" onClick={moveToAbout}>
            O mnie
          </Typography>
        </Box>
        <Box className={styles.link}>
          <Typography variant="h6" component="div" onClick={moveToProjects}>
            Moje projekty
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
