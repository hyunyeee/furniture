import { CompanyAddress } from "@/types/company";

async function getCompanyAddress() {
  const apiUrl = process.env.API_URL as string;
  const response = await fetch(`${apiUrl}/address/1`);
  return await response.json();
}

export default async function CompanyAddressTable() {
  const companyAddress: CompanyAddress = await getCompanyAddress();
  const { address, phone, fax, email, subway, bus, walk, car } = companyAddress;

  return (
    <div className="mx-auto my-[130px] max-w-4xl rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-8 text-center text-2xl font-bold">오시는 길</h2>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        <div className="flex flex-1 flex-col overflow-hidden rounded-md border border-gray-200">
          <table className="min-w-full flex-1 table-auto flex-col text-left text-base">
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="bg-primary-green p-3 text-center text-lg font-semibold text-white"
                >
                  회사 연락처
                </th>
              </tr>
            </thead>
            <tbody className="flex-1 flex-col justify-between">
              <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50">
                <th className="w-1/4 bg-gray-50 p-3 font-medium text-gray-700">
                  주소
                </th>
                <td className="p-3 text-gray-800">{address}</td>
              </tr>
              <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50">
                <th className="w-1/4 bg-gray-50 p-3 font-medium text-gray-700">
                  전화
                </th>
                <td className="p-3 text-gray-800">{phone}</td>
              </tr>
              <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50">
                <th className="w-1/4 bg-gray-50 p-3 font-medium text-gray-700">
                  팩스
                </th>
                <td className="p-3 text-gray-800">{fax}</td>
              </tr>
              <tr className="transition-colors hover:bg-gray-50">
                <th className="w-1/4 bg-gray-50 p-3 font-medium text-gray-700">
                  이메일
                </th>
                <td className="p-3 text-gray-800">{email}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden rounded-md border border-gray-200">
          <table className="min-w-full flex-1 table-auto flex-col text-left text-base">
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="bg-primary-green p-3 text-center text-lg font-semibold text-white"
                >
                  대중교통 이용 시
                </th>
              </tr>
            </thead>
            <tbody className="flex-1 flex-col justify-between">
              <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50">
                <th className="w-1/4 bg-gray-50 p-3 font-medium text-gray-700">
                  지하철
                </th>
                <td className="p-3 text-gray-800">{subway}</td>
              </tr>
              <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50">
                <th className="w-1/4 bg-gray-50 p-3 font-medium text-gray-700">
                  버스/도보
                </th>
                <td className="p-3 text-gray-800">
                  {bus}
                  <br />
                  {walk}
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-50">
                <th className="w-1/4 bg-gray-50 p-3 font-medium text-gray-700">
                  자동차
                </th>
                <td className="p-3 text-gray-800">{car}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
