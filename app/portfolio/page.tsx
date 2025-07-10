import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold text-gray-800">
          서비스 준비중입니다
        </h1>
        <p className="mt-4 text-gray-600">
          현재 페이지는 아직 준비 중입니다.
          <br />
          빠른 시일 내에 오픈 예정입니다. 이용에 불편을 드려 죄송합니다.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="bg-primary-green hover:bg-dark-green inline-block rounded-md px-6 py-2 text-white transition-colors"
          >
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
