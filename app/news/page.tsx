import { NewsCardProps } from "@/types/updates";
import { getNews } from "@/lib/api/updates";
import NewsCard from "@/components/company/NewsCard";

export default async function NewsPage() {
  const newsList: NewsCardProps[] = await getNews();

  return (
    <div className="my-[100px] flex flex-col justify-between gap-10">
      <h1 className="text-center text-3xl font-semibold">뉴스</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {newsList.map((news) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </div>
    </div>
  );
}
