import ECMASGLexer from "./generated/ECMASGLexer.js";
import ECMASGParser from "./generated/ECMASGParser.js";
import CustomECMASGVisitor from "./CustomECMASGVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Leer archivo o pedir por teclado
    try {
        input = fs.readFileSync('input.js', 'utf8');
    } catch (err) {
        console.error("No se pudo leer input.js:", err.message);
        input = await leerCadena();
    }

    // Mostrar tokens
    let inputStream = CharStreams.fromString(input);
    let lexer = new ECMASGLexer(inputStream);
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");
    for (let token of tokens) {
        const tokenType = ECMASGLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------");

    // Volver a crear lexer y parser porque getAllTokens() consume los tokens
    inputStream = CharStreams.fromString(input);
    lexer = new ECMASGLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ECMASGParser(tokenStream);
    let tree = parser.prog();

    // Mostrar árbol y traducir solo si no hay errores de sintaxis
    if (lexer.lexerErrorsCount > 0) {
        console.error("\nSe encontraron errores de lexico en la entrada.");
        return;
    }
    console.log("\nEntrada lexicamente válida.");

    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
        return;
    }
    console.log("\nEntrada sintácticamente válida.");
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log(`Árbol de derivación: ${cadena_tree}`);

    // Traducir a JavaScript
    const visitor = new CustomECMASGVisitor();
    const jsCode = visitor.visit(tree);
    console.log("\nCódigo JavaScript generado:");
    console.log(jsCode);
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();