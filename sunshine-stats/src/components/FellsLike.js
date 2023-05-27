import React from "react";

function FeelsLike({ feelsLike }) {
  return (
    <div className="feels">
      {feelsLike && <p>{Math.round(feelsLike)}°C</p>}
      <p>Feels Like</p>
    </div>
  );
}

export default FeelsLike;
