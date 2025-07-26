"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-600">
          에러가 발생했습니다
        </h1>
        <p className="mt-2 text-gray-400">{error.message}</p>
      </div>
    </div>
  );
}
