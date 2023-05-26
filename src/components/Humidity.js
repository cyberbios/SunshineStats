import React from "react";

function Humidity({ humidity }) {
  return (
    <div className="humidity">
      {humidity && <p>{humidity}%</p>}
      <p>Humidity</p>
    </div>
  );
}

export default Humidity;
