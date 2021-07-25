import { makeStyles } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const root: CSSProperties = {
  width: 170,
  height: 40,
  fontFamily: "Rubik",
  borderRadius: "8px",
  fontSize: 15,
  fontStyle: "normal",
  fontWeight: 500,
  letterSpacing: "0em",
  textTransform: "none",
};

export const useStyles = makeStyles(() => ({
  primary: {
    ...root,
    background: "#02599E",
    color: "#ffffff",
    border: "1px solid #02599E",
    "&:hover": {
      backgroundColor: "#00325d",
    },
  },
  primarygreen : {
    ...root,
    border: "none !important",
    background: "#02A48D",
    boxShadow: "0px 7px 26px rgba(2, 89, 158, 0.15) !important",
    color: "#ffffff",
    "&:hover": {
      background:"#00baa4",
    },
  },
  primaryDisabled: {
    ...root,
    border: "none !important",
    background: "#709FC5 !important",
    color: "#DBE7F1 !important",
    boxShadow: "0px 7px 26px rgba(2, 89, 158, 0.15) !important",
  },
  secondary: {
    ...root,
    background: "#ffffff",
    border: "1px solid #02599E",
    color: "#02599E",
    "&:hover": {
      backgroundColor: "#cacaca",
      color: "#02599E",
    },
  },
  secundaryDisabled: {
    ...root,
    border: "1px solid #709FC5 !important",
    color: "##709FC5 !important",
  },
}));
