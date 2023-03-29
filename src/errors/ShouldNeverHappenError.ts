export class ShouldNeverHappenError extends Error {
  constructor(message: string) {
    super(
      `This error was thrown reaching part of code that shouldn't be reachable by current scenario.\n${message}`
    );
    this.name = ShouldNeverHappenError.name;
  }
}
