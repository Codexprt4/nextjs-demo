import articleStyle from "../styles/Article.module.css";
import ArticleItems from "./ArticleItems";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyle.grid}>
      {articles.map((article, index) => (
        <ArticleItems article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
