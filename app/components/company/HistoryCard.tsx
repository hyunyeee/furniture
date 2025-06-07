import { Histories } from "@/types/company";

export default function HistoryCard({
  title,
  content,
  imageUrl1,
  imageUrl2,
}: Histories) {
  return (
    <div className="border-1 border-gray-700 p-4">
      <h2 className="font-semibold">{title}</h2>
      <p>{content}</p>
      <p className="text-gray-700">{imageUrl1}</p>
      <p className="text-gray-700">{imageUrl2}</p>
    </div>
  );
}
