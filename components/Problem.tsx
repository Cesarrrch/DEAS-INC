import { HomeIcon } from "./icons";

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl rounded-3xl bg-gray-900 px-6 py-12 text-center text-white sm:px-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600">
          <HomeIcon className="h-7 w-7" />
        </span>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Tu casa no tiene que esperar meses para mejorar
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-300">
          Si quieres pintar, remodelar, arreglar detalles o mejorar tu
          vivienda, el crédito Mejoravit puede ayudarte. Nosotros te
          acompañamos para que el proceso sea más claro, rápido y fácil de
          entender.
        </p>
      </div>
    </section>
  );
}
