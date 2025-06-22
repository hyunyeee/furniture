import Link from "next/link";

type Props = {
  title: string;
  footer: { label: string; href: string };
  children: React.ReactNode;
};

export default function FormCard({ title, footer, children }: Props) {
  return (
    <div className="mt-[60px] mb-[30px] flex w-[50%] max-w-[550px] flex-col justify-center gap-4 rounded-xl bg-white/40 px-6 py-6 shadow-lg backdrop-blur-md">
      <h1 className="text-center text-2xl font-semibold">{title}</h1>
      <div>{children}</div>
      <Link
        className="text-primary-green text-center text-sm font-semibold"
        href={footer.href}
      >
        {footer.label} &gt;
      </Link>
    </div>
  );
}
