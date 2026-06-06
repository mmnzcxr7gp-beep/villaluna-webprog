import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Main Layout
import Layout from "./components/Layout";

// Dashboard Layout
import DashLayout from "./Layouts/DashLayout";

// Auth Layout
import AuthLayout from "./Layouts/AuthLayout";

// Pages
import ArticlePage from "./pages/ArticlePage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/AuthPages/Login";
import SignUp from "./pages/AuthPages/SignUp";
import DashboardPage from "./pages/DashboardPages/DashboardPage";
import ReportsPage from "./pages/ReportsPage";
import UsersPage from "./pages/UsersPage";
import DashArticleListPage from "./pages/DashboardPages/DashArticleListPage";
import { STORAGE_KEYS } from "./constants";

const oopsieTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#b45309',
    },
    secondary: {
      main: '#92400e',
    },
    background: {
      default: '#fefce8',
      paper: '#fefce8',
    },
    divider: '#d1d5db',
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: '0.025em',
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 800,
    },
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 800,
    },
    h6: {
      fontWeight: 800,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    button: {
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

const getUserType = () => localStorage.getItem(STORAGE_KEYS.type);

const ProtectedRoute = ({ allowedTypes, children }) => {
  const token = localStorage.getItem(STORAGE_KEYS.token);
  const type = getUserType();

  if (!token) return <Navigate to="/auth/signin" replace />;
  if (!allowedTypes.includes(type)) return <Navigate to="/" replace />;
  return children;
};

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "articles",
        element: <ArticlePage />,
      },
      {
        path: "articles/list",
        element: <ArticleListPage />,
      },
      {
        path: "articles/:name",
        element: <ArticleDetailPage />,
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "signin",
            element: <Login />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute allowedTypes={["admin", "editor"]}>
            <DashLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "",
            element: <DashboardPage />,
          },
          {
            path: "reports",
            element: <ReportsPage />,
          },
          {
            path: "users",
            element: (
              <ProtectedRoute allowedTypes={["admin"]}>
                <UsersPage />
              </ProtectedRoute>
            ),
          },
          {
            path: "articles",
            element: (
              <ProtectedRoute allowedTypes={["admin", "editor"]}>
                <DashArticleListPage />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider theme={oopsieTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
