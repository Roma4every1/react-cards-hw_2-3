import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { Home } from "./pages/Home";
import { routeLocationsEnum } from "./Router";
import { FeaturedPage } from "./pages/FeaturedPage";

const RouterRoutes = () => {
  return (
    <Routes>
      <Route path={routeLocationsEnum.main} Component={() => <Home />} />
      <Route
        path={routeLocationsEnum.FeaturedCardPage}
        Component={() => <FeaturedPage />}
      />
    </Routes>
  );
};

export default RouterRoutes;
