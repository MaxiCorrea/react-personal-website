import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  "@keyframes type": {
    "0%": {
      width: "0ch",
    },
    "100%": {
      width: "4ch",
    },
  },
  root: {
    fontFamily: "Rubik",
    fontSize: "3.5rem",
    animation: "$type 1s steps(4)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "4px solid black",
  },
}));
