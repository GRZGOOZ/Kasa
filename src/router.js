import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Acceuil from "./pages/Acceuil/Acceuil";
import Apropos from "./pages/Apropos/Apropos";
import LogementDetails from "./pages/LogementDetails/LogementDetails";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/Kasa",
    element: <App />,
    errorElement: <ErrorPage />,
    caseSensitive: true,
    children: [
      {
        index: true,
        element: <Acceuil />,
      },
      {
        path: "Apropos",
        element: <Apropos />,
        caseSensitive: true,
      },
      {
        path: "logement/:id",
        element: <LogementDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
