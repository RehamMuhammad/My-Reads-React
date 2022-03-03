import React from "react";

function LoadingBooks() {
  return (
    <div className="text-center py-5 my-5 text-success">
      <strong className="d-inline-block me-5">Loading Books ...</strong>
      <div
        className="spinner-border ms-5 d-inline-block"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
}

export { LoadingBooks };