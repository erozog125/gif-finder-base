// 📌 PASO 12 — Cuando instales React Router, cambia el <a> por <Link to="/">.
export const NotFoundPage = () => {
  return (
    <main className="not-found">
      <span className="not-found__code">404</span>
      <h1 className="not-found__title">Esta página no existe</h1>
      <a className="button button--primary" href="/">
        Volver al inicio
      </a>
    </main>
  )
}
