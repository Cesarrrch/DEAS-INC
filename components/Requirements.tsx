import { CheckIcon } from "./icons";

const requirements = [
  "Nombre completo",
  "Celular",
  "Empresa donde trabajas",
  "NSS (Número de Seguro Social)",
  "Fecha de nacimiento",
];

export default function Requirements() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl rounded-3xl border-2 border-dashed border-gray-200 bg-white p-8 sm:p-10">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900">
          Para empezar solo necesitas:
        </h2>
        <ul className="mx-auto mt-7 max-w-sm space-y-3">
          {requirements.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckIcon className="h-4 w-4" />
              </span>
              <span className="text-lg font-semibold text-gray-800">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-7 rounded-xl bg-amber-50 p-4 text-center font-medium text-amber-800">
          Los documentos se piden después, solo si tu solicitud puede avanzar.
        </p>
      </div>
    </section>
  );
}
