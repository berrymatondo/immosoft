"use client";
import { useRouter } from "next/navigation";
import React from "react";

type AddButtonProps = {
  path: string;
  text: string;
};

const AddButton = (props: AddButtonProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(props.path)}
      className="bg-teal-800 text-white rounded-lg p-2 hover:bg-teal-600 hover:text-gray-200"
    >
      {props.text}
    </button>
  );
};

export default AddButton;
