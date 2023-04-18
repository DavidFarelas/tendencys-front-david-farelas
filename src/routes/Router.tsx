import { createBrowserRouter } from "react-router-dom";
import TablePage from "../paysTable/pages/Table.page";
import DetailsPage from "../paysTable/pages/Details.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TablePage />,
  },
  {
    path: "/:id",
    element: <DetailsPage />,
  },
]);
