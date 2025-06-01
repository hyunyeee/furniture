"use client";

import FormCard from "@/app/components/auth/FormCard";
import Input from "@/app/components/auth/Input";
import { loginFields } from "@/app/(auth)/field";

export default function Login() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <FormCard
      title="로그인"
      footer={{ label: "아직 계정이 없으신가요?", href: "/signup" }}
    >
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          {loginFields.map((input) => (
            <Input
              key={input.name}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}
        </div>
        <button className="bg-btn-green w-full cursor-pointer rounded-xl p-4 text-white">
          로그인
        </button>
      </form>
    </FormCard>
  );
}
