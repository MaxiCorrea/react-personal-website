import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    color: "#015190",
    fontFamily: "Rubik",
    fontWeight: 700,
    fontSize: "20px",
    textAlign : "left",
    display : "none",
    "@media screen and (min-width: 380px)": {
      fontSize: "20px",
      display : "none"
    },
    "@media screen and (min-width: 480px)": {
      fontSize: "25px",
      display : "none"
    },
    "@media screen and (min-width: 640px)": {
      textAlign: "center",
      display : "block"
    },
    "@media screen and (min-width: 767px)": {
      fontSize: "30px",
      display : "block",
      textAlign : "left",
    },
    "@media screen and (min-width: 991px)": {
      fontSize: "45px",
      display : "block",
      textAlign : "left",
    },
  },
}));
