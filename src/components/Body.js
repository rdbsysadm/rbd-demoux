import PropTypes from "prop-types";
import React from "react";
import { MDBContainer,MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import {
  ErrorBoundary,
  Facets,
  PagingInfo,
  Paging,
  Results,
  ResultsPerPage,
  Sorting
} from "../containers";
import { buildSortOptionsFromConfig } from "../config/config-helper";

function Body({ hasSidebar = true }) {
  return (
    <div className="reference-ui-body">
      <ErrorBoundary>
        <div className="initial-state-message">
          Start with searching for a product you wan to to rent, buy or donate
        </div>
        <div className="search-results">
          <div className={"sidebar" + (hasSidebar ? '' : ' hidden')}>
            <Sorting sortOptions={buildSortOptionsFromConfig()} />
            <Facets />
          </div>
          <div className="app-card-list">
            <MDBContainer>
            <MDBRow>
            <MDBCol size="18">
              <div className="meta">
                <PagingInfo />
                <ResultsPerPage />
              </div>
              </MDBCol>
            </MDBRow>
              <Results />
            </MDBContainer>

            <div className="results__footer">
              <Paging />
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
}

Body.propTypes = {
  hasSidebar: PropTypes.bool
};

export default Body;
