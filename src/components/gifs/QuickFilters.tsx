interface QuickFilter {
  label: string
  value: string
}

interface QuickFiltersProps {
  filters: readonly QuickFilter[]
  activeValue: string
  onSelect: (value: string) => void
}

// Atajos horizontales tipo WhatsApp ("Hola", "Gracias", "Jaja"...).
export const QuickFilters = ({ filters, activeValue, onSelect }: QuickFiltersProps) => {
  return (
    <nav className="quick-filters" aria-label="Búsquedas rápidas">
      {filters.map((filter) => {
        const isActive = filter.value === activeValue.trim().toLowerCase()

        return (
          <button
            key={filter.label}
            type="button"
            className={`chip ${isActive ? 'chip--active' : ''}`}
            aria-pressed={isActive}
            onClick={() => onSelect(filter.value)}
          >
            {filter.label}
          </button>
        )
      })}
    </nav>
  )
}
