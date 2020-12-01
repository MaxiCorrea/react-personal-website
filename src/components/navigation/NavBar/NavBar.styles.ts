import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    background: "#000",
    height: "80px",
    marginTop: "-80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    position: "sticky",
    top: 0,
    zIndex: 10,
    "@media screen and (max-width: 960px)": {
      transition: "0.8s all ease"
    },
  },
}));
