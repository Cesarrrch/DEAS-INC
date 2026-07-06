import { z } from "zod";

export const step1Schema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, "Este campo es obligatorio")
    .min(5, "Escribe tu nombre completo (mínimo 5 letras)"),
  celular: z
    .string()
    .min(1, "Este campo es obligatorio")
    .transform((v) => v.replace(/[\s\-().]/g, ""))
    .refine((v) => /^\d{10}$/.test(v), "Ingresa un celular válido de 10 dígitos"),
  correo: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine(
      (v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      "Ingresa un correo válido"
    ),
  ciudad: z.string().trim().min(1, "Este campo es obligatorio"),
  empresa: z.string().trim().min(1, "Este campo es obligatorio"),
  creditoActivo: z.enum(["Sí", "No", "No sé"], {
    errorMap: () => ({ message: "Selecciona una opción" }),
  }),
});

export const step2Schema = z.object({
  nss: z
    .string()
    .min(1, "Este campo es obligatorio")
    .transform((v) => v.replace(/\s/g, ""))
    .refine((v) => /^\d{11}$/.test(v), "El NSS debe tener 11 números"),
  fechaNacimiento: z
    .string()
    .min(1, "Este campo es obligatorio")
    .refine((v) => !Number.isNaN(Date.parse(v)), "Ingresa una fecha válida"),
  consentimiento: z
    .boolean()
    .refine((v) => v === true, "Acepta el aviso de privacidad para continuar"),
});

export const utmSchema = z.object({
  source: z.string().optional().default(""),
  utm_source: z.string().optional().default(""),
  utm_medium: z.string().optional().default(""),
  utm_campaign: z.string().optional().default(""),
  utm_content: z.string().optional().default(""),
  utm_term: z.string().optional().default(""),
});

export const leadSchema = step1Schema.merge(step2Schema).merge(utmSchema);

export type Step1Values = z.input<typeof step1Schema>;
export type Step2Values = z.input<typeof step2Schema>;
export type LeadInput = z.input<typeof leadSchema>;
export type Lead = z.output<typeof leadSchema>;
