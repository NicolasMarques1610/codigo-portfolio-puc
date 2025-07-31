try {
    throw new Error("Gerando um erro genêrico!");
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}