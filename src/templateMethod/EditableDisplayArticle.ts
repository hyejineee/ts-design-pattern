import Article from "./Article";
import DisplayArticleTemplate from "./DisplayArticleTemplate";

export default class EditableDisplayArticle extends DisplayArticleTemplate {
  constructor(article: Article) {
    super(article);
  }

  protected contentHtml(): string {
    const items = this.article.getContent().map((e) => `<li>${e}</li>`);
    return `<ul>${items.join("")}</ul>`;
  }
  protected footerHtml(): string {
    return `<h1>${this.article.getFooter()}</h1>`;
  }
  protected titleHtml(): string {
    return `<div>
    <span>제목 : </span>
    <input value=${this.article.getTitle()} />
    </div>`;
  }
}
