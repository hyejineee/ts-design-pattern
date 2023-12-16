import Decorator from "./Decorator";
import Item from "./Item";

export default class BoxDecorator extends Decorator {
  getLinesCount(): number {
    return this.target.getLinesCount() + 2;
  }
  getLength(i: number): number {
    return this.target.getLength(i) + 2;
  }
  getMaxLength(): number {
    return this.target.getMaxLength() + 2;
  }
  getString(i: number): string {
    const maxW = this.getMaxLength();
    if (i === 0 || i === this.getLinesCount() - 1) {
      return `<span style='color:yellow'>+${"-".repeat(maxW - 2)}+</span>`;
    }

    return (
      `<span style='color:yellow'>|</span>` +
      `${this.target.getString(i - 1)}${" ".repeat(
        maxW - this.getLength(i - 1)
      )}` +
      `<span style='color:yellow'>|</span>`
    );
  }
  constructor(target: Item) {
    super(target);
  }
}
