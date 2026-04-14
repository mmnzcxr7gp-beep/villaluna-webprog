import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './assets/components/Layout';
import HomePage from './pages/homepage';

const routes = [
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '',
        element: <HomePage />,
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
