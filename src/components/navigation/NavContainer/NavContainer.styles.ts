import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80px",
    zIndex: 1,
    width: "100%",
    padding: "0 24px",
    maxWidth: "1100px",
  },
}));
