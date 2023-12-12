import SumStrategy from "./SumStrategy";

export default class SumPrinter {
  print(strategy: SumStrategy, n: number, dom: Element) {
    const value = strategy.get(n);
    dom.innerHTML = `1~${n}까지의 총합 : ${value}`;
  }
}
