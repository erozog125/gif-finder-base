interface InstallButtonProps {
  onInstall: () => void
  compact?: boolean // en el encabezado: en celulares solo se ve el ícono
}

// Botón PRESENTACIONAL: no sabe nada de PWA, solo avisa cuando lo tocan.
export const InstallButton = ({ onInstall, compact = false }: InstallButtonProps) => {
  return (
    <button
      type="button"
      className={`button button--install ${compact ? 'button--compact' : ''}`}
      onClick={onInstall}
      aria-label="Descargar app"
    >
      <span aria-hidden="true">📲</span>
      <span className="button__label">Descargar app</span>
    </button>
  )
}
