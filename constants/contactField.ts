import { InputField } from "@/types/field";

export const contactFields: InputField[] = [
  { name: "name", type: "text", placeholder: "이름" },
  { name: "phone", type: "tel", placeholder: "전화번호" },
  { name: "email", type: "email", placeholder: "이메일" },
];
