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
    color: "#fff",
    cursor: "pointer",
    "&.hover": {
      color: "#01bf71",
      transition: "0.2s ease-in-out",
    },
  },
}));
