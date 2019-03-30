import React from "react";

import { SearchBox } from "../containers";

export default function Header() {
  return (

  <div>
  <nav className="navbar navbar-light bg-light static-top">
    <div className="container">
      <span className="navbar-brand" href="">Rent Buy Donate</span>
      <a className="btn btn-primary" href="">Sign In</a>
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
