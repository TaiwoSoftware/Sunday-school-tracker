import { useState } from "react";
import FormInput from "./FormInput";

export default function FalseForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [date, setDate] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleTel = (e) => {
    setTel(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  return (
    <>
      <h1 className="text-center font-bold mb-10 text-2xl ">
        Welcome to our sunday school{" "}
      </h1>
      <form className=" formStyle px-24 pb-20">
        {name !== "" ? (
          <FormInput
            id="text"
            data={name}
            type="text"
            handleChange={handleName}
            styling="absolute tickMark mt-[-3rem] ml-[28rem]"
            valid={"name"}
            placeholder={"Your name"}
          />
        ) : (
          <FormInput
            id="text"
            data={name}
            handleChange={handleName}
            type="text"
            styling="absolute tickMark mt-[-3rem] ml-[31rem] hidden"
            valid={"name"}
            placeholder={"Your name"}
          />
        )}

        {email !== "" ? (
          <FormInput
            id="email"
            handleChange={handleEmail}
            data={email}
            valid={"email"}
            type="email"
            styling="absolute tickMark mt-[-3rem] ml-[28rem]"
            placeholder={"Email address"}
          />
        ) : (
          <FormInput
            id="email"
            data={email}
            handleChange={handleEmail}
            valid={"email"}
            type="email"
            styling="absolute tickMark mt-[-3rem] ml-[31rem] hidden"
            placeholder={"Email address"}
          />
        )}
        {tel !== "" ? (
          <FormInput
            id="tel"
            data={tel}
            handleChange={handleTel}
            type="tel"
            valid={"tel"}
            styling="absolute tickMark mt-[-4rem] ml-[28rem]"
            placeholder={"Telephone"}
          />
        ) : (
          <FormInput
            id="tel"
            data={tel}
            handleChange={handleTel}
            type="tel"
            valid={"tel"}
            styling="absolute tickMark mt-[-3rem] ml-[31rem] hidden"
            placeholder={"Telephone"}
          />
        )}
        {date !== '' ? (<FormInput
          type="date"
          data={date}
          handleChange={handleDate}
          valid={"date"}
          styling="absolute tickMark mt-[-3rem] ml-[29.5rem]"
          placeholder={"Date Of Birth"}
        />) : (
          <FormInput
          type="date"
          data={date}
          handleChange={handleDate}
          valid={"date"}
          styling="absolute tickMark mt-[-3rem] ml-[31rem] hidden"
          placeholder={"Date Of Birth"}
        />
        )}
        <button
          type="submit"
          className=" bg-gradient-to-r from-blue-400 to-indigo-500 w-full px-5 py-4 text-white rounded-lg "
        >
          Join the class
        </button>
      </form>
    </>
  );
}
