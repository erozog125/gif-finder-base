import { AppHeader } from '../components/layout/AppHeader'
import { PoweredByGiphy } from '../components/layout/PoweredByGiphy'
import { GifGrid } from '../components/gifs/GifGrid'
import { QuickFilters } from '../components/gifs/QuickFilters'
import { SearchBar } from '../components/gifs/SearchBar'
import { QUICK_FILTERS } from '../constants/gifs'
import { MOCK_GIFS } from '../mocks/gifs.mock'
import type { Gif } from '../types/gif'

// 📌 PASO 16 — Página de GIFs (componente CONTENEDOR)
// Hoy muestra DATOS DE PRUEBA (MOCK_GIFS). Tu tarea es conectarla de verdad.
// 📌 PASO 21 — Aquí también irá el botón "Descargar app" del encabezado.

export const GifsPage = () => {
  const handleSelectGif = (gif: Gif) => {
    console.log('GIF seleccionado:', gif.title)
  }

  return (
    <div className="gifs-page">
      <AppHeader userName="Invitado" onLogout={() => {}} />

      <div className="gifs-page__toolbar">
        <SearchBar value="" onChange={() => {}} onClear={() => {}} />
        <QuickFilters filters={QUICK_FILTERS} activeValue="" onSelect={() => {}} />
      </div>

      <main className="gifs-page__content">
        <h1 className="section-title">Tendencias</h1>
        <GifGrid gifs={MOCK_GIFS} onSelect={handleSelectGif} />
      </main>

      <PoweredByGiphy />
    </div>
  )
}
