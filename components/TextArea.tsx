import { TextAreaField } from "@/types/field";

export default function TextArea({ name, placeholder }: TextAreaField) {
  return (
    <div className="mt-[30px] flex flex-col items-center justify-start gap-4">
      <label className="text-md w-[74px] text-start font-semibold whitespace-nowrap">
        {placeholder}
      </label>
      <textarea
        className="bg-light-green h-[300px] w-full max-w-[500px] flex-grow-0 appearance-none rounded-xl border-1 border-gray-100 px-4 py-2 whitespace-nowrap [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
