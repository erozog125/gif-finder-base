// Modelo de dominio: la forma en que NUESTRA app entiende un GIF.
// Los componentes solo conocen este tipo, nunca la respuesta cruda de Giphy.
export interface Gif {
  id: string
  title: string
  url: string // URL de la animación (para copiar/compartir)
  previewUrl: string // versión liviana para la cuadrícula
  width: number
  height: number
}
