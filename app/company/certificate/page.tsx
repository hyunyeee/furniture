import { Certificate } from "@/types/company";
import { getCertificate } from "@/lib/api/company";
import CertificatesCard from "@/components/company/CertificatesCard";

export default async function CertificatePage() {
  const certificates: Certificate[] = await getCertificate();

  return (
    <div className="mx-auto mt-[100px] flex max-w-screen-xl flex-col justify-between px-4 sm:px-20">
      <h1 className="text-center text-2xl font-semibold sm:text-3xl">인증서</h1>

      {certificates.length === 0 ? (
        <p className="mt-10 text-center">인증서 데이터가 존재하지 않습니다..</p>
      ) : (
        <div className="mt-[50px] flex flex-wrap justify-center gap-3 pb-[100px] sm:gap-6">
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
