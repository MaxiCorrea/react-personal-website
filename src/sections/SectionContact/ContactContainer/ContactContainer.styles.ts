import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",  
    display :"flex" ,
    flexDirection: "row",
    flexWrap : "wrap",
    "@media screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
}));
