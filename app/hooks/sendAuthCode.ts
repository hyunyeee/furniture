"use client";

import { useState } from "react";

export interface AuthCodeRequest {
  email: string;
}

const useSendAuthCode = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendAuthCode = async (params: AuthCodeRequest) => {
    setLoading(true);
    setError(null);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!baseUrl) throw new Error("API 주소가 설정되지 않았습니다.");

      const response = await fetch(`${baseUrl}/send-auth-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || "인증번호 전송 실패");
      }

      const responseMsg = await response.text();
      setLoading(false);
      alert(responseMsg);
    } catch (err: unknown) {
      let errorMessage = "알 수 없는 오류가 발생했습니다.";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setLoading(false);
      setError(errorMessage);
      alert(errorMessage);
      throw new Error(errorMessage);
    }
  };

  return { sendAuthCode, loading, error };
};

export default useSendAuthCode;
