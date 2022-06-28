import React from "react";
import { apiDelete } from "../utils/axios";

export default function DeleteButton({
  handleIsDeleting,
  student,
  buttonClicked,
}) {
  return (
    <div>
      <div>Are you sure you want to delete?</div>
      <div>
        <button onClick={() => handleIsDeleting()}>NO</button>
        <button
          onClick={() => {
            apiDelete(`students/${student._id}`);
            buttonClicked();
          }}
        >
          YES
        </button>
      </div>
    </div>
  );
}
