import type { ChangeEvent, FormEvent } from 'react'
import type { Credentials } from '../../types/auth'

interface LoginFormProps {
  values: Credentials
  error: string | null
  isSubmitting: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

// Componente PRESENTACIONAL: no guarda estado ni sabe de autenticación.
// Todo lo recibe por props desde LoginPage (el contenedor).
export const LoginForm = ({ values, error, isSubmitting, onChange, onSubmit }: LoginFormProps) => {
  return (
    <form className="login-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label className="field__label" htmlFor="email">
          Correo electrónico
        </label>
        <input
          className="field__input"
          id="email"
          name="email"
          type="email"
          placeholder="tucorreo@ejemplo.com"
          autoComplete="email"
          value={values.email}
          onChange={onChange}
          disabled={isSubmitting}
        />
      </div>

      <div className="field">
        <label className="field__label" htmlFor="password">
          Contraseña
        </label>
        <input
          className="field__input"
          id="password"
          name="password"
          type="password"
          placeholder="Mínimo 6 caracteres"
          autoComplete="current-password"
          value={values.password}
          onChange={onChange}
          disabled={isSubmitting}
        />
      </div>

      {error && (
        <p className="login-form__error" role="alert">
          {error}
        </p>
      )}

      <button className="button button--primary button--block" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Ingresando…' : 'Ingresar'}
      </button>

      <p className="login-form__hint">
        Ingreso simulado: usa cualquier correo válido y una contraseña de mínimo 6 caracteres.
      </p>
    </form>
  )
}
