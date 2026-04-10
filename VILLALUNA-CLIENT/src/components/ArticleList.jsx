import React from 'react';
import { Link } from 'react-router-dom';

function ArticleList({ articles }) {
  return (
    <div className="article-list">
      {articles.map(article => (
        <Link to={`/articles`} key={article.id || article.name || article.title} className="article-card">
          <article className="article-item">
            <h3 className="article-title">{article.title}</h3>
            <div className="article-meta">
              <span className="article-author">{article.author}</span>
              <span className="article-date">{article.date}</span>
            </div>
            <p className="article-preview">{(article.preview) ? article.preview.substring(0, 120) + '...' : (article.content && article.content[0] ? article.content[0].substring(0, 120) + '...' : '')}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default ArticleList;
