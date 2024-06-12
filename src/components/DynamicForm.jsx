"use client";
import { useState } from "react";
import FormInput from "./FormInput";
export default function DynamicForm({}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <h1 className="text-center font-bold mb-10 text-2xl ">ATTENDANCE</h1>
      <form className=" formStyle  px-24 pb-20 ">
        {name !== "" ? (
          <FormInput
            type="text"
            handleChange={handleChange}
            data={name}
            valid="name"
            styling="absolute mt-[-3rem] ml-[31rem] "
            placeholder="Your name"
          />
        ) : (
          <FormInput
            type="text"
            handleChange={handleChange}
            data={name}
            valid="name"
            styling="absolute mt-[-3rem] ml-[31rem] hidden"
            placeholder="Your name"
          />
        )}

        {email !== "" ? (
          <FormInput
            type="text"
            handleChange={handleEmail}
            data={email}
            valid="class"
            styling="absolute mt-[-3rem] ml-[31rem] "
            placeholder="Email"
          />
        ) : (
          <FormInput
            type="text"
            handleChange={handleEmail}
            data={email}
            valid="class"
            styling="absolute mt-[-3rem] ml-[31rem] hidden"
            placeholder="Email"
          />
        )}

        <button
          type="submit"
          className=" bg-gradient-to-r from-blue-400 to-indigo-500 w-full px-5 py-4 text-white rounded-lg"
        >
          Send
        </button>
      </form>
    </>
  );
}
