import { CompanyDetail } from "@/types/company";

async function getCompanyDetail() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  const response = await fetch(`${apiUrl}/company/detail`);
  return await response.json();
}

export default async function DetailTable() {
  const companyDetail: CompanyDetail = await getCompanyDetail();
  const {
    companyName,
    ceo,
    establishmentDate,
    businessArea,
    scale,
    mainClient,
  } = companyDetail;

  return (
    <table className="w-full table-auto border-collapse text-left text-sm">
      <tbody>
        <tr>
          <th className="border bg-gray-100 p-2 font-medium text-gray-700">
            회사명
          </th>
          <td className="border p-2">{companyName}</td>
          <th className="border bg-gray-100 p-2 font-medium text-gray-700">
            대표
          </th>
          <td className="border p-2">{ceo}</td>
        </tr>
        <tr>
          <th className="border bg-gray-100 p-2 font-medium text-gray-700">
            설립일
          </th>
          <td className="border p-2">{establishmentDate}</td>
          <th className="border bg-gray-100 p-2 font-medium text-gray-700">
            사업영역
          </th>
          <td className="border p-2">{businessArea}</td>
        </tr>
        <tr>
          <th className="border bg-gray-100 p-2 font-medium text-gray-700">
            사업장규모
          </th>
          <td className="border p-2">{scale}</td>
          <th className="border bg-gray-100 p-2 font-medium text-gray-700">
            주거래처
          </th>
          <td className="border p-2">{mainClient}</td>
        </tr>
      </tbody>
    </table>
  );
}
