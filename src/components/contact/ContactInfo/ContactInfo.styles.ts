import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display : "flex",
    width : "50%",
    flexDirection : "column",
  },
  iconAndTextContainer: {
    display : "flex",
    marginLeft: "24px",
    marginTop: "10px",
  },
}));
