import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
      <AppBar position="static" className={styles.appbar} elevation={0}>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" component="div">
            News
          </Typography>
          <Typography variant="h6" component="div">
            News
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default MainNavigation;
