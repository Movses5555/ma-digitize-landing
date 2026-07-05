export function getSupportEmail(): string {
  return process.env.EMAIL_SUPPORT?.trim() ?? "";
}
