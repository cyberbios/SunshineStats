import React from "react";

function Temperature({ temperature }) {
  return (
    <div className="temp">
      {temperature ? <h1>{Math.round(temperature)}°C</h1> : null}
    </div>
  );
}

export default Temperature;
