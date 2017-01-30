export class Price {
    private _dollars = 0;
    private _cents = 0;

    static add(...prices: Price[]): Price {
        let total = new Price(0, 0);

        for (let price of prices) {
            total.dollars += price.dollars;
            total.cents += price.cents;
        };

        return total;
    }

    constructor(dollars: number, cents: number) {
        this.dollars = dollars;
        this.cents = cents;
    }

    toString() {
        return (this.cents < 10) ?
            '$' + this.dollars + '.0' + this.cents :
            '$' + this.dollars + '.' + this.cents;
    }

    get dollars(): number {
        return this._dollars;
    }

    set dollars(d: number) {
        this._dollars = d;
    }

    get cents(): number {
        return this._cents;
    }

    set cents(c: number) {
        this._dollars += Math.floor(c / 100);
        this._cents = c % 100;
    }

}