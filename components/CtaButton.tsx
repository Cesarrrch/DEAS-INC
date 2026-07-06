import Link from "next/link";

type CtaButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CtaButton({ children, className = "" }: CtaButtonProps) {
  return (
    <Link
      href="#solicitud"
      className={`inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-700 active:scale-[0.98] sm:w-auto ${className}`}
    >
      {children}
    </Link>
  );
}
