import * as React from "react";
import { Nav } from "components/navigation/Nav/Nav";
import { Side } from "components/sidebar/Side/Side";
import { useStyles } from "./Home.styles";

export const Home: React.FC = () => {
  const [isOpenSide, setIsOpenSide] = React.useState(false);
  const classes = useStyles();

  const toggleOpenSide = () => {
    setIsOpenSide(!isOpenSide);
  };

  return (
    <div className={classes.root}>
      <Side isOpen={isOpenSide} toggle={toggleOpenSide} />
      <Nav toggle={toggleOpenSide} />
    </div>
  );
};
