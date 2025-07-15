"use client";

import { useState } from "react";

import useSendAuthCode from "@/hooks/sendAuthCode";
import useVerifyAuthCode from "@/hooks/verifyAuthCode";

import { AUTH_SEND, AUTH_VERIFY } from "@/constants/authField";
import {
  getEmailFromLocalStorage,
  saveEmailToLocalStorage,
} from "@/utils/storage";
import { InputField } from "@/types/field";

const cleanString = (input: string) =>
  input
    .trim()
    .replace(/[\u0000-\u001F\u007F\u0080-\u009F]/g, "")
    .replace(/\u001C/g, "")
    .trim();

export default function InputWithBtn({
  name,
  type,
  placeholder,
  button,
}: InputField) {
  const [value, setValue] = useState("");

  const { sendAuthCode } = useSendAuthCode();
  const { verifyAuthCode } = useVerifyAuthCode();

  const handleSendAuthCode = async () => {
    await sendAuthCode({ email: cleanString(value) });
    saveEmailToLocalStorage(cleanString(value));
  };

  const handleVerifyAuthCode = async () => {
    const email = getEmailFromLocalStorage();
    if (!email) return;

    await verifyAuthCode({
      email: cleanString(email),
      authCode: cleanString(value),
    });
  };

  const emailVerification = async () => {
    if (button === AUTH_SEND) {
      await handleSendAuthCode();
    }

    if (button === AUTH_VERIFY) {
      await handleVerifyAuthCode();
    }
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <label className="w-[74px] text-center text-sm whitespace-nowrap">
        {placeholder}
      </label>
      <div className="flex w-full max-w-[330px] gap-4">
        <input
          className="bg-light-green flex-grow appearance-none rounded-xl border-1 border-gray-100 px-4 py-2 whitespace-nowrap [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className={`${button ? "block" : "invisible"} bg-primary-green w-[60px] cursor-pointer rounded-xl px-4 py-2 text-white`}
          onClick={emailVerification}
        >
          {button}
        </button>
      </div>
    </div>
  );
}
