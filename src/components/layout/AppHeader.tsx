import { InstallButton } from '../pwa/InstallButton'

interface AppHeaderProps {
  userName: string
  onLogout: () => void
  onInstall?: () => void // opcional: si llega, mostramos "Descargar app"
}

export const AppHeader = ({ userName, onLogout, onInstall }: AppHeaderProps) => {
  const initial = userName.charAt(0).toUpperCase()

  return (
    <header className="app-header">
      <div className="app-header__brand">
        <span className="logo" aria-hidden="true">
          GIF
        </span>
        <span className="app-header__title">GifFinder</span>
      </div>

      <div className="app-header__user">
        {onInstall && <InstallButton onInstall={onInstall} compact />}
        <span className="avatar" aria-hidden="true">
          {initial}
        </span>
        <span className="app-header__name">{userName}</span>
        <button className="button button--ghost" type="button" onClick={onLogout}>
          Salir
        </button>
      </div>
    </header>
  )
}
