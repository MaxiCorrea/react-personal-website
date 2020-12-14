import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: "none",
    "@media screen and (max-width: 768px)": {
      display: "block",
      position: "absolute",
      top: 7,
      right: 0,
      transform: "translate(-100% , 60%)",
      fontSize: "1.8rem",
      cursor: "pointer",
      color: "#000",
    },
  },
}));
