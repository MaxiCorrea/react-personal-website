import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display : "grid" ,
    width : "90%",
    gridTemplateColumns : "1fr",
    gridTemplateRows : "repeat(6, 80px)",
    textAlign : "center",
    "@media screen and (max-width: 480px)" : {
      gridTemplateRows : "repeat(6, 60px)",
    }
  },
}));
