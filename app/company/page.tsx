import { CompanyImage } from "@/types/company";
import DetailTable from "@/app/components/company/DetailTable";

async function getCompanyImage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  const response = await fetch(`${apiUrl}/company/image`);
  return await response.json();
}

export default async function History() {
  const companyImage: CompanyImage = await getCompanyImage();
  const { imageUrl, description } = companyImage;

  return (
    <div className="mt-[100px] flex h-screen flex-col gap-20 px-20">
      <h1 className="text-center text-3xl font-semibold">회사 소개</h1>
      <div>
        <p>{imageUrl}</p>
        <p>{description}</p>
      </div>
      <DetailTable />
    </div>
  );
}
