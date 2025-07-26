"use client";

import { postContact } from "@/lib/api/contact";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { contactFields } from "@/constants/contactField";
import { Contact } from "@/types/contact";

export default function ContactPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const contact: Contact = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };
    await postContact(contact);
  }

  const content = { name: "message", type: "text", placeholder: "문의 내용" };

  return (
    <div className="my-[130px] px-4">
      <h1 className="text-center text-2xl font-semibold">문의하기</h1>

      <form
        onSubmit={handleSubmit}
        className="mt-[50px] flex flex-col items-center gap-10"
      >
        <div className="flex w-full max-w-[600px] flex-col gap-4">
          {contactFields.map(({ name, type, placeholder }, index) => (
            <Input
              autoFocus={index === 0}
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
            />
          ))}

          <div className="h-[2px] w-full bg-[#ccc]" />

          <TextArea name={content.name} placeholder={content.placeholder} />
        </div>

        <button className="bg-primary-green w-full max-w-[450px] cursor-pointer rounded-xl p-4 text-white">
          제출하기
        </button>
      </form>
    </div>
  );
}
