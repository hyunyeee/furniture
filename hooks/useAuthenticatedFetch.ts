"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import useMemberInfoStore from "@/store/memberInfoStore";

export const useAuthenticatedFetch = (token: string) => {
  const { clearToken } = useAuthStore();
  const { setMemberNickName } = useMemberInfoStore();

  const router = useRouter();

  return async (
    input: RequestInfo,
    init: RequestInit = {},
  ): Promise<Response> => {
    const res = await fetch(input, {
      ...init,
      headers: {
        ...init.headers,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (res.status === 401 || !token) {
      clearToken();
      setMemberNickName("");
      alert("로그인 상태가 유효하지 않습니다. 다시 로그인해주세요.");
      router.push("/login");
      throw new Error("로그인 상태가 유효하지 않습니다. 다시 로그인해주세요.");
    }

    return res;
  };
};
