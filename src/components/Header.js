import React , { Component}from "react";
import { SearchBox } from "../containers";
import companyLogo from './images/HaloLogo.png';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';



const firebaseApp = firebase.initializeApp(firebaseConfig);

class Header extends Component{

  render() {

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

   return(          
      <div>
        <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
          <img src={companyLogo} alt="Hang Loose" />
            <span className="navbar-brand" href="">Rent Buy Donate</span>
            {
                user
                  ? <p>Hello, {user.displayName}</p>
                  : <p>Please sign in.</p>
              }

              {
                user
                  ? <button  className="btn btn-primary" onClick={signOut}>Sign out</button>
                  : <button className="btn btn-primary" onClick={signInWithGoogle}>Sign in with Google</button>
              }
       
          </div>
        </nav>

        <header className="masthead text-white text-center">
        <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">Rent Buy for your everyday needs and donate your excess </h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                
                  <div className="form-row">
                    <div className="col-12 col-md-15 mb-2 mb-md-0">
                      <SearchBox />
                    </div>
                    
                  </div>
                
              </div>
            </div>
          </div>
        </header>
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