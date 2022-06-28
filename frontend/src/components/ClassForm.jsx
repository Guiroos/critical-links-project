import React from "react";
import { useForm } from "react-hook-form";
import { apiPostBody, apiPut } from "../utils/axios";

export default function ClassForm({
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            id="className"
            placeholder="Class name"
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

        <div>
          <button type="reset" onClick={() => handleIsEditing()}>
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
