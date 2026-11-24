interface LoaderProps {
  items?: number
}

// Esqueleto de carga: bloques grises animados mientras llegan los GIFs.
export const Loader = ({ items = 12 }: LoaderProps) => {
  return (
    <ul className="gif-grid" aria-busy="true" aria-label="Cargando GIFs">
      {Array.from({ length: items }, (_, index) => (
        <li key={index} className="gif-grid__item">
          <div className={`skeleton skeleton--${(index % 3) + 1}`} />
        </li>
      ))}
    </ul>
  )
}
