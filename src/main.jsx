import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Team from "./pages/Team/Team";
import Contacts from "./pages/Contacts/Contacts";
import Invoices from "./pages/Invoices/Invoices";
import ProfileForm from "./pages/ProfileForm/ProfileForm";
import Calendar from "./pages/Calendar/Calendar";
import FAQ from "./pages/FAQ/FAQ";
import BarChart from "./pages/BarChart/BarChart";
import PieChart from "./pages/PieChart/PieChart";
import LineChart from "./pages/LineChart/LineChart";
import GeographyChart from "./pages/GeographyChart/GeographyChart";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Routes from Array1 */}
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />

      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />

      {/* Routes from Array2 */}
      <Route path="form" element={<ProfileForm />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />

      {/* Routes from Array3 */}
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<GeographyChart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
