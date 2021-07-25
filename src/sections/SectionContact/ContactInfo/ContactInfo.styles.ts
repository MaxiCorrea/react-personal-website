import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    marginTop : "15px",
    marginBottom : "20px",
    display : "flex",
    width : "50%",
    flexDirection : "column",
    justifyContent: "space-evenly",
    "@media screen and (max-width: 768px)": {
      width : "100%",
    },
  },
  iconAndTextContainer: {
    marginLeft : "15px",
    display : "flex",
    flexDirection : "row",
    marginBottom : "5px",
  },
  text : {
    marginLeft : "5px",
    fontFamily : "Rubik",
    fontSize : "15px",
    fontWeight : 300,
  }
}));
