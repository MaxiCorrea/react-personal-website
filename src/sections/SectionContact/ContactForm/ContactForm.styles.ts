import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    width : "50%",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    "@media screen and (max-width: 768px)": {
      width : "100%",
    },
  },
  title : {
    width : "100%",
    color: "#015190",
    textAlign : "center",
    fontFamily : "Rubik",
    fontWeight : 500,
    fontSize : "17px",
  }
}));
