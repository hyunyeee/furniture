import { Certificate } from "@/types/company";

import CertificatesCard from "@/app/components/company/CertificatesCard";

async function getCertificate(): Promise<Certificate[]> {
  const apiUrl = process.env.API_URL as string;
  const response = await fetch(`${apiUrl}/certificates`);

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    console.error("API 응답이 배열이 아닙니다:", data);
    return [];
  }

  return data;
}

export default async function CertificatePage() {
  const certificates: Certificate[] = await getCertificate();

  return (
    <div className="mt-[100px] flex flex-col justify-between px-20">
      <h1 className="text-center text-3xl font-semibold">인증서</h1>

      {certificates.length === 0 ? (
        <p>인증서 데이터가 존재하지 않습니다..</p>
      ) : (
        <div className="mt-[50px] flex flex-wrap justify-center gap-6 pb-[100px]">
          {certificates.map(({ id, imageUrl, tag, description }) => (
            <CertificatesCard
              key={id}
              id={id}
              imageUrl={imageUrl}
              tag={tag}
              description={description}
            />
          ))}
        </div>
      )}
    </div>
  );
}
