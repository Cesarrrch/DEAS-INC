import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/leadSchema";

export const runtime = "nodejs";

const GENERIC_ERROR = {
  ok: false,
  message: "No pudimos enviar tu solicitud. Intenta de nuevo.",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Revisa los datos e intenta de nuevo." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SCRIPT_WEBHOOK_URL;
    if (!webhookUrl) {
      // Configuración faltante: no exponemos detalles al cliente.
      return NextResponse.json(GENERIC_ERROR, { status: 500 });
    }

    const lead = parsed.data;
    const fechaHora = new Intl.DateTimeFormat("es-MX", {
      timeZone: "America/Chihuahua",
      dateStyle: "short",
      timeStyle: "medium",
    }).format(new Date());

    // El orden de estas llaves define el orden de columnas en Google Sheets.
    const row = {
      fechaHora,
      nombre: lead.nombre,
      celular: lead.celular,
      correo: lead.correo ?? "",
      ciudad: lead.ciudad,
      empresa: lead.empresa,
      creditoActivo: lead.creditoActivo,
      nss: lead.nss,
      fechaNacimiento: lead.fechaNacimiento,
      aceptoAviso: lead.consentimiento ? "Sí" : "No",
      source: lead.source,
      utm_source: lead.utm_source,
      utm_medium: lead.utm_medium,
      utm_campaign: lead.utm_campaign,
      utm_content: lead.utm_content,
      utm_term: lead.utm_term,
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
      // Google Apps Script responde con redirect 302; fetch lo sigue por defecto.
    });

    if (!response.ok) {
      return NextResponse.json(GENERIC_ERROR, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    // Nunca registramos el payload: contiene datos sensibles (NSS).
    return NextResponse.json(GENERIC_ERROR, { status: 500 });
  }
}
