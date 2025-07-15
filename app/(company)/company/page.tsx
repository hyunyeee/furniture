import { CompanyImage } from "@/types/company";
import CompanyDetailTable from "@/app/components/company/CompanyDetailTable";
import Image from "next/image";

async function getCompanyImage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  const response = await fetch(`${apiUrl}/company/image`);
  return await response.json();
}

export default async function History() {
  const companyImage: CompanyImage = await getCompanyImage();
  const { imageUrl, description } = companyImage;
  return (
    <div className="mx-auto mt-[100px] max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl font-bold sm:text-3xl">회사 소개</h1>

      <p className="text-md mt-2 text-center leading-loose whitespace-pre-wrap md:text-xl">
        &#34; 환경, 공간, 능률을 창조하는 기업 쾌적한 업무환경을 구축하는 기업이
        되겠습니다. &#34;
      </p>

      <div className="mb-20 flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <div className="relative aspect-video w-full max-w-3xl transform overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02] lg:w-1/2">
          <Image
            src={imageUrl}
            alt="회사 소개 이미지"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2">
          <p className="md:text-md text-center text-sm leading-loose whitespace-pre-wrap lg:text-left">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-20">
        <CompanyDetailTable />
      </div>
    </div>
  );
}
