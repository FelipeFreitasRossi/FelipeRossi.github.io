function saudacao(nome: string) {
  console.log(`Olá, ${nome.toUpperCase()}!`);
}

// O compilador TS verifica que '123' não é uma string,
// mas o VS Code (com IntelliSense) já deve avisar você!
saudacao("Mundo");
// saudacao(123); // Isso geraria um erro de tipo no TypeScript