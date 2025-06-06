import HistoryCard from "@/app/components/company/historyCard";
import { Histories } from "@/types/company";

async function getHistories(): Promise<Histories[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  const response = await fetch(`${apiUrl}/company/history`);

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

export default async function History() {
  const histories: Histories[] = await getHistories();

  return (
    <div className="mt-[100px] flex h-screen flex-col justify-between px-20 pb-20">
      <h1 className="text-center text-3xl font-semibold">연혁</h1>
      {histories.length === 0 ? (
        <p>연혁 데이터가 없습니다.</p>
      ) : (
        histories.map(({ id, title, content, imageUrl1, imageUrl2 }) => (
          <HistoryCard
            key={id}
            title={title}
            content={content}
            imageUrl1={imageUrl1}
            imageUrl2={imageUrl2}
          />
        ))
      )}
    </div>
  );
}
