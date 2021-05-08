import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display : "block",
    width : "90%",
  },
  title:{
    color: "#015190",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "-0.04em",
    fontFamily: "Rubik",
    justifySelf: "flex-start",
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center",
    marginLeft: "24px",
    textDecoration: "none",
    width : "100%",
  },
}));
