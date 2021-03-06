import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    textDecoration: "none",
    listStyle: "none",
    transition: "0.2s ease-in-out",
    cursor: "pointer",
    color: "#015190",
    fontFamily : "Rubik",
    marginLeft: "-35px",
    marginTop: "1.5rem",
    "&.hover": {
      color: "#01bf71",
      transition: "0.2s ease-in-out",
    },
  },
}));
