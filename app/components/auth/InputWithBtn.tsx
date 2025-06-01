import { InputField } from "@/app/(auth)/field";

export default function InputWithBtn({
  autoFocus,
  name,
  type,
  placeholder,
  button,
}: InputField) {
  return (
    <div className="flex items-center justify-center gap-4">
      <label className="w-[74px] text-center text-sm whitespace-nowrap">
        {placeholder}
      </label>
      <div className="flex w-full max-w-[330px] gap-4">
        <input
          autoFocus={autoFocus}
          className="bg-input-green flex-grow-1 appearance-none rounded-xl border-1 border-gray-100 px-4 py-2 whitespace-nowrap [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          name={name}
          type={type}
          placeholder={placeholder}
        />
        <button
          className={`${button ? "block" : "invisible"} bg-btn-green w-[60px] cursor-pointer rounded-xl px-4 py-2 text-white`}
        >
          {button}
        </button>
      </div>
    </div>
  );
}
