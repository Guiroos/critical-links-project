import React from "react";
import { apiDelete } from "../utils/axios";

export default function DeleteButton({
  handleShow,
  route,
  buttonClicked,
}) {
  return (
    <div>
      <div>Are you sure you want to delete?</div>
      <div>
        <button onClick={() => handleShow()}>NO</button>
        <button
          onClick={() => {
            apiDelete(route);
            buttonClicked();
            handleShow();
          }}
        >
          YES
        </button>
      </div>
    </div>
  );
}
