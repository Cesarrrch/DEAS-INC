const steps = [
  {
    number: "1",
    title: "Llena tu solicitud",
    text: "Déjanos tus datos básicos y de precalificación.",
  },
  {
    number: "2",
    title: "Revisamos tu información",
    text: "Con tu NSS y fecha de nacimiento podemos iniciar la revisión.",
  },
  {
    number: "3",
    title: "Te decimos los siguientes pasos",
    text: "Si puedes continuar, te indicamos qué documentos necesitas.",
  },
  {
    number: "4",
    title: "Te acompañamos en el proceso",
    text: "Te guiamos para que el trámite sea más claro y ordenado.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            ¿Cómo funciona?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Un proceso simple, en 4 pasos.
          </p>
        </div>
        <ol className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-red-600 text-lg font-extrabold text-white">
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-gray-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
