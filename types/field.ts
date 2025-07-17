export interface InputField {
  name: string;
  type: "text" | "number" | "email" | "password" | "file" | "tel";
  placeholder: string;
  autoFocus?: boolean;
  button?: string;
}

export interface TextAreaField {
  name: string;
  placeholder: string;
  autoFocus?: boolean;
}
