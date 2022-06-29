import React from "react";
import { useForm } from "react-hook-form";
import { apiPostBody, apiPut } from "../utils/axios";
import OnClickButton from "./OnClickButton";

export default function ClassForm({
  handleClassFormClick,
  handleIsEditing,
  buttonClicked,
  route,
  axiosApi,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      className: "",
      year: "",
    },
  });

  const onSubmit = (data) => {
    if (axiosApi === "post") {
      try {
        apiPostBody("/classes", data);
        buttonClicked();
      } catch (error) {
        console.log(error);
        buttonClicked();
      }
    }
    if (axiosApi === "put") {
      try {
        apiPut(route, data);
        buttonClicked();
      } catch (error) {
        console.log(error);
        buttonClicked();
      }
    }
    buttonClicked();
  };

  return (
    <div id="class-form" className="mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <p className="mb-2 text-lg">{axiosApi === "post" ? "Create class" : "Edit class"}</p>
          <input
            id="className"
            placeholder="Class name"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            {...register("className", {
              required: true,
              minLength: {
                value: 2,
                message: "Name must have more than one character",
              },
            })}
          />
          {errors.className && (
            <p id="className-error">{errors.className.message}</p>
          )}
        </div>

        <div>
          <input
            type="number"
            id="year"
            placeholder="Year"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            {...register("year", {
              required: true,
              minLength: {
                value: 2,
                message: "Must have two digits",
              },
            })}
          />
          {errors.year && <p id="year-error">{errors.year.message}</p>}
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <OnClickButton
            id="class-form-cancel-button"
            type="reset"
            content={"Cancel"}
            func={handleClassFormClick}
          />
          <OnClickButton
            id="class-form-create-button"
            type="submit"
            content={axiosApi === "post" ? "Create" : "Update"}
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
}
