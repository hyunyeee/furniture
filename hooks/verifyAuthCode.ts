"use client";

import { useState } from "react";

export interface VerifyAuthCodeRequest {
  email: string;
  authCode: string;
}

const useVerifyAuthCode = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const verifyAuthCode = async (params: VerifyAuthCodeRequest) => {
    setLoading(true);
    setError(null);

    try {
      const jsonPayload = JSON.stringify(params);
      console.log("verifyAuthCode - 전송할 JSON:", jsonPayload);

      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!baseUrl) throw new Error("API 주소가 설정되지 않았습니다.");

      const response = await fetch(`${baseUrl}/verify-auth-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonPayload,
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || "인증번호 확인 실패");
      }

      const responseMsg = await response.text();
      setLoading(false);
      alert(responseMsg);
    } catch (err: unknown) {
      let message = "알 수 없는 오류가 발생했습니다.";
      if (err instanceof Error) {
        message = err.message;
      }
      setLoading(false);
      setError(message);
      throw new Error(message);
    }
  };

  return { verifyAuthCode, loading, error };
};

export default useVerifyAuthCode;
