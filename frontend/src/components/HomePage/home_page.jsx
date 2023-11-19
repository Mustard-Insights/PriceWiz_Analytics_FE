import React from "react";
import { LogoContainer } from "./logo";
import { MapView } from "./maps";
import { SearchContainer } from "./search_container";
import { ResultSummaryContainer } from "./result_summary";
import { useState } from "react";
import Lottie from "lottie-react";
import animation_data from "../../../src/app_load.json";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [networkError, setNetworkError] = useState(true);
  return (
    <div className="main-section">
      {loading && (
        <div className="main-overlay">
          <Lottie
            animationData={animation_data}
            style={{ width: 320 }}
            loop={true}
          />
        </div>
      )}
      {networkError && (
        <div className="main-overlay">
          <div className="network-error-box">
            
          </div>
        </div>
      )}

      <LogoContainer />
      <MapView setLoading={setLoading} />
      <SearchContainer />
      <ResultSummaryContainer />
    </div>
  );
};

export default HomePage;
