import Item from "./Item";

export default abstract class Decorator extends Item {
  constructor(protected target: Item) {
    super();
  }
}
