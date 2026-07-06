import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-base font-black text-white">
              M
            </span>
            <span className="font-bold text-gray-900">
              Mejoravit Chihuahua
            </span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-600">
            <Link
              href="/aviso-de-privacidad"
              className="hover:text-red-600 hover:underline"
            >
              Aviso de privacidad
            </Link>
            <Link href="/terminos" className="hover:text-red-600 hover:underline">
              Términos y condiciones
            </Link>
          </nav>
          <div className="max-w-2xl space-y-3 text-xs leading-relaxed text-gray-500">
            <p>
              Sujeto a precalificación, validación y autorización. Tiempos,
              montos y condiciones pueden variar. La asesoría no garantiza
              aprobación del crédito.
            </p>
            <p>
              Este sitio ofrece asesoría y acompañamiento independiente para
              solicitudes de crédito. No somos Infonavit ni una entidad
              gubernamental. La autorización final depende de las
              instituciones correspondientes.
            </p>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Mejoravit Chihuahua. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
