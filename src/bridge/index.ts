import CaptionDisplay from "./CaptionDiaplay";
import CharactersCounter from "./CharactersCounter";
import Draft from "./Draft";
import SimpleDisplay from "./SImpleDiaplay";

const title = "제목";
const author = "작가";
const content = ["내용1", "내용2", "내용3"];

// const draft = new Draft(title, author, content);
const draft = new CharactersCounter(title, author, content);

// const display = new SimpleDisplay();
const display = new CaptionDisplay();

draft.print(display);

console.log("전체 문자 수", draft.getCharactersCount());
