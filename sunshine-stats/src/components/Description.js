import React from "react";

function Description({ weather }) {
  return (
    <div className="description">
      {weather ? <h2>{weather[0].main}</h2> : null}
    </div>
  );
}

export default Description;
