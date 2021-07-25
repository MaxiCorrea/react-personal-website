import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    "@media screen and (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  dinamic: {
    fontFamily: "Rubik",
    whiteSpace: "nowrap",
    borderRight: "3px solid black",
    fontSize: "22px",
    color: "red",
  },
  static: {
    color: "#015190",
    fontFamily: "Rubik",
    fontSize: "22px",
    marginLeft: "0px",
    marginRight: "10px",
    "@media screen and (max-width: 768px)": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));
