import type { Gif } from '../../types/gif'
import { GifCard } from './GifCard'

interface GifGridProps {
  gifs: Gif[]
  onSelect: (gif: Gif) => void
}

export const GifGrid = ({ gifs, onSelect }: GifGridProps) => {
  return (
    <ul className="gif-grid">
      {gifs.map((gif) => (
        <li key={gif.id} className="gif-grid__item">
          <GifCard gif={gif} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  )
}
