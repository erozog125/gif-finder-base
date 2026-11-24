import type { ChangeEvent, Ref } from 'react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onClear: () => void
  // React 19: `ref` llega como una prop normal (ya no se necesita forwardRef).
  ref?: Ref<HTMLInputElement>
}

export const SearchBar = ({ value, onChange, onClear, ref }: SearchBarProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)

  return (
    <div className="search-bar" role="search">
      <span className="search-bar__icon" aria-hidden="true">
        🔍
      </span>
      <input
        ref={ref}
        className="search-bar__input"
        type="search"
        placeholder="Buscar GIFs en GIPHY"
        aria-label="Buscar GIFs"
        value={value}
        onChange={handleChange}
      />
      {value && (
        <button className="search-bar__clear" type="button" onClick={onClear} aria-label="Limpiar búsqueda">
          ✕
        </button>
      )}
    </div>
  )
}
