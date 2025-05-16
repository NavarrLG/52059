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
            return this.env[id] ?? 0;
        }
        if (ctx.NUMBER && ctx.NUMBER()) {
            return Number(ctx.NUMBER().getText());
        }
        if (ctx.expr && ctx.expr()) {
            return this.evalExpr(ctx.expr(0));
        }
        return 0;
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
}