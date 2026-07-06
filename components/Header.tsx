import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-lg font-black text-white">
            M
          </span>
          <span className="text-lg font-bold tracking-tight text-gray-900">
            Mejoravit Chihuahua
          </span>
        </Link>
        <Link
          href="#solicitud"
          className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-700 sm:px-6 sm:text-base"
        >
          Empezar solicitud
        </Link>
      </div>
    </header>
  );
}
