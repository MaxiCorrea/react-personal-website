import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "6px",
    fontFamily: "Rubik",
    "& fieldset": {
      borderColor: "#E7E8EA",
    },
    "& input:not([value='']) ~ fieldset": {
      borderColor: "#02599E !important",
    },
    "&:hover fieldset": {
      borderColor: "#02599E !important",
    },
    "& [class*=Mui-focused] fieldset": {
      borderColor: "#02599E !important",
    },
    "&:focus": {
      outline: "none",
    },
    "& [class*=MuiFormLabel-root], & [class*=MuiInputBase-input]": {
      fontWeight: "400 ",
      fontSize: "14px",
      fontFamily: "Rubik",
      lineHeight: "16px",
      letterSpacing: "-0.01em",
    },
    "& [class*=MuiInputBase-input]": {
      color: "#011328",
    },
    "& label[class*=Mui-focused]": {
      color: "#02599E",
    },

    "& [class*=Mui-focused] [class*=MuiIconButton-label]": {
      color: "#02599E",
    },
    "& label[class*=MuiInputLabel-shrink]": {
      fontSize: "16px",
      color: "#02599E",
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    },
    "& [class*=MuiIconButton-root]": {
      "&:focus": {
        outline: "none",
      },
    },
    "& [class*=MuiOutlinedInput-notchedOutline]": {
      "&:focus": {
        outline: "none",
      },
    },
    "& [class*=MuiInputBase-root]": {
      background: "#fff",
    },
    "& label[class*=Mui-error]": {
      color: "#f44336",
      "& ~ [class*=MuiInputBase-root]": {
        "& > fieldset": {
          borderColor: "#f44336 !important",
        },
      },
    },

    "& input:read-only ~ fieldset": {
      borderColor: "white !important",
    },

    "& label.Mui-disabled": {
      color: "rgba(0,0,0,0.4) !important",
      "&~[class*=MuiInputBase-root]": {
        "& > input": {
          color: "rgba(0, 0, 0, 0.5)",
        },
        "& > [class*=MuiSelect-root]": {
          color: "rgba(0, 0, 0, 0.5)",
        },
        "& > fieldset": {
          borderColor: "rgba(0,0,0,0.1) !important",
        },
      },
    },
  },
}));
