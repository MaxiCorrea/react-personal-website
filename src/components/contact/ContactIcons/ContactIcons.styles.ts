import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  circleContainer: {
    width: "45px",
    height: "45px",
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
    borderRadius : "50%",
    backgroundColor: "rgba(166, 228, 248, 0.7)",
  },
}));
