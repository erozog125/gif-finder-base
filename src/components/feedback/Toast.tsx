interface ToastProps {
  message: string | null
}

// Aviso flotante. Si no hay mensaje, no se renderiza nada.
export const Toast = ({ message }: ToastProps) => {
  if (!message) return null

  return (
    <div className="toast" role="status" aria-live="polite">
      {message}
    </div>
  )
}
