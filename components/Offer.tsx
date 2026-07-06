import {
  CalculatorIcon,
  ClipboardIcon,
  DocumentIcon,
  HandshakeIcon,
} from "./icons";

const cards = [
  {
    icon: ClipboardIcon,
    title: "Revisamos tu precalificación",
    text: "Con tus datos iniciamos la revisión para saber si puedes avanzar.",
  },
  {
    icon: CalculatorIcon,
    title: "Te explicamos cuánto podrías recibir",
    text: "Te decimos con claridad el monto que podrías obtener.",
  },
  {
    icon: DocumentIcon,
    title: "Te guiamos con los documentos",
    text: "Te indicamos exactamente qué necesitas y cómo entregarlo.",
  },
  {
    icon: HandshakeIcon,
    title: "Te acompañamos hasta el avance del trámite",
    text: "No estás solo: seguimos tu solicitud paso a paso contigo.",
  },
];

export default function Offer() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nosotros te ayudamos con el proceso
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tú solo llenas la solicitud. Nosotros te guiamos en todo lo demás.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <card.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {card.title}
              </h3>
              <p className="mt-2 text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
