/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import DynamicForm from "@/components/DynamicForm";
import FalseForm from "@/components/FalseForm";
import TimeDate from "@/components/TimeDate";
import { useState } from "react";
export default function page() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className=" p-10 bg-white mt-10 mb-10 max-w-3xl m-auto rounded-lg reduceWidth"
    >
      <div className="flex container items-center justify-between mt-3 mb-10">
        <TimeDate />
      </div>
      {isClicked === true ? (
        <>
          <DynamicForm />
        </>
      ) : (
        <>
          <FalseForm />
        </>
      )}
    </div>
  );
}
