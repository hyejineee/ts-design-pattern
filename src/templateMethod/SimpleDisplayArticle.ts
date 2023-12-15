import Article from "./Article";
import DisplayArticleTemplate from "./DisplayArticleTemplate";

export default class SimpleDisplayArticle extends DisplayArticleTemplate {
  constructor(article: Article) {
    super(article);
  }

  protected contentHtml(): string {
    const items = this.article.getContent().map((e) => `<li>${e}</li>`);
    return `<ul>${items.join("")}</ul>`;
  }
  protected footerHtml(): string {
    return `<h3>${this.article.getFooter()}</h3>`;
  }
  protected titleHtml(): string {
    return `<h1>${this.article.getTitle()}</h1>`;
  }
}
