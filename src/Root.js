import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Reviews from "./Reviews.js";
import FrontPage from "./FrontPage.js";
import Layout from "./Layout.js";
import Workout from "./Workout.js";
import Helmet from "react-helmet";
import FindGyms from "./FindGyms.js";
import Map from "./Map.js";

function Root () {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<FrontPage />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="workout" element={<Workout />} />
            {/* <Route path="gyms" element={<Map />} /> */}
            { /* <Route path="*" element={<NoPage />} /> */ }
          </Route>
      </Routes>
    </BrowserRouter>
    <Helmet>
    <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
    <script src="https://mediafiles.botpress.cloud/e435087a-33ca-47eb-bd6c-6f40e7307a37/webchat/config.js" defer></script>
      <script src="https://kit.fontawesome.com/df124fe584.js" crossorigin="anonymous"></script>
    </Helmet>
    </>
  );
}

export default Root;