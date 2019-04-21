import React , { Component}from "react";
import { SearchBox } from "../containers";
import companyLogo from './images/HaloLogo.png';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import { MDBNavbar, MDBRow, MDBCol, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';



const firebaseApp = firebase.initializeApp(firebaseConfig);

class Header extends Component{

  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {


    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

   return(          
      <div>
         <Router>
          <MDBNavbar color="blue-gradient" dark expand="md" fixed="top">
          <img src={companyLogo} alt="Hang Loose" />
          {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
       
                  <MDBNavItem>
                    <MDBNavLink to="#">    <span className="navbar-brand" href="">Rent Buy Donate</span> </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">   <span className="navbar-brand" href="">About</span></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <div className="container">                    {
                      user
                        ? <p className="text-muted white-text"  >Hello {user.displayName}    <button  className="btn btn-primary" onClick={signOut}>Sign out</button> </p>
                        : <button className="btn btn-info" onClick={signInWithGoogle}>Sign in with Google</button>
                    }       
                  </div>
                  </MDBNavItem>
                 
                 
                
                  
                </MDBNavbarNav>
                <SearchBox />
              </MDBCollapse>
          
   
       
        </MDBNavbar>

        </Router>
       
        <MDBContainer>
        <MDBRow>
          <MDBCol size="12" sm="12" md="12" lg="12">           
                <h1 className="mb-5">Rent Buy for your everyday needs and donate your excess </h1>
          </MDBCol> 
        </MDBRow>
        <MDBRow>
          <MDBCol size="12" sm="12" md="12" lg="12">     
          <SearchBox />
          </MDBCol>
        </MDBRow>
        </MDBContainer>

     </div>   
       
        );
  }

}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
}) (Header) ;