import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const Application: React.FC = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};
