import { Array } from "./Array";
import { Item } from "./Item";

const items = [
  new Item("1", 100),
  new Item("2", 200),
  new Item("3", 300),
  new Item("4", 400),
];

const array = new Array(items);
const iter = array.iterator();

while (iter.next()) {
  const currentItem = iter.current();

  console.log(currentItem);
  const itemElement = document.createElement("div");
  itemElement.innerText = `${currentItem.name}-${currentItem.cost}`;

  document.body.appendChild(itemElement);
}
