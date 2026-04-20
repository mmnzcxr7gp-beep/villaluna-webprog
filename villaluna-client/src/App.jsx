import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './assets/components/Layout';
import HomePage from './pages/homepage';
import AboutPage from './pages/Aboutpage';
import ArticlePage from './pages/Article.page';

const routes = [
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'article',
        element: <ArticlePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
