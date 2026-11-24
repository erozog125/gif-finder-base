import { LoginPage } from './pages/LoginPage'
// import { GifsPage } from './pages/GifsPage'

// 📌 PASO 12 — Rutas
// Por ahora App muestra solo una página. Para ver la interfaz de GIFs con datos
// de prueba, comenta <LoginPage /> y descomenta <GifsPage /> (y su import).

export const App = () => {
  return (
    <>
      <LoginPage />
      {/* <GifsPage /> */}
    </>
  )
}
