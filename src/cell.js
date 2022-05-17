import React from "react";

export default function Cell({ onClick, value }) {
  return (
    <button className="square" onClick={() => onClick()}>
      {value}
    </button>
  );
}
