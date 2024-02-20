import "./App.css";
import "./icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
