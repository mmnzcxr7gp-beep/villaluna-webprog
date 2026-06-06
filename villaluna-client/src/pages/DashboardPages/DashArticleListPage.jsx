import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  TextField,
  MenuItem,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ArticleService from "../../services/ArticleService";

const defaultForm = {
  slug: "",
  title: "",
  paragraph: "",
  preview: "",
  status: "active",
};

const DashArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState(defaultForm);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchArticles = async () => {
    try {
      const data = await ArticleService.getArticles();
      setArticles(data);
    } catch (error) {
      setErrorMsg("Failed to load articles.");
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleOpenAdd = () => {
    setIsEditMode(false);
    setSelectedId(null);
    setFormData(defaultForm);
    setOpenDialog(true);
    setErrorMsg("");
  };

  const handleOpenEdit = (article) => {
    setIsEditMode(true);
    setSelectedId(article._id);
    setFormData({
      slug: article.slug || "",
      title: article.title || "",
      paragraph: article.paragraph || "",
      preview: article.preview || "",
      status: article.status || "active",
    });
    setOpenDialog(true);
    setErrorMsg("");
  };

  const handleSave = async () => {
    try {
      if (isEditMode) {
        await ArticleService.updateArticle(selectedId, formData);
      } else {
        await ArticleService.createArticle(formData);
      }
      setOpenDialog(false);
      fetchArticles();
    } catch (error) {
      setErrorMsg(error?.response?.data?.message || "Failed to save article.");
    }
  };

  const handleDisableEnable = async (article) => {
    try {
      const nextStatus = article.status === "active" ? "inactive" : "active";
      await ArticleService.updateArticle(article._id, { status: nextStatus });
      fetchArticles();
    } catch (error) {
      setErrorMsg("Failed to update article status.");
    }
  };

  const filteredArticles = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return articles.filter((article) => {
      const matchesSearch =
        !search ||
        article.slug?.toLowerCase().includes(search) ||
        article.title?.toLowerCase().includes(search) ||
        article.preview?.toLowerCase().includes(search);

      const matchesStatus = !statusFilter || article.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [articles, searchTerm, statusFilter]);

  const columns = [
    { field: "slug", headerName: "Slug", minWidth: 140, flex: 0.8 },
    { field: "title", headerName: "Title", minWidth: 200, flex: 1.2 },
    { field: "paragraph", headerName: "Paragraph", minWidth: 260, flex: 1.4 },
    { field: "preview", headerName: "Preview", minWidth: 240, flex: 1.2 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 120,
      flex: 0.7,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === "active" ? "success" : "default"}
          size="small"
          sx={{ textTransform: "capitalize" }}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 220,
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="outlined" onClick={() => handleOpenEdit(params.row)}>
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            color={params.row.status === "active" ? "warning" : "success"}
            onClick={() => handleDisableEnable(params.row)}
          >
            {params.row.status === "active" ? "Disable" : "Enable"}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={2}
            mb={3}
          >
            <Box>
              <Typography variant="h4" fontWeight={700} color="primary.main">
                Article Dashboard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage article records with search, filters, and quick actions.
              </Typography>
            </Box>
            <Button variant="contained" onClick={handleOpenAdd}>
              Add Article
            </Button>
          </Stack>

          {errorMsg && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errorMsg}
            </Alert>
          )}

          <Stack direction={{ xs: "column", md: "row" }} spacing={2} mb={2}>
            <TextField
              fullWidth
              label="Search by slug, title, or preview"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <TextField
              select
              label="Status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              sx={{ minWidth: 160 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="active">active</MenuItem>
              <MenuItem value="inactive">inactive</MenuItem>
            </TextField>
          </Stack>

          <Box sx={{ height: 600, width: "100%" }}>
            <DataGrid
              rows={filteredArticles}
              getRowId={(row) => row._id}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10, 20]}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 10, page: 0 },
                },
              }}
            />
          </Box>
        </CardContent>
      </Card>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="md">
        <DialogTitle>{isEditMode ? "Edit Article" : "Add Article"}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField label="Slug" value={formData.slug} onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))} fullWidth />
            <TextField label="Title" value={formData.title} onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))} fullWidth />
            <TextField
              label="Paragraph"
              value={formData.paragraph}
              onChange={(e) => setFormData((prev) => ({ ...prev, paragraph: e.target.value }))}
              fullWidth
              multiline
              minRows={4}
            />
            <TextField
              label="Preview"
              value={formData.preview}
              onChange={(e) => setFormData((prev) => ({ ...prev, preview: e.target.value }))}
              fullWidth
              multiline
              minRows={2}
            />
            <TextField
              select
              label="Status"
              value={formData.status}
              onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value }))}
              fullWidth
            >
              <MenuItem value="active">active</MenuItem>
              <MenuItem value="inactive">inactive</MenuItem>
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DashArticleListPage;
