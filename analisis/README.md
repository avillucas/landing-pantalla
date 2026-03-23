# Proyecto: Landing Page Pizarras Tresolcafe 65" - Sector Universitario

## 1. Visión General

Este proyecto consiste en el desarrollo de una Landing Page de alto rendimiento técnica y comercial, optimizada para la venta de Pizarras Interactivas Tresolcafe de 65 pulgadas. El sitio debe proyectar innovación, solidez institucional y facilidad de uso.

## 2. Especificaciones Técnicas a Destacar (Ficha Técnica)

El agente debe generar secciones específicas para los siguientes datos técnicos:

- **Modelo:** Tresolcafe 65" Profesional 4K.
- **Sistema:** Android 14 nativo con Google Play Store (EDLA Certified).
- **Hardware:** 4GB RAM / 32GB ROM.
- **Cámara IA:** Sensor integrado con **Human Tracking** (seguimiento de orador) y micrófonos con cancelación de eco.
- **Estructura:** **Soporte móvil motorizado** (incluido), regulable en altura vía control remoto.
- **Conectividad:** Wi-Fi Dual, Bluetooth y RJ45 (Ethernet).

## 3. Arquitectura del Sitio (Single Page)

- **Stack:** HTML5 / CSS3 / JavaScript Vanilla (Priorizar velocidad de carga < 2s).
- **Multimedia:** \* Implementar reproductor para `VID-20260303-WA0066(1).mp4`.
  - Atributos de video: `muted`, `playsinline`, `controls`.
- **SEO e Inteligencia Artificial:**
  - Etiquetas Meta: Descripción orientada a "Educación Híbrida" e "IA en el Aula".
  - Datos Estructurados: Incluir JSON-LD para `Product` y `FAQPage`.
- **Logística:** Resaltar "Envío a domicilio a todo el país" y "Descuentos por volumen para Facultades".

## 4. Embudo de Conversión e Integración GTM

El flujo de datos debe estar preparado para Google Tag Manager:

1. **Formulario de Contacto:** Campos de Nombre, Email Institucional y Cantidad (Selector: 1, 2-5, +5).
2. **Evento DataLayer:** Al hacer submit, disparar `event: 'form_submission_pizarra'`.
3. **Conversión WhatsApp:** Redirigir automáticamente tras el envío a:
   `https://wa.me/54911XXXXXXXX?text=Hola!%20Solicito%20presupuesto%20universitario%20por%20la%20pizarra%20Tresolcafe%2065`
4. **Botón Flotante:** Botón de WhatsApp persistente en la esquina inferior derecha.

## 5. Instrucciones de Despliegue (Google Cloud)

- **Entorno:** Google Cloud Storage (Static Website Hosting) o Firebase Hosting.
- **Archivos:** El agente debe asegurar que el `index.html` referencie correctamente los assets (videos e imágenes) en el bucket.
- **URL:** Generar y entregar la URL temporal de visualización.

---

**Nota para el Agente:** Mantener un tono profesional y corporativo. El objetivo es que un Decano o Director de IT sienta que está adquiriendo una solución integral, no solo una pantalla.
