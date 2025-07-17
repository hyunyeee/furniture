"use client";

import { useState } from "react";

import FormCard from "@/components/auth/FormCard";
import { ToggleSwitch } from "@/components/auth/ToggleSwitch";
import InputWithBtn from "@/components/auth/InputWithBtn";
import Input from "@/components/Input";
import {
  corporateSignupFields,
  personalSignupFields,
} from "@/constants/authField";

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
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <ToggleSwitch
          isCorporation={isCorporation}
          setIsCorporationAction={toggleCorporation}
        />
        <div className="flex flex-col gap-3">
          {signupField.map(({ name, type, placeholder, button }, index) => (
            <div key={name}>
              {button ? (
                <InputWithBtn
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  button={button}
                />
              ) : (
                <Input
                  autoFocus={index === 0}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                />
              )}
            </div>
          ))}
        </div>
        <button className="bg-primary-green w-full cursor-pointer rounded-xl p-4 text-white">
          회원가입
        </button>
      </form>
    </FormCard>
  );
}
