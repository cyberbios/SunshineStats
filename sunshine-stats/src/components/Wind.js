import React from "react";

function Wind({ speed }) {
  return (
    <div className="wind">
      {speed && <p>{Math.round(speed)} Km/h</p>}
      <p>Winds</p>
    </div>
  );
}

export default Wind;
