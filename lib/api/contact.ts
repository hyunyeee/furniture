import { Contact } from "@/types/contact";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function postContact(contactData: Contact) {
  await fetch(`${apiUrl}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });
}
