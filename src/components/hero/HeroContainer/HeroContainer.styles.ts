import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display :"flex" ,
    height: "100%",
    margin : "auto",
    maxWidth: "1052px",
    width: "90%",  
    borderRadius: "30px",
    "@media screen and (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));
