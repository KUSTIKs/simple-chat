export class AppError extends Error {
  constructor(public message: string) {
    super(message);
  }
}
