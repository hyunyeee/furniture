import { NewsCardProps } from "@/types/updates";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getNews(): Promise<NewsCardProps[]> {
  const response = await fetch(`${apiUrl}/news`);

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : [];
}
