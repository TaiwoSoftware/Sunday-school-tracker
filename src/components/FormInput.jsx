"use client";
import { FcCheckmark } from "react-icons/fc";
export default function FormInput({
  type,
  placeholder,
  valid,
  data,
  handleChange,
  styling,
  id,
}) {
  return (
    <>
      <div className="mb-8">
        <label className="text-blue-500 font-semibold" htmlFor={id}>
          {placeholder}:
        </label>
        <input
          className=" active:border-blue-500 visited:border-blue-500 focus:border-indigo-300 outline-none border-2 border-gray-500 text-indigo-400 border-opacity-10  rounded-lg w-full p-6"
          type={type}
          id={id}
          placeholder={placeholder}
          value={data}
          onChange={handleChange}
          required
          name={valid}
        />
        <FcCheckmark className={styling} />
      </div>
    </>
  );
}
