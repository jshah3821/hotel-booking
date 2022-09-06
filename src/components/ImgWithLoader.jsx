import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";

const ImgWithLoader = (props) => {
  const { height, width, src } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const imgLoaded = () => {
    setIsLoading(false);
  };
  const imgError = () => {
    setIsLoading(false);
    setError(true);
  };
  return (
    <div className="loader_container">
      {isLoading && (
        <div
          className="loader"
          style={{ height: `${height}px`, width: `${width}px` }}
        >
          <CircularProgress color="secondary" />
        </div>
      )}
      {error && <p>something went wrong</p>}
      <img
        src={src ? src : `https://picsum.photos/${width}/${height}`}
        onLoad={imgLoaded}
        onError={imgError}
      />
    </div>
  );
};

export default ImgWithLoader;
