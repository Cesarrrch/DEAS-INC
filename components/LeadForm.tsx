"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { step1Schema, step2Schema } from "@/lib/leadSchema";
import { CheckCircleIcon, ShieldIcon } from "./icons";

const formSchema = step1Schema.merge(step2Schema);

type FormInput = z.input<typeof formSchema>;
type FormOutput = z.output<typeof formSchema>;

type UtmData = {
  source: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
};

const STEP1_FIELDS = [
  "nombre",
  "celular",
  "correo",
  "ciudad",
  "empresa",
  "creditoActivo",
] as const;

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20";

const labelClass = "mb-1.5 block text-sm font-bold text-gray-800";

function ErrorText({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm font-medium text-red-600">{message}</p>;
}

export default function LeadForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const utmRef = useRef<UtmData>({
    source: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    utmRef.current = {
      source: params.get("source") ?? "",
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      utm_content: params.get("utm_content") ?? "",
      utm_term: params.get("utm_term") ?? "",
    };
  }, []);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm<FormInput, unknown, FormOutput>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      nombre: "",
      celular: "",
      correo: "",
      ciudad: "Chihuahua",
      empresa: "",
      nss: "",
      fechaNacimiento: "",
      consentimiento: false,
    },
  });

  const goToStep2 = async () => {
    const valid = await trigger(STEP1_FIELDS, { shouldFocus: true });
    if (valid) {
      setStep(2);
      document
        .getElementById("solicitud")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const onSubmit = async (data: FormOutput) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...utmRef.current }),
      });
      if (!res.ok) throw new Error("request_failed");
      reset();
      setStep(1);
      setStatus("success");
      document
        .getElementById("solicitud")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="solicitud" className="scroll-mt-20 bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-lg rounded-3xl bg-white p-8 text-center shadow-xl sm:p-10">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircleIcon className="h-9 w-9" />
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-gray-900">
              Solicitud recibida
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Gracias. Recibimos tus datos correctamente. Un asesor revisará tu
              precalificación y te indicará los siguientes pasos.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Recuerda que el proceso está sujeto a validación y autorización.
            </p>
            <Link
              href="#"
              onClick={() => setStatus("idle")}
              className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-red-700 sm:w-auto"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="solicitud" className="scroll-mt-20 bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-lg">
          <div className="text-center text-white">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Llena tu solicitud
            </h2>
            <p className="mt-3 text-lg text-gray-300">
              Es rápido y sencillo. Un asesor revisará tu información.
            </p>
          </div>

          <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl sm:p-8">
            {/* Progreso */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="text-red-600">Paso {step} de 2</span>
                <span className="text-gray-500">
                  {step === 1 ? "Datos básicos" : "Precalificación"}
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-red-600 transition-all duration-300"
                  style={{ width: step === 1 ? "50%" : "100%" }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Paso 1: Datos básicos */}
              <div className={step === 1 ? "space-y-5" : "hidden"}>
                <div>
                  <label htmlFor="nombre" className={labelClass}>
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    autoComplete="name"
                    placeholder="Ej. Juan Pérez García"
                    className={inputClass}
                    {...register("nombre")}
                  />
                  <ErrorText message={errors.nombre?.message} />
                </div>

                <div>
                  <label htmlFor="celular" className={labelClass}>
                    Celular
                  </label>
                  <input
                    id="celular"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="Ej. 614 123 4567"
                    className={inputClass}
                    {...register("celular")}
                  />
                  <ErrorText message={errors.celular?.message} />
                </div>

                <div>
                  <label htmlFor="correo" className={labelClass}>
                    Correo{" "}
                    <span className="font-normal text-gray-400">(opcional)</span>
                  </label>
                  <input
                    id="correo"
                    type="email"
                    autoComplete="email"
                    placeholder="Ej. juan@correo.com"
                    className={inputClass}
                    {...register("correo")}
                  />
                  <ErrorText message={errors.correo?.message} />
                </div>

                <div>
                  <label htmlFor="ciudad" className={labelClass}>
                    Ciudad
                  </label>
                  <input
                    id="ciudad"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="Ej. Chihuahua"
                    className={inputClass}
                    {...register("ciudad")}
                  />
                  <ErrorText message={errors.ciudad?.message} />
                </div>

                <div>
                  <label htmlFor="empresa" className={labelClass}>
                    Empresa / lugar de trabajo
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    autoComplete="organization"
                    placeholder="Ej. Maquiladora XYZ"
                    className={inputClass}
                    {...register("empresa")}
                  />
                  <ErrorText message={errors.empresa?.message} />
                </div>

                <fieldset>
                  <legend className={labelClass}>
                    ¿Tienes crédito Infonavit activo?
                  </legend>
                  <div className="grid grid-cols-3 gap-2">
                    {(["Sí", "No", "No sé"] as const).map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center justify-center rounded-xl border border-gray-300 px-3 py-3.5 text-base font-semibold text-gray-700 transition has-[:checked]:border-red-600 has-[:checked]:bg-red-50 has-[:checked]:text-red-700"
                      >
                        <input
                          type="radio"
                          value={option}
                          className="sr-only"
                          {...register("creditoActivo")}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  <ErrorText message={errors.creditoActivo?.message} />
                </fieldset>

                <button
                  type="button"
                  onClick={goToStep2}
                  className="w-full rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-700 active:scale-[0.98]"
                >
                  Continuar
                </button>
              </div>

              {/* Paso 2: Precalificación */}
              <div className={step === 2 ? "space-y-5" : "hidden"}>
                <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                  <span className="mt-0.5 flex-none text-green-600">
                    <ShieldIcon className="h-5 w-5" />
                  </span>
                  <p className="text-sm text-gray-600">
                    Tus datos se envían de forma segura y solo se usan para
                    revisar tu precalificación.
                  </p>
                </div>

                <div>
                  <label htmlFor="nss" className={labelClass}>
                    Número de Seguro Social (NSS)
                  </label>
                  <input
                    id="nss"
                    type="text"
                    inputMode="numeric"
                    maxLength={11}
                    autoComplete="off"
                    placeholder="11 dígitos"
                    className={inputClass}
                    {...register("nss")}
                  />
                  <ErrorText message={errors.nss?.message} />
                </div>

                <div>
                  <label htmlFor="fechaNacimiento" className={labelClass}>
                    Fecha de nacimiento
                  </label>
                  <input
                    id="fechaNacimiento"
                    type="date"
                    autoComplete="bday"
                    className={inputClass}
                    {...register("fechaNacimiento")}
                  />
                  <ErrorText message={errors.fechaNacimiento?.message} />
                </div>

                <div>
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 p-4">
                    <input
                      type="checkbox"
                      className="mt-1 h-5 w-5 flex-none accent-red-600"
                      {...register("consentimiento")}
                    />
                    <span className="text-sm text-gray-700">
                      Acepto el{" "}
                      <Link
                        href="/aviso-de-privacidad"
                        target="_blank"
                        className="font-semibold text-red-600 underline"
                      >
                        aviso de privacidad
                      </Link>{" "}
                      y autorizo el uso de mis datos para revisar mi
                      precalificación.
                    </span>
                  </label>
                  <ErrorText message={errors.consentimiento?.message} />
                </div>

                {status === "error" && (
                  <p className="rounded-xl bg-red-50 p-4 text-center text-sm font-semibold text-red-700">
                    No pudimos enviar tu solicitud. Intenta de nuevo.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Enviando…" : "Enviar solicitud"}
                </button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full rounded-xl px-8 py-3 text-base font-semibold text-gray-500 transition hover:text-gray-700"
                >
                  ← Regresar
                </button>
              </div>
            </form>

            <p className="mt-5 text-center text-xs text-gray-400">
              Sujeto a precalificación, validación y autorización.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
