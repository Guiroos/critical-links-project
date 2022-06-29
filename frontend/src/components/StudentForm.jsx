import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { apiPostBody, apiPut } from "../utils/axios";
import { EMAIL_PATTERN, STUDENT_ID_PATTERN } from "../utils/constants";
import OnClickButton from "./OnClickButton";

export default function StudentForm({
  classesOptions,
  handleStudentFormClick,
  buttonClicked,
  route,
  axiosApi,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      studentID: "",
      class: [],
    },
  });

  const handleClassChange = (selectedClass) => {
    const arrayOfClasses = selectedClass.map((classObj) => classObj.value);
    setValue("class", arrayOfClasses);
  };

  const onSubmit = (data) => {
    if (axiosApi === "post") {
      try {
        apiPostBody("/students", data);
        buttonClicked();
        handleStudentFormClick();
      } catch (error) {
        console.log(error);
      }
    }
    if (axiosApi === "put") {
      try {
        apiPut(route, data);
        buttonClicked();
        handleStudentFormClick();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mb-2 text-lg">{axiosApi === "post" ? "Create Student" : "Edit student"}</p>
        <div>
          <input
            id="firstName"
            placeholder="First name"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            {...register("firstName", {
              required: true,
              minLength: {
                value: 2,
                message: "Name must have more than one character",
              },
            })}
          />
          {errors.firstName && (
            <p id="firstName-error">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <input
            id="lastName"
            placeholder="Last name"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            {...register("lastName", {
              required: true,
              minLength: {
                value: 2,
                message: "Name must have more than one character",
              },
            })}
          />
          {errors.lastName && (
            <p id="lastName-error">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <input
            id="email"
            placeholder="student@site.com.br"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            {...register("email", {
              required: true,
              pattern: {
                value: EMAIL_PATTERN,
                message: "Invalid email",
              },
            })}
          />
          {errors.email && <p id="email-error">{errors.email.message}</p>}
        </div>

        <div>
          <input
            id="studentID"
            placeholder="Student ID - 000000"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            {...register("studentID", {
              required: true,
              pattern: {
                value: STUDENT_ID_PATTERN,
                message: "Student ID accepts only numbers",
              },
              maxLength: {
                value: 6,
                message: "Student ID must have 6 digits",
              },
            })}
          />
          {errors.studentID && (
            <p id="studentID-error">{errors.studentID.message}</p>
          )}
        </div>

        <div>
          <Select
            options={classesOptions}
            isMulti
            id="class"
            placeholder="Select classes..."
            onChange={(selected) => handleClassChange(selected)}
          />

          {errors.class && <p id="class-error">{errors.class.message}</p>}
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <OnClickButton
            type="reset"
            func={handleStudentFormClick}
            content={"Cancel"}
          />
          <OnClickButton
            type="submit"
            disabled={!isValid}
            content={axiosApi === "post" ? "Create" : "Update"}
          />
        </div>
      </form>
    </div>
  );
}
