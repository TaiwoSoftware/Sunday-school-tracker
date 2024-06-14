"use client";
import { useState } from "react";
import FormInput from "./FormInput";
export default function DynamicForm({}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userClass, setUserClass] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleCLass = (e) => {
    setUserClass(e.target.value)
  }
  return (
    <>
      <h1 className="text-center font-bold mb-10 text-2xl ">ATTENDANCE</h1>
      <form className=" formStyle  px-24 pb-20 ">
        {name !== "" ? (
          <FormInput
          id='text'
            type="text"
            handleChange={handleChange}
            data={name}
            valid="name"
            styling="absolute tickMark mt-[-3rem] ml-[28rem] "
            placeholder="Your name"
          />
        ) : (
          <FormInput
          id='text'
            type="text"
            handleChange={handleChange}
            data={name}
            valid="name"
            styling="absolute tickMark mt-[-3rem] ml-[28rem] hidden"
            placeholder="Your name"
          />
        )}

        {userClass !== '' ? (
          <FormInput 
          id='class'
            type='text'
            handleChange={handleCLass}
            data={userClass}
            valid='class'
            styling='absolute tickMark mt-[-3rem] ml-[28rem]'
            placeholder='Your class'
          />
        ) : (<FormInput 
          id='class'
            type='text'
            data={userClass}
            handleChange={handleCLass}
            valid='class'
            styling='absolute tickMark mt-[-3rem] ml-[28rem] hidden'
            placeholder='Your class'
          />)}

        {email !== "" ? (
          <FormInput
          id='email'
            type="text"
            handleChange={handleEmail}
            data={email}
            valid="class"
            styling="absolute tickMark mt-[-3rem] ml-[28rem] "
            placeholder="Email"
          />
        ) : (
          <FormInput
          id='email'
            type="text"
            handleChange={handleEmail}
            data={email}
            valid="class"
            styling="absolute tickMark mt-[-3rem] ml-[28rem] hidden"
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
