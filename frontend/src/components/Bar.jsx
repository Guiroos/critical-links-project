import React, { useState } from "react";
import StudentForm from "./StudentForm";
import ClassForm from "./ClassForm";
import ManageClasses from "./ManageClasses";

export default function Bar({ buttonClicked }) {
  const [isStudentForm, setIsStudentForm] = useState(false);
  const [isClassForm, setIsClassForm] = useState(false);
  const [isManageClasses, setIsManageClasses] = useState(false);

  const handleStudentFormClick = () => {
    setIsStudentForm(!isStudentForm);
    setIsClassForm(false);
    setIsManageClasses(false);
  };

  const handleClassFormClick = () => {
    setIsClassForm(!isClassForm);
    setIsStudentForm(false);
    setIsManageClasses(false);
  };

  const handleManageClassesClick = () => {
    setIsManageClasses(!isManageClasses);
    setIsStudentForm(false);
    setIsClassForm(false);
  };

  return (
    <div>
      <div>
        <h1>Student Manager</h1>
      </div>
      <div>
        <button onClick={() => setIsStudentForm(!isStudentForm)}>
          Create Student
        </button>
        <button onClick={() => setIsClassForm(!isClassForm)}>
          Create Class
        </button>
        <button onClick={() => setIsManageClasses(!isManageClasses)}>
          Manage Class
        </button>
        {isStudentForm && (
          <StudentForm
            handleStudentFormClick={handleStudentFormClick}
            buttonClicked={buttonClicked}
            axiosApi="post"
          />
        )}
        {isClassForm && (
          <ClassForm
            handleClassFormClick={handleClassFormClick}
            buttonClicked={buttonClicked}
          />
        )}
        {isManageClasses && (
          <ManageClasses
            handleManageClassesClick={handleManageClassesClick}
            buttonClicked={buttonClicked}
          />
        )}
      </div>
    </div>
  );
}
