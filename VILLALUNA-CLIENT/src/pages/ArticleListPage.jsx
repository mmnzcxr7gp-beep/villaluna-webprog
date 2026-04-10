import React from 'react';
import { articles } from '../data/article-content';
import ArticleList from '../components/ArticleList';

function ArticleListPage() {
  return (
    <div className="page article-list-page">
      <div className="page-container">
        <section className="hero">
          <h1>Dev Blog</h1>
          <p>Insights on web development, React, accessibility, and modern frontend practices.</p>
        </section>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}

export default ArticleListPage;
