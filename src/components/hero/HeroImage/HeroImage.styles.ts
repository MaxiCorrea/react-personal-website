import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image : {
    width: "100%",
    maxWidth: "500px",
    maxHeight: "500px",
    height: "auto",
  }
}));
