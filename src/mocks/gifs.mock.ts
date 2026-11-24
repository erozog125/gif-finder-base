import type { Gif } from '../types/gif'

// Datos de prueba para ver la interfaz ANTES de conectar la API.
// Cuando useGifs funcione, este archivo se puede borrar.

const COLORS = ['#00a884', '#53bdeb', '#ffb703', '#ef476f', '#8338ec', '#06d6a0']
const HEIGHTS = [150, 200, 120, 180, 220, 140]

const createPlaceholder = (index: number): Gif => {
  const width = 200
  const height = HEIGHTS[index % HEIGHTS.length]
  const color = COLORS[index % COLORS.length]
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="${color}"/><text x="50%" y="50%" fill="#fff" font-family="Arial" font-size="22" font-weight="700" text-anchor="middle" dominant-baseline="middle">GIF ${index + 1}</text></svg>`
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`

  return {
    id: `mock-${index + 1}`,
    title: `GIF de prueba ${index + 1}`,
    url: dataUrl,
    previewUrl: dataUrl,
    width,
    height,
  }
}

export const MOCK_GIFS: Gif[] = Array.from({ length: 12 }, (_, index) => createPlaceholder(index))
