import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container : {
    display : "flex",
  },
  "@keyframes type": {
    "0%": {
      width: "0ch",
    },
    "100%": {
      width: "4ch",
    },
  },
  dinamic: {
    fontFamily: "Rubik",
    animation: "$type 1s steps(4)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "4px solid black",
    fontSize: "22px",
    color: "red",
  },
  static : {
    color: "#015190",
    fontFamily: "Rubik",
    fontSize: "22px",
    marginLeft : "0px",
    marginRight: "10px",
  }
}));
