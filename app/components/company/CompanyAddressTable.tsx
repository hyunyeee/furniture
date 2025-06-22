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
    <div className="h-full p-20">
      <h2 className="mb-20 text-center text-3xl font-semibold">오시는길</h2>

      <table className="w-full table-auto border-collapse text-left text-sm">
        <tbody>
          <tr>
            <th className="border bg-gray-100 p-2 font-medium text-gray-700">
              주소
            </th>
            <td className="border p-2">{address}</td>
          </tr>
          <tr>
            <th className="border bg-gray-100 p-2 font-medium text-gray-700">
              전화
            </th>
            <td className="border p-2">{phone}</td>
          </tr>
          <tr>
            <th className="border bg-gray-100 p-2 font-medium text-gray-700">
              팩스
            </th>
            <td className="border p-2">{fax}</td>
          </tr>
          <tr>
            <th className="border bg-gray-100 p-2 font-medium text-gray-700">
              이메일
            </th>
            <td className="border p-2">{email}</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-md mt-6 mb-2 font-semibold">대중교통 이용시</h3>

      <table className="w-full table-auto border-collapse text-left text-sm">
        <tbody>
          <tr>
            <th className="border bg-gray-100 p-2 font-medium text-gray-700">
              지하철
            </th>
            <td className="border p-2">{subway}</td>
          </tr>
          <tr>
            <th className="border bg-gray-100 p-2 font-medium text-gray-700">
              버스환승
            </th>
            <td className="border p-2">
              {bus}
              <br />
              {walk}
            </td>
          </tr>
          <tr>
            <th className="border bg-gray-100 p-2 font-medium text-gray-700">
              자동차
            </th>
            <td className="border p-2">{car}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
