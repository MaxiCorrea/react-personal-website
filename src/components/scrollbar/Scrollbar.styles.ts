import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 0.1px rgba(0,0,0,0.00)",
      width: "8px",
      height: "8px",
      backgroundColor: "transparent",
    },
    "*::-webkit-scrollbar-thumb": {
      [theme.breakpoints.up("sm")]: {
        backgroundColor: "#c7cdc7",
        "&:hover": {
          backgroundColor: "#919191",
        },
      },
      [theme.breakpoints.down("xs")]: {
        backgroundColor: "transparent",
      },
    },
  },
}));
