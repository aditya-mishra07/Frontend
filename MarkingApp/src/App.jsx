import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Convener from "./pages/Convener/Convener";
import Home from "./pages/Home/Home";
import Student from "./pages/Student/Student";
import Layout from "./Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/convener" element={<Convener />} />
        <Route path="/student" element={<Student />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
