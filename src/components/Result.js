import PropTypes from "prop-types";
import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

function Result({ fields, onClickLink, title, url }) {

  const imageUrl =   Object.keys(  fields).map( key => {
    if(key =="Image_url"){
      fields[key]
      console.log( 'log image url ' + fields[key])
    }
    else  {
      "https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
    }
  });

  return (
  <MDBCol style={{ maxWidth: "18rem" }}>
   <MDBCard style={{ width: "18rem" }}>   
  
    <MDBCardBody>
     <MDBCardTitle>
          
        {title &&
          !url && (
            <span              
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
        {title &&
          url && (
            <a              
              dangerouslySetInnerHTML={{ __html: title }}
              href={url}
              onClick={onClickLink}
              target="_blank"
            />
          )}
       </MDBCardTitle>

       <MDBCardText>
          {Object.keys(fields).map(key => {
            if(key=="Image_url"){
              return <img src={fields[key] } alt="Product Image" height="150" />
            }
            else
            {
             return <div key={key}>                
                <span >{key}</span>{" "}
                <span
                  className="result__value"
                  dangerouslySetInnerHTML={{ __html: fields[key] }}
                />
               </div>
            }
          })}
        </MDBCardText>
        <MDBBtn href="#">Details</MDBBtn>
        </MDBCardBody>
      
     </MDBCard>
     <span> &nbsp; </span>
  </MDBCol>
  );
}

Result.propTypes = {
  fields: PropTypes.object.isRequired,
  onClickLink: PropTypes.func.isRequired,
  title: PropTypes.string,
  url: PropTypes.string
};

export default Result;
