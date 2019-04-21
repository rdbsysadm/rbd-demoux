import PropTypes from "prop-types";
import React from "react";
import { MDBRow ,MDBCol} from 'mdbreact';

function Results({ children }) {
  return  <MDBRow>    
              <MDBCol  md="4" sm="4">  
                {children} 
              </MDBCol>    
              <MDBCol   md="4" sm="4">  
                {children} 
              </MDBCol>   
              <MDBCol  md="4" sm="4">  
                {children} 
              </MDBCol>   
          </MDBRow>;
}

Results.propTypes = {
  children: PropTypes.node.isRequired
};

export default Results;
