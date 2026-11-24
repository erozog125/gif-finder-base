import type { Gif } from '../../types/gif'

interface GifCardProps {
  gif: Gif
  onSelect: (gif: Gif) => void
}

export const GifCard = ({ gif, onSelect }: GifCardProps) => {
  return (
    <button className="gif-card" type="button" onClick={() => onSelect(gif)} title={gif.title}>
      <img
        className="gif-card__image"
        src={gif.previewUrl}
        alt={gif.title}
        width={gif.width}
        height={gif.height}
        loading="lazy"
      />
    </button>
  )
}
