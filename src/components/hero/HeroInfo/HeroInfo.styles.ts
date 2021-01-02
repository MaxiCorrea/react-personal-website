import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width : "50%",
    textAlign : "left",
    "@media screen and (max-width: 768px)": {
      textAlign : "center",
    },
  },
}));
