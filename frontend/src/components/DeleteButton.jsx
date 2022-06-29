import React from "react";
import { apiDelete } from "../utils/axios";

export default function DeleteButton({ handleShow, route, buttonClicked }) {
  return (
    <div className="flex flex-col mt-4">
      <p>Are you sure you want to delete?</p>
      <div className="flex gap-4 justify-end text-[#3F51B5]">
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
