import React from "react";

export default function Container({ children }) {
  return (
    <div className="container">
      <div className="row">{children}</div>
    </div>
  );
}
