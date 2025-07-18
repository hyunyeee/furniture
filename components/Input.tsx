import { InputField } from "@/types/field";

export default function Input({
  autoFocus,
  name,
  type,
  placeholder,
}: InputField) {
  return (
    <div className="flex w-full max-w-[460px] min-w-0 items-center justify-center gap-2">
      <label className="w-[74px] shrink-0 text-center text-sm whitespace-nowrap">
        {placeholder}
      </label>
      <input
        className="bg-light-green min-w-0 flex-grow appearance-none rounded-xl border border-gray-100 px-4 py-2 text-sm"
        name={name}
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
    </div>
  );
}
