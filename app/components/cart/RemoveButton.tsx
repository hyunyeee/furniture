interface RemoveButtonProps {
  productId: number;
  onRemoveItem: (productId: number) => void;
}

const RemoveButton = ({ productId, onRemoveItem }: RemoveButtonProps) => {
  return (
    <button
      onClick={() => onRemoveItem(productId)}
      className="cursor-pointer p-2 text-gray-500 transition-colors duration-200 hover:text-red-600 focus:outline-none"
      title="Remove item"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default RemoveButton;
