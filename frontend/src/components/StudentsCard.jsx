import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
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
    <div>
      {students.map((student) => (
        <div key={student._id}>
          <div></div>
          <div>
            <h1>{`${student.firstName} ${student.lastName}`}</h1>
            <p>{student.email}</p>
            <p>{`ID: ${student.studentID}`}</p>
          </div>
          <div>
            <button onClick={() => handleIsEditing()}>Edit</button>
            <button onClick={() => handleIsDeleting()}>Delete</button>
          </div>
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
      ))}
    </div>
  );
}
