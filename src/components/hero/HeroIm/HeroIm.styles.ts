import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    color: "#015190",
    fontFamily: "Rubik",
    fontWeight: 700,
    fontSize: "20px",
    textAlign : "left",
    "@media screen and (min-width: 380px)": {
      fontSize: "20px",
    },
    "@media screen and (min-width: 480px)": {
      fontSize: "25px",
    },
    "@media screen and (min-width: 640px)": {
      fontSize: "35px",
    },
    "@media screen and (min-width: 767px)": {
      fontSize: "30px",
    },
    "@media screen and (min-width: 991px)": {
      fontSize: "45px",
    },
  },
}));
