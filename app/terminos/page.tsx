import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos y condiciones | Mejoravit Chihuahua",
  description:
    "Términos y condiciones del servicio de asesoría y acompañamiento para solicitudes de crédito Mejoravit.",
};

export default function Terminos() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Términos y condiciones
        </h1>
        <div className="mt-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              1. Naturaleza del servicio
            </h2>
            <p className="mt-2 leading-relaxed">
              Este sitio ofrece asesoría y acompañamiento independiente para
              solicitudes de crédito Mejoravit. No somos Infonavit ni una
              entidad gubernamental. La autorización final de cualquier
              crédito depende de las instituciones correspondientes.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              2. Sin garantía de aprobación
            </h2>
            <p className="mt-2 leading-relaxed">
              Todo el proceso está sujeto a precalificación, validación y
              autorización. La asesoría no garantiza la aprobación del
              crédito. Los tiempos, montos y condiciones pueden variar según
              cada caso y las políticas vigentes de las instituciones.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              3. Uso de la información
            </h2>
            <p className="mt-2 leading-relaxed">
              La información que proporciones en el formulario se utiliza
              únicamente para revisar tu precalificación y dar seguimiento a
              tu solicitud, conforme a nuestro{" "}
              <Link
                href="/aviso-de-privacidad"
                className="font-semibold text-red-600 underline"
              >
                aviso de privacidad
              </Link>
              .
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              4. Costo del servicio
            </h2>
            <p className="mt-2 leading-relaxed">
              El costo del trámite de asesoría es del 20%. Cualquier costo se
              informa con claridad antes de que decidas continuar con el
              proceso.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              5. Responsabilidad
            </h2>
            <p className="mt-2 leading-relaxed">
              La información publicada en este sitio es de carácter
              informativo y puede actualizarse sin previo aviso. No nos
              hacemos responsables por decisiones tomadas únicamente con base
              en la información publicada, sin la revisión personalizada de un
              asesor.
            </p>
          </section>
          <p className="text-sm text-gray-500">
            Última actualización: julio de 2026.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
