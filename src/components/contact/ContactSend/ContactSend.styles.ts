import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#304CFD",
    borderRadius: "20px",
    border: 0,
    boxShadow: "0 0.5rem 1rem rgba(48, 76, 253, 0.15), 0 0.125rem 0.25rem rgba(48, 76, 253, 0.15)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "inherit",
    overflow: "hidden",
    padding: "0.9375rem 1.5rem",
    position: "relative",
    transition: ".4s ease-in-out",
    whiteSpace: "nowrap",
    zIndex: 1,
    textTransform : "none",
    fontFamily : "Rubik",
  },
}));
