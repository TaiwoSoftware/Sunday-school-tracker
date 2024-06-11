"use client";
import Image from 'next/image';
import {FcCheckmark} from 'react-icons/fc'
export default function FormInput({ type, placeholder, valid, data, handleChange, styling}) {
  return (
    <>
      <input
        className=" active:border-blue-500 visited:border-blue-500 focus:border-indigo-300 outline-none border-2 border-gray-500 text-indigo-400 border-opacity-10 rounded-lg w-full p-6 mt-6"
        type={type}
        placeholder={placeholder}
        value={data}
        onChange={handleChange}
        required
        name={valid}
      />
      <FcCheckmark className={styling} />
    </>
  );
}
