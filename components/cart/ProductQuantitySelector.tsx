import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

const ProductQuantitySelector = ({
  quantity,
  onQuantityChange,
}: QuantitySelectorProps) => {
  const handleIncrease = async () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrease = async () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      onQuantityChange(value);
    }
  };

  return (
    <div className="flex items-center space-x-1 p-2">
      <button
        type="button"
        onClick={handleDecrease}
        className="h-8 w-8 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
      >
        –
      </button>
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={handleInputChange}
        className="h-8 w-12 [appearance:textfield] appearance-none rounded border border-gray-300 text-center text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={handleIncrease}
        className="h-8 w-8 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantitySelector;
