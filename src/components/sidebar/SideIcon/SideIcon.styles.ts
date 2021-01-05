import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display : "flex",
    marginTop : "15px",
    marginRight : "50px",
    
    flexDirection : "row-reverse",
    width : "100%",
    background : "transparent",
    fontSize : "2rem",
    cursor : "pointer",
    outline : "none",
    color : "#000",
  },
}));
