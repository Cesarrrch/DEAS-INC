import CtaButton from "./CtaButton";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl rounded-3xl bg-red-600 px-6 py-12 text-center text-white sm:px-12">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Empieza tu solicitud hoy
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-red-100">
          Llena tus datos y revisamos si puedes avanzar con tu crédito
          Mejoravit.
        </p>
        <div className="mt-8">
          <a
            href="#solicitud"
            className="inline-flex w-full items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-red-600 shadow-lg transition hover:bg-red-50 active:scale-[0.98] sm:w-auto"
          >
            Iniciar mi solicitud
          </a>
        </div>
        <p className="mt-4 text-sm text-red-200">
          Sujeto a precalificación, validación y autorización.
        </p>
      </div>
    </section>
  );
}
