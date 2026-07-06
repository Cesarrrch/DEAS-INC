import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso de privacidad | Mejoravit Chihuahua",
  description:
    "Aviso de privacidad sobre el tratamiento de tus datos personales para la revisión de precalificación de crédito Mejoravit.",
};

export default function AvisoDePrivacidad() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Aviso de privacidad
        </h1>
        <div className="prose-sm mt-8 space-y-6 text-gray-700 sm:prose-base">
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              1. Responsable del tratamiento de datos
            </h2>
            <p className="mt-2 leading-relaxed">
              Este sitio es operado por asesores independientes que ofrecen
              acompañamiento en solicitudes de crédito Mejoravit en Chihuahua
              (en adelante, “nosotros”). Somos responsables del tratamiento de
              los datos personales que nos proporcionas a través del
              formulario de solicitud.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              2. Datos que recabamos
            </h2>
            <p className="mt-2 leading-relaxed">
              A través del formulario recabamos: nombre completo, número de
              celular, correo electrónico (opcional), ciudad, empresa o lugar
              de trabajo, situación de crédito Infonavit, Número de Seguro
              Social (NSS) y fecha de nacimiento.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              3. Finalidad del tratamiento
            </h2>
            <p className="mt-2 leading-relaxed">
              Tus datos se utilizan exclusivamente para: (a) revisar tu
              precalificación para un crédito Mejoravit; (b) contactarte para
              informarte el resultado y los siguientes pasos; y (c) darte
              acompañamiento durante el proceso de solicitud si decides
              continuar.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              4. Datos sensibles
            </h2>
            <p className="mt-2 leading-relaxed">
              El NSS y la fecha de nacimiento se consideran datos personales
              que requieren protección especial. Estos datos se transmiten de
              forma cifrada (HTTPS), no se muestran de vuelta en pantalla, no
              se almacenan en tu navegador y solo se usan para iniciar la
              revisión de precalificación.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              5. Transferencia de datos
            </h2>
            <p className="mt-2 leading-relaxed">
              No vendemos ni compartimos tus datos con terceros para fines
              distintos a la revisión y gestión de tu solicitud de crédito.
              Tus datos pueden compartirse con las instituciones
              correspondientes únicamente como parte del proceso de solicitud.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              6. Derechos ARCO
            </h2>
            <p className="mt-2 leading-relaxed">
              Puedes solicitar el acceso, rectificación, cancelación u
              oposición al tratamiento de tus datos en cualquier momento
              escribiéndonos al correo de contacto publicado en este sitio.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              7. Cambios al aviso
            </h2>
            <p className="mt-2 leading-relaxed">
              Este aviso puede actualizarse. La versión vigente estará siempre
              disponible en esta página.
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
