"use client";

import { useState } from "react";
import FormCard from "@/app/components/auth/FormCard";
import { ToggleSwitch } from "@/app/components/auth/ToggleSwitch";
import {
  corporateSignupFields,
  personalSignupFields,
} from "@/app/(auth)/field";
import Input from "@/app/components/auth/Input";

export default function Signup() {
  const [isCorporation, setIsCorporation] = useState(false);

  const toggleCorporation = () => {
    setIsCorporation((prev) => !prev);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const signupField = isCorporation
    ? corporateSignupFields
    : personalSignupFields;

  return (
    <FormCard
      title="회원가입"
      footer={{ label: "로그인 하기", href: "/login" }}
    >
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <ToggleSwitch
          isCorporation={isCorporation}
          setIsCorporationAction={toggleCorporation}
        />
        <div className="flex flex-col gap-3">
          {signupField.map((input) => (
            <Input
              key={input.name}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}
        </div>
        <button className="bg-btn-green w-full cursor-pointer rounded-xl p-4 text-white">
          회원가입
        </button>
      </form>
    </FormCard>
  );
}
