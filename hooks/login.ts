"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import useMemberInfoStore from "@/store/memberInfoStore";

export interface LoginData {
  memberEmail: string;
  memberPassword: string;
}

interface LoginResult {
  success: boolean;
  token: string;
  memberId: number;
  memberName: string;
  memberNickName: string;
  checkCorporation: boolean;
}

const useLogin = () => {
  const router = useRouter();
  const { setToken } = useAuthStore();
  const { setMemberNickName, setCheckCorporation } = useMemberInfoStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (params: LoginData): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!baseUrl) throw new Error("API 주소가 설정되지 않았습니다.");

      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "로그인 실패");
      }

      const data: LoginResult = await response.json();

      const { token, memberNickName, checkCorporation } = data;

      setLoading(false);
      setToken(token);
      setMemberNickName(memberNickName);
      setCheckCorporation(checkCorporation);

      router.push("/");
    } catch (err: unknown) {
      let message = "알 수 없는 오류가 발생했습니다.";
      if (err instanceof Error) {
        message = err.message;
      }
      setLoading(false);
      setError(message);
      alert(message);
      throw new Error(message);
    }
  };

  return { login, loading, error };
};

export default useLogin;
