import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    padding: "0 1rem",
    height: "100%",
    color: "#015190",
    fontFamily : "Rubik",
    cursor: "pointer",
    "&.active": {
      borderBotton: "3px solid #01bf71",
    },
  },
}));
