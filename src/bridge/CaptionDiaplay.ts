import Display from "./Display";
import Draft from "./Draft";

export default class CaptionDisplay implements Display {
  title(draft: Draft): void {
    console.log("title", draft.getTitle());
  }
  author(draft: Draft): void {
    console.log("author", draft.getAuthor());
  }
  content(draft: Draft): void {
    const content = draft.getContent();
    console.log("content");
    content.forEach((e) => console.log(e));
  }
}
