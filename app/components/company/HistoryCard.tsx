import { Histories } from "@/types/company";
import Image from "next/image";

export default function HistoryCard({
  title,
  content,
  imageUrl1,
  imageUrl2,
}: Histories) {
  return (
    <li className="ms-4 mb-10">
      <div className="absolute start-0 top-1.5 h-3 w-3 rounded-full border border-white bg-gray-200" />

      <time className="mb-1 block text-sm leading-none font-medium text-gray-500">
        {title}
      </time>

      <h3 className="mb-1 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-3 text-sm whitespace-pre-line text-gray-700">
        {content}
      </p>

      {(imageUrl1 || imageUrl2) && (
        <div className="mt-2 flex flex-wrap gap-4">
          {imageUrl1 && (
            <Image
              src={imageUrl1}
              alt="연혁 이미지1"
              width={240}
              height={160}
              className="rounded-md border border-gray-100 object-cover"
            />
          )}
          {imageUrl2 && (
            <Image
              src={imageUrl2}
              alt="연혁 이미지2"
              width={240}
              height={160}
              className="rounded-md border border-gray-100 object-cover"
            />
          )}
        </div>
      )}
    </li>
  );
}
