"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import useMemberInfoStore from "@/store/memberInfoStore";

export default function MyPage() {
  const router = useRouter();
  const { clearToken } = useAuthStore();
  const { clearMemberInfo } = useMemberInfoStore();

  const logout = () => {
    if (confirm("로그아웃 할까요?")) {
      clearMemberInfo();
      clearToken();
      router.push("/");
    }
  };

  return (
    <div className="mt-[230px] flex w-full items-center justify-center">
      <div className="mx-[20px] flex w-full max-w-[450px] flex-col items-center justify-center gap-4 rounded-xl p-5 shadow-lg">
        <Link
          href="/change-password"
          className="bg-primary-green hover:bg-dark-green w-full max-w-[450px] cursor-pointer rounded-xl p-4 text-center text-white"
        >
          비밀번호 변경
        </Link>
        <button
          onClick={logout}
          className="bg-primary-green hover:bg-dark-green w-full max-w-[450px] cursor-pointer rounded-xl p-4 text-white"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
