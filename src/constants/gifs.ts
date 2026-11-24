// Valores fijos de la app. Tenerlos aquí evita "números mágicos" en el código.

export const GIFS_LIMIT = 24
export const DEBOUNCE_DELAY_MS = 500
export const TOAST_DURATION_MS = 2000

// Atajos tipo WhatsApp. Un valor vacío ('') significa "Tendencias".
export const QUICK_FILTERS = [
  { label: '🔥 Tendencias', value: '' },
  { label: '👋 Hola', value: 'hola' },
  { label: '🙏 Gracias', value: 'gracias' },
  { label: '😂 Jaja', value: 'jaja' },
  { label: '👏 Aplausos', value: 'aplausos' },
  { label: '🎉 Feliz cumpleaños', value: 'feliz cumpleaños' },
  { label: '👍 Sí', value: 'sí' },
  { label: '🙅 No', value: 'no' },
] as const
