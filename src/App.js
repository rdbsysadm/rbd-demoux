import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import { Body, Header } from "./components";
import {
  SearchProvider,
  SearchDriver,
  AppSearchAPIConnector
} from "./search-lib";

import {
  buildFacetConfigFromConfig,
  buildSearchOptionsFromConfig,
  getConfig,
  getFacetFields,
  getSortFields
} from "./config/config-helper";

function createDriver() {
  const { hostIdentifier, searchKey, endpointBase, engineName } = getConfig();
  return new SearchDriver({
    apiConnector: new AppSearchAPIConnector({
      hostIdentifier,
      searchKey,
      endpointBase,
      engineName
    }),
    facetConfig: buildFacetConfigFromConfig(),
    searchOptions: buildSearchOptionsFromConfig()
  });
}

class App extends Component {
  
  
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
    const config = getConfig();

    if (!config.engineName) {
      return (
        <div>
          No config found. Be sure to provide configuration by either including
          a src/config/engine.json file, or including window.appConfig.
        </div>
      );
    }

    return (
      <SearchProvider driver={createDriver()}>
        {({ searchTerm, results }) => (
          <div
            className={`reference-ui${
              searchTerm || results.length > 0 ? " active-search" : ""
            }`}
          >
            <Header />
            <Body hasSidebar={getFacetFields().length > 0 || getSortFields().length > 0 ? true : false} />
          </div>
        )}
      </SearchProvider>
    );
  }
}

export default App;
