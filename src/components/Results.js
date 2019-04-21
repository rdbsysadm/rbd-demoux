import PropTypes from "prop-types";
import React from "react";

function Results({ children }) {
  return  <div className="app-card-list" id="app-card-list"> {children} </div>;
}

Results.propTypes = {
  children: PropTypes.node.isRequired
};

export default Results;
