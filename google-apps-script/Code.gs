/**
 * Webhook de Google Apps Script para recibir solicitudes de la landing
 * Mejoravit y guardarlas como filas en Google Sheets.
 *
 * CÓMO CONFIGURARLO (3 minutos):
 * 1. Abre la hoja "Solicitudes Mejoravit Chihuahua" en Google Sheets.
 * 2. Ve a Extensiones → Apps Script.
 * 3. Borra el contenido y pega este archivo completo. Guarda (Ctrl+S).
 * 4. Haz clic en "Implementar" → "Nueva implementación".
 * 5. Tipo: "Aplicación web".
 *    - Ejecutar como: Tú (tu cuenta).
 *    - Quién tiene acceso: "Cualquier usuario" (necesario para que el
 *      servidor de la landing pueda hacer POST).
 * 6. Autoriza el script cuando lo pida, copia la URL de la aplicación web
 *    (termina en /exec) y ponla en la variable de entorno
 *    GOOGLE_SCRIPT_WEBHOOK_URL en Vercel.
 *
 * El script escribe en la primera pestaña de la hoja. Si la fila de
 * encabezados no existe, se crea automáticamente.
 */

var HEADERS = [
  "Fecha y hora",
  "Nombre completo",
  "Celular",
  "Correo",
  "Ciudad",
  "Empresa / lugar de trabajo",
  "Crédito Infonavit activo",
  "NSS",
  "Fecha de nacimiento",
  "Aceptó aviso de privacidad",
  "Fuente / campaña",
  "UTM source",
  "UTM medium",
  "UTM campaign",
  "UTM content",
  "UTM term",
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      data.fechaHora || new Date().toLocaleString("es-MX"),
      data.nombre || "",
      "'" + (data.celular || ""),
      data.correo || "",
      data.ciudad || "",
      data.empresa || "",
      data.creditoActivo || "",
      "'" + (data.nss || ""),
      data.fechaNacimiento || "",
      data.aceptoAviso || "",
      data.source || "",
      data.utm_source || "",
      data.utm_medium || "",
      data.utm_campaign || "",
      data.utm_content || "",
      data.utm_term || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
