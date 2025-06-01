import { InputField } from "@/app/(auth)/field";

export default function Input({ name, type, placeholder }: InputField) {
  return (
    <div className="flex items-center justify-between">
      <label className="">{placeholder}</label>
      <input
        className="bg-input-green w-full max-w-[350px] appearance-none rounded-xl border-1 border-gray-100 px-4 py-2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
