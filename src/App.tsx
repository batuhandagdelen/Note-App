import type { FC } from "react";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Form from "./pages/form";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/not-found";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/note/:id", element: <Detail /> },
      { path: "/create", element: <Form /> },
      { path: "/edit/:id", element: <Form /> },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
