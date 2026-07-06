import CtaButton from "./CtaButton";
import { CheckIcon } from "./icons";

const bullets = [
  "Hasta $170,000",
  "Tasa 11% anual",
  "Descuento vía nómina",
  "Depósito directo a tu cuenta",
  "Precalificación con NSS y fecha de nacimiento",
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-red-50/60 to-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-800">
            Crédito para mejorar tu casa
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Solicita tu crédito{" "}
            <span className="text-red-600">Mejoravit</span> en Chihuahua
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Te ayudamos a revisar si puedes acceder a un crédito para mejorar,
            remodelar o arreglar tu casa, con un proceso claro y acompañado.
          </p>

          <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="font-semibold text-gray-800">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <CtaButton>Revisar si califico</CtaButton>
            <p className="mt-3 text-sm text-gray-500">
              Sujeto a precalificación, validación y autorización.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
