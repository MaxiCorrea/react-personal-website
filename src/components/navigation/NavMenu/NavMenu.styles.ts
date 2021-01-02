import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    textAlign: "center",
    "@media screen and (max-width: 768px)": {
      display: "none",
    },
  },
}));
