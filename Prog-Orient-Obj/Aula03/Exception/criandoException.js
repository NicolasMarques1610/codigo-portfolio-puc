class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function vaiDarErro() {
    throw new ValidationError("Dados inválidos!");
}

try {
    vaiDarErro();
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}