import React from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const WhiteBackArrowButton = () => {
  return <ArrowBackIosNewIcon style={arrowStyle} />;
};

export default WhiteBackArrowButton;

const arrowStyle = {
  color: "#fff",
  marginLeft: "25px",
  cursor: "pointer",
};
