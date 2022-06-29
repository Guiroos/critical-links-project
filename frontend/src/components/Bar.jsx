import React, { useState } from "react";
import StudentForm from "./StudentForm";
import ClassForm from "./ClassForm";
import ManageClasses from "./ManageClasses";
import OnClickButton from "./OnClickButton";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Bar({ classes, classesOptions, buttonClicked }) {
  const [isStudentForm, setIsStudentForm] = useState(false);
  const [isClassForm, setIsClassForm] = useState(false);
  const [isManageClasses, setIsManageClasses] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const handleMobile = () => {
    setIsManageClasses(false);
    setIsStudentForm(false);
    setIsClassForm(false);
    setIsMobile(!isMobile);
  };

  return (
    <div className="flex justify-between mx-8 my-4">
      <div className="text-3xl text-[#5B5B5B]">
        <p>Student Manager</p>
      </div>
      <div className="hidden desktop:flex desktop:gap-3">
        <OnClickButton content="Create Student" func={handleStudentFormClick} />
        <OnClickButton content="Create Class" func={handleClassFormClick} />
        <OnClickButton
          content="Manage Classes"
          func={handleManageClassesClick}
        />
        {isStudentForm && (
          <div className="absolute top-0 left-0 py-4 px-8 w-full h-screen flex flex-col justify-center items-center">
            <button
              type="button"
              tabIndex={-1}
              onClick={handleStudentFormClick}
              className="fixed inset-0 w-screen h-screen cursor-default"
            />
            <div className="border px-5 pb-4 shadow-lg z-10">
              <StudentForm
                classesOptions={classesOptions}
                handleStudentFormClick={handleStudentFormClick}
                buttonClicked={buttonClicked}
                axiosApi="post"
              />
            </div>
          </div>
        )}
        {isClassForm && (
          <div className="absolute top-0 left-0 py-4 px-8 w-full h-screen flex flex-col justify-center items-center">
            <button
              type="button"
              tabIndex={-1}
              onClick={handleClassFormClick}
              className="fixed inset-0 w-screen h-screen cursor-default"
            />
            <div className="border px-5 pb-4 shadow-lg z-10">
              <ClassForm
                handleClassFormClick={handleClassFormClick}
                buttonClicked={buttonClicked}
                axiosApi="post"
              />
            </div>
          </div>
        )}
        {isManageClasses && (
          <ManageClasses
            classes={classes}
            handleManageClassesClick={handleManageClassesClick}
            buttonClicked={buttonClicked}
          />
        )}
      </div>

      <div className="desktop:hidden">
        <OnClickButton
          content={<FaBars size={32} />}
          icon={"bar"}
          func={handleMobile}
        />
        <div
          className={
            !isMobile
              ? "hidden"
              : " absolute top-0 left-0 py-4 px-8 w-full h-screen flex flex-col items-center bg-white"
          }
        >
          <div className="flex justify-end w-full">
            <OnClickButton
              content={<FaTimes size={32} />}
              icon={"bar"}
              func={handleMobile}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col py-8 gap-4 h-full text-3xl font-bold cursor-pointer">
              <div className="border-b-2 w-full p-2">
                <p className="w-fit p-3" onClick={handleClassFormClick}>
                  Create Class
                </p>
              </div>
              <div className="border-b-2 w-full p-2">
                <p className="w-fit p-3" onClick={handleStudentFormClick}>
                  Create student
                </p>
              </div>
              <div className="border-b-2 w-full p-2">
                <p className="w-fit p-3" onClick={handleManageClassesClick}>
                  Manage classes
                </p>
              </div>
            </div>
            {isStudentForm && (
              <StudentForm
                classesOptions={classesOptions}
                handleStudentFormClick={handleStudentFormClick}
                buttonClicked={buttonClicked}
                axiosApi="post"
              />
            )}
            {isClassForm && (
              <ClassForm
                handleClassFormClick={handleClassFormClick}
                buttonClicked={buttonClicked}
                axiosApi="post"
              />
            )}

            {isManageClasses && (
              <ManageClasses
                classes={classes}
                handleManageClassesClick={handleManageClassesClick}
                buttonClicked={buttonClicked}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
