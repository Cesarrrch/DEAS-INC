import CtaButton from "./CtaButton";
import { CheckCircleIcon } from "./icons";

const benefits = [
  { title: "Crédito de hasta $170,000", highlight: true },
  { title: "Tasa del 11% anual", highlight: true },
  { title: "Pago vía nómina", highlight: false },
  { title: "Depósito directo a tu cuenta", highlight: false },
  { title: "Posibilidad de liquidar antes", highlight: false },
  { title: "Proceso acompañado por asesores", highlight: false },
];

export default function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          ¿Qué puedes obtener?
        </h2>
      </div>
      <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className={`flex items-center gap-3 rounded-2xl p-5 ring-1 ${
              benefit.highlight
                ? "bg-amber-50 ring-amber-200"
                : "bg-white ring-gray-100 shadow-sm"
            }`}
          >
            <span
              className={`flex-none ${
                benefit.highlight ? "text-amber-600" : "text-green-600"
              }`}
            >
              <CheckCircleIcon className="h-7 w-7" />
            </span>
            <span className="text-base font-bold text-gray-900">
              {benefit.title}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <CtaButton>Revisar si califico</CtaButton>
        <p className="mt-3 text-sm text-gray-500">
          Sujeto a precalificación, validación y autorización.
        </p>
      </div>
    </section>
  );
}
