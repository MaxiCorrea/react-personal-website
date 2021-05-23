import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display :"flex" ,
    flexDirection: "row",
    flexWrap : "wrap",
    backgroundColor: "#fff",
    borderRadius: "30px",
    boxShadow: "0 2.5rem 3.125rem rgba(134, 151, 168, 0.1)",
    height: "100%",
    margin : "auto",
    maxWidth: "1052px",
    position: "relative",
    width: "90%",  
  },
}));
