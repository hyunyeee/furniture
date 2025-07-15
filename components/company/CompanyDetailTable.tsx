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
    <div className="overflow-hidden rounded-md border border-gray-200">
      <table className="min-w-full table-auto text-left text-sm">
        <tbody>
          <tr className="border-b border-gray-200">
            <th className="w-1/6 bg-gray-100 p-2 text-center font-semibold text-gray-700">
              회사명
            </th>
            <td className="w-2/6 p-2 text-gray-800">{companyName}</td>
            <th className="w-1/6 bg-gray-100 p-2 text-center font-semibold text-gray-700">
              대표
            </th>
            <td className="w-2/6 p-2 text-gray-800">{ceo}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="w-1/6 bg-gray-100 p-2 text-center font-semibold text-gray-700">
              설립일
            </th>
            <td className="w-2/6 p-2 text-gray-800">{establishmentDate}</td>
            <th className="w-1/6 bg-gray-100 p-2 text-center font-semibold text-gray-700">
              사업영역
            </th>
            <td className="w-2/6 p-2 text-gray-800">{businessArea}</td>
          </tr>
          <tr>
            <th className="w-1/6 bg-gray-100 p-2 text-center font-semibold text-gray-700">
              사업장규모
            </th>
            <td className="w-2/6 p-2 text-gray-800">{scale}</td>
            <th className="w-1/6 bg-gray-100 p-2 text-center font-semibold text-gray-700">
              주거래처
            </th>
            <td className="w-2/6 p-2 text-gray-800">{mainClient}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
