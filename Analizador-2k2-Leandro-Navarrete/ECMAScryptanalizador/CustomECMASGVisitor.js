import ECMASGVisitor from "./generated/ECMASGVisitor.js";

export default class CustomECMASGVisitor extends ECMASGVisitor {
    constructor() {
        super();
        this.env = {}; // entorno de variables
        this.consoleOutputs = [];
    }

    visitProg(ctx) {
    let stats = ctx.stat();
    if (!Array.isArray(stats)) stats = [stats];
    // Generar el código traducido de todas las sentencias
    const code = stats.map(stat => this.visit(stat)).join('\n');
    // Mostrar los resultados de los console.log
    if (this.consoleOutputs.length > 0) {
        console.log("\nResultados de console.log:");
        this.consoleOutputs.forEach(out => console.log(out));
    }
    // Retornar el código traducido
    return code;
}

    visitAssignmentStat(ctx) {
        const id = ctx.ID().getText();
        const exprValue = this.evalExpr(ctx.expr());
        this.env[id] = exprValue;
        return `let ${id} = ${exprValue};`;
    }

    visitConsoleStat(ctx) {
        const value = this.evalExpr(ctx.expr());
        this.consoleOutputs.push(value);
        return `console.log(${value});`;
    }

    // Métodos para evaluar expresiones
    evalExpr(ctx) {
        if (ctx.term().length === 1) {
            return this.evalTerm(ctx.term(0));
        } else {
            let result = this.evalTerm(ctx.term(0));
            for (let i = 1; i < ctx.term().length; i++) {
                const op = ctx.children[2 * i - 1].getText();
                const right = this.evalTerm(ctx.term(i));
                switch (op) {
                    case '+': result += right; break;
                    case '-': result -= right; break;
                    case '*': result *= right; break;
                    case '/': result /= right; break;
                }
            }
            return result;
        }
    }

        evalTerm(ctx) {
        if (ctx.ID && ctx.ID()) {
            const id = ctx.ID().getText();
            if (!(id in this.env)) {
                console.error(`Error semántico: variable "${id}" usada antes de ser asignada.`);
                return 0;
            }
            return this.env[id];
        }
    }
    }

    // Los métodos de traducción a JS pueden quedarse igual si los necesitas
    visitDoWhileStat(ctx) {
        // No se evalúa, solo se traduce
        const block = this.visit(ctx.block());
        const expr = this.visit(ctx.expr());
        return `do ${block} while (${expr});`;
    }

    visitBlock(ctx) {
        let stats = ctx.stat();
        if (!Array.isArray(stats)) stats = [stats];
        stats.forEach(stat => this.visit(stat));
        return '';
    }

    visitExpr(ctx) {
        // Traducción a JS, no evaluación
        if (ctx.term().length === 1) {
            return this.visit(ctx.term(0));
        } else {
            let result = this.visit(ctx.term(0));
            for (let i = 1; i < ctx.term().length; i++) {
                const op = ctx.children[2 * i - 1].getText();
                const right = this.visit(ctx.term(i));
                result += ` ${op} ${right}`;
            }
            return result;
        }
    }

    visitTerm(ctx) {
        if (ctx.ID && ctx.ID()) return ctx.ID().getText();
        if (ctx.NUMBER && ctx.NUMBER()) return ctx.NUMBER().getText();
        if (ctx.expr && ctx.expr()) return `(${this.visit(ctx.expr(0))})`;
        return '';
    }
// ...existing imports...

async function main() {
    let input;

    // Leer archivo o pedir por teclado
    try {
        input = fs.readFileSync('input.js', 'utf8');
    } catch (err) {
        console.error("No se pudo leer input.js:", err.message);
        input = await leerCadena();
    }

    // Mostrar tokens y detectar errores léxicos
    let inputStream = CharStreams.fromString(input);
    let lexer = new ECMASGLexer(inputStream);

    // Listener para errores léxicos
    let lexerErrors = [];
    lexer.removeErrorListeners();
    lexer.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
            lexerErrors.push(`Error léxico en línea ${line}, columna ${column}: ${msg}`);
        }
    });

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

    // Mostrar errores léxicos si existen
    if (lexerErrors.length > 0) {
        console.error("\nErrores léxicos detectados:");
        lexerErrors.forEach(e => console.error(e));
        return;
    } else {
        console.log("\nEntrada lexicamente válida.");
    }

    // Volver a crear lexer y parser porque getAllTokens() consume los tokens
    inputStream = CharStreams.fromString(input);
    lexer = new ECMASGLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ECMASGParser(tokenStream);

    // Listener para errores sintácticos
    let parserErrors = [];
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
            parserErrors.push(`Error sintáctico en línea ${line}, columna ${column}: ${msg}`);
        }
    });

    let tree = parser.prog();

    if (parserErrors.length > 0) {
        console.error("\nErrores sintácticos detectados:");
        parserErrors.forEach(e => console.error(e));
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