import { Certificate, Histories } from "@/types/company";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getCompanyImage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
  const response = await fetch(`${apiUrl}/company/image`);
  return await response.json();
}

export async function getHistories(): Promise<Histories[]> {
  const apiUrl = process.env.API_URL as string;
  const response = await fetch(`${apiUrl}/company/history`);

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

export async function getCertificate(): Promise<Certificate[]> {
  const response = await fetch(`${apiUrl}/certificates`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`);
  }

  if (!Array.isArray(data)) {
    console.error("API 응답이 배열이 아닙니다:", data);
    return [];
  }

  return data;
}

export async function getCompanyAddress() {
  const apiUrl = process.env.API_URL as string;
  const response = await fetch(`${apiUrl}/address/1`);
  return await response.json();
}
