import React from "react";

interface LoaderProps {
  percent: number;
}

const Loader: React.FC<LoaderProps> = ({ percent }) => {
  return (
    <div className="loader-container">
      <div className="loader">
        <span className="loader-text">{percent}%</span>
      </div>
    </div>
  );
};

export default Loader;
