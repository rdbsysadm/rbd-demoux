import PropTypes from "prop-types";
import React from "react";
import { MDBRow ,MDBCol} from 'mdbreact';

function Results({ children }) {
  return  <MDBRow>    
              <MDBCol  md="6"  xl="4"  sm="3">  
                {children} 
              </MDBCol>    
              <MDBCol   md="6"  xl="4" sm="3">  
                {children} 
              </MDBCol>   
              <MDBCol  md="0" xl="4" sm="3">  
                {children} 
              </MDBCol>   
          </MDBRow>;
}

Results.propTypes = {
  children: PropTypes.node.isRequired
};

export default Results;
