import { CompanyImage } from "@/types/company";

async function getCompany() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  const response = await fetch(`${apiUrl}/company/image`);
  return await response.json();
}

export default async function History() {
  const companyImage: CompanyImage = await getCompany();

  return (
    <div className="flex h-screen flex-col gap-20 p-4">
      <h1 className="text-center text-3xl font-semibold">회사 소개</h1>
      <div>
        <p>{companyImage.imageUrl}</p>
        <p>{companyImage.description}</p>
      </div>
    </div>
  );
}
