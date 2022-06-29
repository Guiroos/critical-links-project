import React from "react";

export default function OnClickButton({ content, type, id, icon, func, disabled }) {
  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      className={`
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      ${icon === "trash" && "text-[#F24E1E]"} 
      ${icon === "pencil" && "text-[#4E87F8]"}
      ${icon === "bar" && "text-black"}
      ${!icon && "text-white bg-[#4E87F8] hover:bg-[#7ca5f8]  px-5 py-2 rounded-lg shadow-lg"}"}`}
      onClick={() => func()}
    >
      {content}
    </button>
  );
}
