import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { apiPostBody, apiPut } from "../utils/axios";
import { EMAIL_PATTERN, STUDENT_ID_PATTERN } from "../utils/constants";

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            id="firstName"
            placeholder="First name"
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

        <div>
          <button type="reset" onClick={() => handleStudentFormClick()}>
            Cancel
          </button>
          <button type="submit" disabled={!isValid}>
            {axiosApi === "post" ? "Create" : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}
