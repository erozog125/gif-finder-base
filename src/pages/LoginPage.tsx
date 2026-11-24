import { LoginForm } from '../components/auth/LoginForm'

// 📌 PASO 13 — Página de ingreso (componente CONTENEDOR)
// Hoy la vista se ve, pero NO puedes escribir: los inputs son "controlados"
// y todavía no existe el estado que los alimenta. Esa es tu tarea.
// 📌 PASO 21 — Aquí también irá el botón "Descargar app".

export const LoginPage = () => {
  return (
    <main className="login-page">
      <section className="login-card">
        <span className="logo logo--large" aria-hidden="true">
          GIF
        </span>
        <h1 className="login-card__title">GifFinder</h1>
        <p className="login-card__subtitle">Encuentra el GIF perfecto para cada conversación</p>

        <LoginForm
          values={{ email: '', password: '' }}
          error={null}
          isSubmitting={false}
          onChange={() => {}}
          onSubmit={(event) => event.preventDefault()}
        />
      </section>
    </main>
  )
}
