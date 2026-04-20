import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import TimeEntry from "./pages/TimeEntry.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./pages/ErrorPage.jsx";
import { TimeEntriesProvider } from "./context/TimeEntriesContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "time-entries", element: <TimeEntry /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
export default function App() {
  return (
    <TimeEntriesProvider>
      <Toaster />
      <RouterProvider router={router} />
    </TimeEntriesProvider>
  );
}
