import PropTypes from "prop-types";
import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

function ResultsPerPage({ onChange, options, value }) {
  return (
      <MDBDropdown size="sm">
        <MDBDropdownToggle caret color="primary">
          ResultsPerPage
        </MDBDropdownToggle>

          
        <MDBDropdownMenu basic   value={value}
          onChange={onChange}>

        {options.map(option => (
          <MDBDropdownItem key={option} value={option}>  {option}</MDBDropdownItem>
        ))}
        </MDBDropdownMenu>

 
      </MDBDropdown>


   

  );
}

ResultsPerPage.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  value: PropTypes.number
};

export default ResultsPerPage;
