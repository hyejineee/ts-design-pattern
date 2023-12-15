import Article from "./Article";

export default abstract class DisplayArticleTemplate {
  constructor(protected article: Article) {}

  // readonly 키워드를 사용하여 파생(자식) 클래스에서 오버라이딩 할 수 없도록 막음
  public readonly displayHtml = () => {
    return `
        ${this.titleHtml()} 
        ${this.contentHtml()} 
        ${this.footerHtml()} 
        `;
  };

  // 파생 클래스에서 구현될 추상 메서드 선언
  protected abstract contentHtml(): string;
  protected abstract footerHtml(): string;
  protected abstract titleHtml(): string;
}
