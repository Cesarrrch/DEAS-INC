const faqs = [
  {
    q: "¿Cuál es la tasa de interés?",
    a: "La tasa es del 11% anual.",
  },
  {
    q: "¿Me descuentan directamente de la nómina?",
    a: "Sí, el pago se descuenta vía nómina.",
  },
  {
    q: "¿Cuánto tarda el trámite?",
    a: "Aproximadamente 10 días desde que se entregan los documentos, sujeto a validación y autorización.",
  },
  {
    q: "¿Necesito ir a oficinas?",
    a: "La mayor parte del proceso se puede iniciar en línea. Normalmente solo se requiere una cita.",
  },
  {
    q: "¿Qué documentos necesito si avanzo?",
    a: "INE, acta de nacimiento, CURP, estado de cuenta a tu nombre y comprobante de domicilio.",
  },
  {
    q: "¿Puedo liquidar el crédito antes?",
    a: "Sí.",
  },
  {
    q: "¿Cómo sé cuánto tengo disponible?",
    a: "Nosotros iniciamos la revisión de precalificación con tu NSS y fecha de nacimiento.",
  },
  {
    q: "¿Qué pasa si ya tengo otro crédito con Infonavit?",
    a: "Si ya tienes un crédito activo con Infonavit, no se puede sacar otro al mismo tiempo.",
  },
  {
    q: "¿Cuánto cobran por el trámite?",
    a: "El costo del trámite es del 20%.",
  },
  {
    q: "¿El dinero cae directo a mi cuenta?",
    a: "Sí, si el crédito es autorizado, el dinero se deposita directo a tu cuenta.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl bg-white shadow-sm ring-1 ring-gray-100"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-bold text-gray-900 [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gray-100 text-gray-500 transition group-open:rotate-45 group-open:bg-red-50 group-open:text-red-600">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-5 text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
