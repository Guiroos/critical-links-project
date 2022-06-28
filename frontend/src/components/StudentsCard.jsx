import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import StudentForm from "./StudentForm";

export default function StudentsCard({ students, buttonClicked }) {
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
    <div>
      {students.map((student) => (
        <div key={student._id}>
          <div></div>
          <div>
            <h1>{`${student.firstName} ${student.lastName}`}</h1>
            <p>{student.email}</p>
            <p>{`ID: ${student._id}`}</p>
          </div>
          <div>
            <button onClick={() => handleIsEditing()}>Edit</button>
            <button onClick={() => handleIsDeleting()}>Delete</button>
          </div>
          {isEditing && (
            <StudentForm
              handleStudentFormClick={handleIsEditing}
              buttonClicked={buttonClicked}
              student={student}
              axiosApi="put"
            />
          )}
          {isDeleting && (
            <DeleteButton
              handleIsDeleting={handleIsDeleting}
              student={student}
              buttonClicked={buttonClicked}
            />
          )}
        </div>
      ))}
    </div>
  );
}
