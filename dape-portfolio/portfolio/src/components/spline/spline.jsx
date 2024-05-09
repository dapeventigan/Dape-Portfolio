import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import BounceLoader from "react-spinners/BounceLoader";

import "./spline.css";

const Spline3D = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="spline__container">
      <Spline
        scene="https://prod.spline.design/UDhsKMqZvhvvNiHy/scene.splinecode"
        onLoad={handleSplineLoad}
      />
      <div className="spline__content">
        {isLoading ? <BounceLoader color="#FAA500" size={100} /> : <></>}
      </div>
    </div>
  );
};

export default Spline3D;
