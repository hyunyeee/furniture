import { Histories } from "@/types/company";
import { getHistories } from "@/lib/api/company";
import HistoryCard from "@/components/company/HistoryCard";

export default async function History() {
  const histories: Histories[] = await getHistories();

  return (
    <section className="mx-auto mt-24 max-w-4xl px-6 pb-12">
      <h1 className="mb-12 text-center text-3xl font-bold text-gray-800">
        연혁
      </h1>

      {histories.length === 0 ? (
        <p className="text-center text-gray-500">연혁 데이터가 없습니다.</p>
      ) : (
        <ol className="relative border-s border-gray-200 pl-8">
          {histories.map((history) => (
            <HistoryCard key={history.id} {...history} />
          ))}
        </ol>
      )}
    </section>
  );
}
