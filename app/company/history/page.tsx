import HistoryCard from "@/app/components/historyCard";
import { Histories } from "@/types/company";

async function getHistories() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  const response = await fetch(`${apiUrl}/company/history`);
  return await response.json();
}

export default async function History() {
  const histories: Histories[] = await getHistories();

  return (
    <div className="mt-[100px] flex h-screen flex-col justify-between px-20 pb-20">
      <h1 className="text-center text-3xl font-semibold">연혁</h1>
      {histories.map(({ id, title, content, imageUrl1, imageUrl2 }) => (
        <HistoryCard
          key={id}
          title={title}
          content={content}
          imageUrl1={imageUrl1}
          imageUrl2={imageUrl2}
        />
      ))}
    </div>
  );
}
