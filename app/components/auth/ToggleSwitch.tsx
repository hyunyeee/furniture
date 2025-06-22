"use client";

type ToggleSwitchProps = {
  isCorporation: boolean;
  setIsCorporationAction: (
    value: boolean | ((prev: boolean) => boolean),
  ) => void;
};
export const ToggleSwitch = ({
  isCorporation,
  setIsCorporationAction,
}: ToggleSwitchProps) => {
  return (
    <label className="flex w-full cursor-pointer justify-center">
      <input
        type="checkbox"
        checked={isCorporation}
        onChange={() => setIsCorporationAction((prev) => !prev)}
        className="peer sr-only"
      />
      <div
        className={`relative h-7 w-14 rounded-full transition-colors peer-focus:outline-none ${isCorporation ? "bg-primary-green" : "bg-dark-green"}`}
      >
        <div
          className={`absolute start-[4px] top-0.5 h-6 w-6 rounded-full bg-white transition-transform ${isCorporation ? "translate-x-full" : "translate-x-0"} peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full`}
        />
      </div>
      <span
        className={`ms-3 text-lg font-semibold ${isCorporation ? "text-primary-green" : "text-gray-600"} `}
      >
        {isCorporation ? "사업자" : "개인"}
      </span>
    </label>
  );
};
