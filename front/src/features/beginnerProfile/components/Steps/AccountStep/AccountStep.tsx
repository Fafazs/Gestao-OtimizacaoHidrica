import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import styles from './AccountStep.module.css';

interface AccountStepProps {
  name: string;
  email: string;

  password: string;
  confirmPassword: string;

  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;

  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
}

export function AccountStep({
  name,
  email,

  password,
  confirmPassword,

  onNameChange,
  onEmailChange,

  onPasswordChange,
  onConfirmPasswordChange,
}: AccountStepProps) {
  const [showPassword, setShowPassword] =
    useState(false);

  const passwordsMatch =
    password &&
    confirmPassword &&
    password === confirmPassword;

  const passwordsDifferent =
    confirmPassword.length > 0 &&
    password !== confirmPassword;

  return (
    <div className={styles.form}>
      <div className={styles.field}>
        <label>Seu nome</label>

        <input
          type="text"
          value={name}
          onChange={(e) =>
            onNameChange(e.target.value)
          }
          placeholder="Ex: João Silva"
        />
      </div>

      <div className={styles.field}>
        <label>Email</label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            onEmailChange(e.target.value)
          }
          placeholder="Ex: joao@email.com"
        />
      </div>

      <div className={styles.field}>
        <label>Senha</label>

        <div className={styles.passwordWrapper}>
          <input
            type={
              showPassword
                ? 'text'
                : 'password'
            }
            value={password}
            onChange={(e) =>
              onPasswordChange(e.target.value)
            }
            placeholder="Crie uma senha"
          />

          <button
  type="button"
  className={styles.showButton}
  onClick={() =>
    setShowPassword(!showPassword)
  }
>
  {showPassword ? (
    <EyeOff size={20} />
  ) : (
    <Eye size={20} />
  )}
</button>
        </div>
      </div>

      <div className={styles.field}>
        <label>Confirmar senha</label>

        <input
          type={
            showPassword
              ? 'text'
              : 'password'
          }
          value={confirmPassword}
          onChange={(e) =>
            onConfirmPasswordChange(
              e.target.value
            )
          }
          placeholder="Digite novamente"
        />
      </div>

      {passwordsMatch && (
        <p className={styles.success}>
          ✅ Senhas coincidem
        </p>
      )}

      {passwordsDifferent && (
        <p className={styles.error}>
          ❌ As senhas não coincidem
        </p>
      )}
    </div>
  );
}