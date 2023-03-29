export class AuthError extends Error {
  constructor(message: string, error: Error) {
    super(`${message}\n`, error);
    this.name = AuthError.name;
  }
}
