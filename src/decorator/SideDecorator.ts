import Decorator from "./Decorator";
import Item from "./Item";

export default class SideDecorator extends Decorator {
  getLinesCount(): number {
    return this.target.getLinesCount();
  }
  getLength(i: number): number {
    return this.target.getLength(i) + this.ch.length * 2;
  }
  getMaxLength(): number {
    return this.target.getMaxLength() + this.ch.length * 2;
  }
  getString(i: number): string {
    return (
      `<span style='color:gray'>${this.ch}</span>` +
      `${this.target.getString(i)}` +
      `<span style='color:gray'>${this.ch}</span>`
    );
  }
  constructor(target: Item, private ch: string) {
    super(target);
  }
}
