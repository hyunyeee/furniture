"use client";

import useLogin, { LoginData } from "@/app/hooks/login";
import { saveNickNameToLocalStorage } from "@/app/utils/storage";
import FormCard from "@/app/components/auth/FormCard";
import Input from "@/app/components/auth/Input";
import { loginFields } from "@/app/(auth)/field";

export default function Login() {
  const { login } = useLogin();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const loginData: LoginData = {
      memberEmail: formData.get("memberEmail") as string,
      memberPassword: formData.get("memberPassword") as string,
    };

    const result = await login(loginData);
    saveNickNameToLocalStorage(result.memberNickName || "");
  }

  return (
    <FormCard
      title="로그인"
      footer={{ label: "아직 계정이 없으신가요?", href: "/signup" }}
    >
      <form
        className="flex flex-col items-center gap-10"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full flex-col gap-4">
          {loginFields.map(({ name, type, placeholder }, index) => (
            <Input
              autoFocus={index === 0}
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
            />
          ))}
        </div>
        <button className="bg-btn-green w-full max-w-[450px] cursor-pointer rounded-xl p-4 text-white">
          로그인
        </button>
      </form>
    </FormCard>
  );
}
