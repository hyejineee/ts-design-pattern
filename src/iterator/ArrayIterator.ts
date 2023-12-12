import { Array } from "./Array";
import { Item } from "./Item";
import Iterator from "./Iterator";

export class ArrayIterator implements Iterator<Item> {
  private index: number;

  constructor(private array: Array) {
    this.index = -1;
  }

  next(): boolean {
    // 여기서 세부 로직이 달라짐. 세부로직이 달라져도 사용하는 쪽에서는 신경쓸 필요가 없다.
    this.index++;
    return this.index < this.array.count;
  }
  current(): Item {
    return this.array.getItem(this.index);
  }
}
