import ProxyImage from "./ProxyImage";
import RealImage from "./RealImage";

const items = [
  [
    "설산야경",
    "https://cdn.bhdw.net/im/snow-mountain-night-wallpaper-81305_w635.webp",
  ],
  [
    "외로운늑대",
    "https://cdn.bhdw.net/im/fantasy-world-wallpaper-29897_w635.webp",
  ],
  [
    "강변황혼",
    "https://cdn.bhdw.net/im/sunset-minimalist-wallpaper-81072_w635.webp",
  ],
];

const domList = document.querySelector(".list");

items.forEach((e) => {
  const title = e[0];
  const url = e[1];

  const image = new ProxyImage(title, url, domList);
  image.append();
});
