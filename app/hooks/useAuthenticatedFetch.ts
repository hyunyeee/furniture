"use client";

import { useAuthStore } from "@/app/store/authStore";
import useMemberInfoStore from "@/app/store/memberInfoStore";

export const useAuthenticatedFetch = (token: string) => {
  const { clearToken } = useAuthStore();
  const { setMemberNickName } = useMemberInfoStore();

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

    if (res.status === 401) {
      clearToken();
      setMemberNickName("");
      throw new Error("로그인 상태가 만료 되었습니다. 다시 로그인해주세요.");
    }

    return res;
  };
};
