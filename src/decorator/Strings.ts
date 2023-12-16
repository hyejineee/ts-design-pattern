import Item from "./Item";

export default class Strings extends Item {
  getLinesCount(): number {
    return this.data.length;
  }
  getLength(i: number): number {
    return this.data[i].length;
  }
  getMaxLength(): number {
    return this.data.reduce(
      (acc, cur) => (acc < cur.length ? cur.length : acc),
      0
    );
  }
  getString(i: number): string {
    return this.data[i];
  }
  private data = new Array<string>();

  constructor() {
    super();
  }

  add(str: string): void {
    this.data.push(str);
  }
}
