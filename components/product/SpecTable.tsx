import { productSpec } from "@/types/products";

interface SpecTableProps {
  productSpec: productSpec[];
}

const SpecTable = ({ productSpec }: SpecTableProps) => {
  return (
    <table className="min-w-full table-auto text-gray-600">
      <thead>
        <tr>
          <th className="px-4 py-2 text-center text-sm">모델</th>
          <th className="px-4 py-2 text-center text-sm">사이즈</th>
        </tr>
      </thead>
      <tbody>
        {productSpec?.map(({ model, size }) => (
          <tr key={model}>
            <td className="border px-2 py-1 text-center text-xs">{model}</td>
            <td className="border px-2 py-1 text-center text-xs">{size}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SpecTable;
