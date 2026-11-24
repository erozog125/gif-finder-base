// En iPhone/iPad no existe el botón automático: explicamos los pasos.
export const IOSInstallHint = () => {
  return (
    <p className="install-hint">
      <span aria-hidden="true">📲</span> Para instalar en iPhone o iPad: toca <strong>Compartir</strong> y luego{' '}
      <strong>Agregar a inicio</strong>.
    </p>
  )
}
