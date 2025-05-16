import ECMASGListener from "./generated/ECMASGListener.js";

export class ECMASGListener extends ECMASGListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}