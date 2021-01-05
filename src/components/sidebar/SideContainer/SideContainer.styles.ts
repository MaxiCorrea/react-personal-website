import { makeStyles } from "@material-ui/core/styles";

export interface IStyleProps {
  isOpen: boolean;
}

export const useStyles = makeStyles({
  root: {
    position: "fixed",
    zIndex: 999,
    width: "100%",
    height: "100%",
    color : "#fff",
    background: "#fafafa",
    display: "flex",
    flexDirection : "column",
    alignItems: "center",
    transition: "0.3s ease-in-out",
    opacity: (props: IStyleProps) => (props.isOpen ? "100%" : "0%"),
    top: (props: IStyleProps) => (props.isOpen ? "0" : "-100%"),
  },
});
