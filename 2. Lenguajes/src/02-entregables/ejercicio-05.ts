console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
  private count: number;

  private successMessage() {
    console.log(`Congratulations!!!. You won ${this.count} coins!!`);
    this.count = 0;
  }

  private failureMessage() {
    console.log("Good luck next time!!");
  }

  play(): boolean {
    this.count += 1;
    const a = Math.random() < 0.5;
    const b = Math.random() < 0.5;
    const c = Math.random() < 0.5;

    console.log(`Coins: ${this.count}`);

    if (a && b && c) {
      this.successMessage();
      return true;
    } else {
      this.failureMessage();
      return false;
    }
  }

  constructor() {
    this.count = 0;
  }
}

const machine = new SlotMachine();

machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
