export const validatePassword = (password: string): string | null => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    const noMoreThanThreeRepeats = !/(.)\1\1/.test(password);
  
    if (password.length < 8) return "A senha deve ter pelo menos 8 caracteres.";
    if (!hasUpperCase) return "A senha deve conter pelo menos uma letra maiúscula.";
    if (!hasNumber) return "A senha deve conter pelo menos um número.";
    if (!hasSpecialChar) return "A senha deve conter pelo menos um caractere especial.";
    if (!noMoreThanThreeRepeats) return "A senha não pode conter mais de 3 caracteres repetidos em sequência.";
  
    return null;
  };
  