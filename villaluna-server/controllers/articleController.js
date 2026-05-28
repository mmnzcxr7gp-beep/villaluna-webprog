const Article = require("../models/Article");

// GET /api/articles
const getArticles = async (req, res) => {
  try {
    const { status } = req.query;
    const query = {};

    if (status) {
      query.status = status;
    }

    const articles = await Article.find(query).sort({ createdAt: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch articles." });
  }
};

// POST /api/articles
const createArticle = async (req, res) => {
  try {
    const { slug, title, paragraph, preview, status } = req.body;

    const existing = await Article.findOne({ slug: slug?.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "Slug already exists." });
    }

    const article = await Article.create({
      slug: slug.toLowerCase(),
      title,
      paragraph,
      preview,
      status: status || "active",
    });

    res.status(201).json({ message: "Article created successfully.", article });
  } catch (error) {
    res.status(500).json({ message: "Failed to create article." });
  }
};

// PUT /api/articles/:id
const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = { ...req.body };

    if (payload.slug) payload.slug = payload.slug.toLowerCase();

    const updated = await Article.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Article not found." });
    }

    res.json({ message: "Article updated successfully.", article: updated });
  } catch (error) {
    res.status(500).json({ message: "Failed to update article." });
  }
};

// DELETE /api/articles/:id
const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Article.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Article not found." });
    }

    res.json({ message: "Article deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete article." });
  }
};

module.exports = {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};
