import Image from "next/image";
import Link from "next/link";
import { NewsCardProps } from "@/types/updates";
import { PhotoIcon } from "@heroicons/react/24/outline";

export default function NewsCard({ url, title, image_url }: NewsCardProps) {
  return (
    <Link
      href={url}
      className="flex w-[300px] flex-col items-center rounded-xl border border-gray-100 px-6 py-4 transition hover:shadow"
    >
      <div className="relative mb-5 h-[200px] w-[200px] overflow-hidden rounded-md bg-gray-100">
        {image_url ? (
          <Image src={image_url} alt={title} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <PhotoIcon className="h-8 w-8 text-gray-500" />
          </div>
        )}
      </div>

      <div className="w-full text-left">
        <h2 className="truncate text-base font-semibold text-gray-800">
          {title}
        </h2>
      </div>
    </Link>
  );
}
