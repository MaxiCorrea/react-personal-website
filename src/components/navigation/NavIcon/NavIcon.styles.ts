import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: "none",
    "@media screen and (max-width: 768px)": {
      display: "block",
      fontSize: "1.8rem",
      cursor: "pointer",
      color: "#000",
    },
  },
}));
