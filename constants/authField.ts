import { InputField } from "@/types/field";

export const loginFields: InputField[] = [
  { name: "memberEmail", type: "email", placeholder: "이메일" },
  { name: "memberPassword", type: "password", placeholder: "비밀번호" },
];

export const AUTH_SEND = "인증";
export const AUTH_VERIFY = "확인";

export const personalSignupFields: InputField[] = [
  { name: "name", type: "text", placeholder: "이름" },
  { name: "nickname", type: "text", placeholder: "닉네임" },
  { name: "email", type: "email", placeholder: "이메일", button: AUTH_SEND },
  {
    name: "authCode",
    type: "text",
    placeholder: "인증번호",
    button: AUTH_VERIFY,
  },
  { name: "password", type: "password", placeholder: "비밀번호" },
  { name: "roadAddress", type: "text", placeholder: "도로명 주소" },
  { name: "lotAddress", type: "text", placeholder: "지번 주소" },
  { name: "address", type: "text", placeholder: "주소" },
];

export const corporateSignupFields: InputField[] = [
  { name: "name", type: "text", placeholder: "담당자명" },
  { name: "email", type: "email", placeholder: "이메일", button: AUTH_SEND },
  {
    name: "verify",
    type: "text",
    placeholder: "인증번호",
    button: AUTH_VERIFY,
  },
  { name: "password", type: "password", placeholder: "비밀번호" },
  { name: "nickname", type: "text", placeholder: "대리점명" },
  { name: "roadAddress", type: "text", placeholder: "도로명 주소" },
  { name: "lotAddress", type: "text", placeholder: "지번 주소" },
  { name: "address", type: "text", placeholder: "주소" },
  { name: "corporationNumber", type: "number", placeholder: "사업자번호" },
  { name: "corporationFile", type: "file", placeholder: "사업자등록증" },
];
