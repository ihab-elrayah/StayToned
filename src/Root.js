import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from "./Reviews.js";
import FrontPage from "./FrontPage.js";
import Layout from "./Layout.js";
import Workout from "./Workout.js";

function Root () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<FrontPage />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="workout" element={<Workout />} />
            { /* <Route path="*" element={<NoPage />} /> */ }
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Root;