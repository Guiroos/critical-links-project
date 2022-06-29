import React, { useState } from "react";
import ClassForm from "./ClassForm";
import DeleteButton from "./DeleteButton";
import OnClickButton from "./OnClickButton";
import { FaPen, FaTrash } from "react-icons/fa";

export default function ManageClasses({ classes, buttonClicked }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
    setIsDeleting(false);
  };

  const handleIsDeleting = () => {
    setIsDeleting(!isDeleting);
    setIsEditing(false);
  };

  return (
    <div id="manage-classes" className="text-xl">
      <p className="mb-2">Manage Classes</p>
      <div id="manage-classes-class-list" className="">
        {classes.map((classObj) => (
          <div
            key={classObj._id}
            className="flex flex-col justify-center odd:bg-white even:bg-slate-50 border-[1px] shadow-lg"
          >
            <div className="flex justify-between items-center p-2">
              <p>{classObj.className}</p>
              <div className="flex gap-2">
                <OnClickButton
                  content={<FaPen size={16} />}
                  icon="pencil"
                  func={handleIsEditing}
                />
                <OnClickButton
                  content={<FaTrash size={16} />}
                  icon="trash"
                  func={handleIsDeleting}
                />
              </div>
            </div>
            <div>
              {isEditing && (
                <div className="px-4 pb-4">
                  <ClassForm
                    handleClassFormClick={handleIsEditing}
                    buttonClicked={buttonClicked}
                    route={`/classes/${classObj._id}`}
                    axiosApi="put"
                  />
                </div>
              )}
              {isDeleting && (
                <div className="px-4 pb-4">
                  <DeleteButton
                    route={`/classes/${classObj._id}`}
                    handleShow={handleIsDeleting}
                    buttonClicked={buttonClicked}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
