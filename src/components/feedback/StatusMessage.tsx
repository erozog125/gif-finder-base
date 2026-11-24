interface StatusMessageProps {
  variant: 'error' | 'empty'
  title: string
  description?: string
  actionLabel?: string
  onAction?: () => void
}

// Mensaje reutilizable para "sin resultados" y "error".
export const StatusMessage = ({ variant, title, description, actionLabel, onAction }: StatusMessageProps) => {
  const icon = variant === 'error' ? '⚠️' : '🫥'

  return (
    <div className={`status status--${variant}`} role={variant === 'error' ? 'alert' : 'status'}>
      <span className="status__icon" aria-hidden="true">
        {icon}
      </span>
      <h2 className="status__title">{title}</h2>
      {description && <p className="status__description">{description}</p>}
      {actionLabel && onAction && (
        <button className="button button--primary" type="button" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  )
}
