import Animal from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import Tiger from "./Tiger";
import TigerAdapter from "./TigerAdapter";

const list = Array<Animal>();
list.push(new Dog("백구"));
list.push(new Dog("시바"));
list.push(new Cat("고양"));

// const tiger = new Tiger();
// tiger.name = "호랭";
// list.push(tiger);
list.push(new TigerAdapter("호랭"));

list.forEach((e) => e.sound());
