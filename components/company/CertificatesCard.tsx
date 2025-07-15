import { Certificate } from "@/types/company";
import Image from "next/image";

export default function CertificatesCard({
  imageUrl,
  tag,
  description,
}: Certificate) {
  return (
    <div className="flex w-[350px] flex-col items-center justify-center gap-4 rounded-xl bg-white p-6 shadow-md">
      <Image src={imageUrl} alt="인증서 이미지" width={200} height={200} />

      <span className="bg-light-green text-primary-green w-fit rounded-full px-2 py-0.5 text-xs font-semibold">
        {tag}
      </span>

      <p className="text-lg font-semibold whitespace-pre-wrap text-gray-800">
        {description}
      </p>
    </div>
  );
}
