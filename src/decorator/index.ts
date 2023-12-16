import BoxDecorator from "./BoxDecorator";
import SideDecorator from "./SideDecorator";
import Strings from "./Strings";

const str = new Strings();
str.add("hello");
str.add("asdlkfjsdlkfjlksa");
str.add("asdfasdf");
str.add("dfskgjakldsgjla;kdfjglkdf");

const domPre = document.querySelector("pre");
// str.print(domPre);

const sd = new SideDecorator(str, '"');
// sd.print(domPre);

const bd = new BoxDecorator(sd);
bd.print(domPre);
