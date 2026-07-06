# Mejoravit Chihuahua — Landing Page

Landing page profesional, minimalista y enfocada en conversión para captar solicitudes de crédito **Mejoravit / Infonavit** en Chihuahua. Las solicitudes se guardan automáticamente en Google Sheets.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **React Hook Form** + **Zod** (formulario de 2 pasos con validación)
- **Google Apps Script** como webhook hacia Google Sheets
- Deploy listo para **Vercel**

## Estructura

```
app/
  page.tsx                    # Landing principal
  layout.tsx                  # Layout global (fuente Inter, metadatos)
  api/submit-lead/route.ts    # API route: recibe la solicitud y la manda a Google Sheets
  aviso-de-privacidad/        # Página de aviso de privacidad
  terminos/                   # Página de términos y condiciones
components/
  Hero.tsx, Problem.tsx, Offer.tsx, Benefits.tsx, HowItWorks.tsx,
  Requirements.tsx, LeadForm.tsx, FAQ.tsx, FinalCTA.tsx, Header.tsx, Footer.tsx
lib/
  leadSchema.ts               # Schemas de validación Zod (cliente + servidor)
google-apps-script/
  Code.gs                     # Script para pegar en Google Apps Script
```

## Configuración de Google Sheets (paso a paso)

1. Crea una hoja nueva en [Google Sheets](https://sheets.new).
2. Ve a **Extensiones → Apps Script**.
3. Borra el contenido y pega todo el archivo [`google-apps-script/Code.gs`](google-apps-script/Code.gs).
4. Haz clic en **Implementar → Nueva implementación**.
5. Selecciona tipo **Aplicación web** con:
   - **Ejecutar como:** tu cuenta.
   - **Quién tiene acceso:** *Cualquier usuario*.
6. Autoriza el script y copia la **URL de la aplicación web** (termina en `/exec`).
7. Esa URL es el valor de `GOOGLE_SCRIPT_WEBHOOK_URL`.

La pestaña `Solicitudes` y los encabezados se crean solos con la primera solicitud. Columnas: fecha y hora (zona horaria de Chihuahua), nombre, celular, correo, ciudad, empresa, crédito Infonavit activo, NSS, fecha de nacimiento, aceptó aviso, fuente/campaña y los 5 parámetros UTM.

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # y llena GOOGLE_SCRIPT_WEBHOOK_URL
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Deploy en Vercel

1. Importa este repositorio en [Vercel](https://vercel.com/new) (framework detectado: Next.js, sin configuración extra).
2. En **Settings → Environment Variables** agrega:

| Variable | Valor |
|---|---|
| `GOOGLE_SCRIPT_WEBHOOK_URL` | URL `/exec` de tu Apps Script |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (ej. `https://tudominio.com`) |

3. Haz deploy. Listo para captar leads.

## Captura de campañas (UTM)

Si la visita llega con query params, se guardan junto con la solicitud:

```
https://tudominio.com/?utm_source=facebook&utm_medium=cpc&utm_campaign=mejoravit&utm_content=ad1&utm_term=credito&source=fb
```

## Seguridad del NSS

El NSS es dato sensible y se maneja así:

- Solo viaja por HTTPS del navegador → API route de Next.js → webhook de Apps Script.
- **No** se guarda en `localStorage` ni cookies.
- **No** se muestra de vuelta en pantalla después de enviar (el formulario se limpia).
- **No** se imprime en consola ni en logs del servidor (los errores se manejan sin registrar el payload).
- La URL del webhook vive solo en el servidor (variable de entorno, nunca expuesta al frontend).
