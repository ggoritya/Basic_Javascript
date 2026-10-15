abstract class Bank {
    bankName:string;
    constructor( bankName: string) {
        this.bankName=bankName;
    }

    abstract getInterestRate(): void;

    displayBankName(): void {
        console.log("Bank Name:", this.bankName);
    }
}

class SBI extends Bank {
    constructor() {
        super("SBI");
    }
    getInterestRate(): void {
        console.log("Interest Rate is 10%");
    }
}
let o = new SBI();
o.displayBankName();
o.getInterestRate();

