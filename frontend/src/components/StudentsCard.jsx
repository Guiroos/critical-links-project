import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import DeleteButton from "./DeleteButton";
import OnClickButton from "./OnClickButton";
import StudentForm from "./StudentForm";

export default function StudentsCard({
  students,
  classesOptions,
  buttonClicked,
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleIsDeleting = () => {
    setIsDeleting(!isDeleting);
    setIsEditing(false);
  };

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
    setIsDeleting(false);
  };

  return (
    <div className="grid desktop:grid-cols-3 iPadPro11:grid-cols-2 mx-8 gap-8">
      {students.map((student) => (
        <div
          key={student._id}
          className="flex flex-col rounded-[30px] shadow-xl border border-gray-100 p-5"
        >
          <div className="flex justify-between ">
            <div className="hidden desktop:inline-flex h-24 overflow-hidden">
              <img
                className="bg-white h-full w-full object-cover rounded-full"
                src={`https://avatars.dicebear.com/api/big-smile/${student._id}.svg`}
                alt="Avatar"
              />
            </div>
            <div className="flex flex-col justify-center text-lg">
              <p className=" font-bold">{`${student.firstName} ${student.lastName}`}</p>
              <p className="">{student.email}</p>
              <p className="text-[#9A9A9A]">{`ID: ${student.studentID}`}</p>
            </div>
            <div className="flex gap-5 h-full">
              <OnClickButton
                content={<FaPen size={32} />}
                icon="pencil"
                func={handleIsEditing}
              />
              <OnClickButton
                content={<FaTrash size={32} />}
                icon="trash"
                func={handleIsDeleting}
              />
            </div>
          </div>
          <div>
            {isEditing && (
              <StudentForm
                classesOptions={classesOptions}
                handleStudentFormClick={handleIsEditing}
                buttonClicked={buttonClicked}
                route={`/students/${student._id}`}
                axiosApi="put"
              />
            )}
            {isDeleting && (
              <DeleteButton
                handleShow={handleIsDeleting}
                buttonClicked={buttonClicked}
                route={`/students/${student._id}`}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
