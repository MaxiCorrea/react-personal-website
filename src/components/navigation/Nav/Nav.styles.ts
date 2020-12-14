import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: "#fff",
    boxShadow: "0px 15px 19px rgba(47, 65, 81, 0.04)",
    "@media screen and (max-width: 960px)": {
      transition: "0.8s all ease"
    },
  },
}));
