export type InputField = {
  name: string;
  type: "text" | "number" | "email" | "password";
  placeholder: string;
};

export const loginFields: InputField[] = [
  { name: "email", type: "email", placeholder: "이메일" },
  { name: "password", type: "password", placeholder: "비밀번호" },
];

export const personalSignupFields: InputField[] = [
  { name: "name", type: "text", placeholder: "이름" },
  { name: "nickname", type: "text", placeholder: "닉네임" },
  { name: "email", type: "email", placeholder: "이메일" },
  { name: "password", type: "password", placeholder: "비밀번호" },
  { name: "roadAddress", type: "text", placeholder: "도로명 주소" },
  { name: "lotAddress", type: "text", placeholder: "지번 주소" },
  { name: "address", type: "text", placeholder: "주소" },
];

export const corporateSignupFields: InputField[] = [
  { name: "name", type: "text", placeholder: "담당자명" },
  { name: "email", type: "email", placeholder: "이메일" },
  { name: "password", type: "password", placeholder: "비밀번호" },
  { name: "nickname", type: "text", placeholder: "대리점명" },
  { name: "roadAddress", type: "text", placeholder: "도로명 주소" },
  { name: "lotAddress", type: "text", placeholder: "지번 주소" },
  { name: "address", type: "text", placeholder: "주소" },
  { name: "corporationNumber", type: "number", placeholder: "사업자번호" },
];
