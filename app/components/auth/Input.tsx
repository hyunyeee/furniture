import { InputField } from "@/app/(auth)/field";

export default function Input({
  autoFocus,
  name,
  type,
  placeholder,
}: InputField) {
  return (
    <div className="flex items-center justify-center gap-4">
      <label className="w-[74px] text-center text-sm whitespace-nowrap">
        {placeholder}
      </label>
      <input
        autoFocus={autoFocus}
        className="bg-input-green w-full max-w-[330px] flex-grow-0 appearance-none rounded-xl border-1 border-gray-100 px-4 py-2 whitespace-nowrap [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
