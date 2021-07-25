import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  section: {
    width: "95%",
    maxWidth: "1060px",
    display :"flex" ,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: "30px",
    boxShadow: "0 2.5rem 3.125rem rgba(134, 151, 168, 0.1)",
    marginTop : "10px",
    marginBottom : "10px",
  },
}));
