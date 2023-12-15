import Article from "./Article";
import DisplayArticleTemplate from "./DisplayArticleTemplate";
import EditableDisplayArticle from "./EditableDisplayArticle";
import SimpleDisplayArticle from "./SimpleDisplayArticle";

const article = new Article("title", ["content1", "content2"], "footer");

const display = new SimpleDisplayArticle(article);
document.querySelector(".content").innerHTML = display.displayHtml();

document.querySelector(".edit-mode").addEventListener("change", (e) => {
  const display = (e.target as HTMLInputElement).checked
    ? new EditableDisplayArticle(article)
    : new SimpleDisplayArticle(article);

  document.querySelector(".content").innerHTML = display.displayHtml();
});
