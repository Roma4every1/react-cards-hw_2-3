import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import RouterRoutes from "./RouterRoutes";

export enum routeLocationsEnum {
  main = "/",
  FeaturedCardPage = "/featuredCards",
}

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterRoutes />
    </BrowserRouter>
  );
};

export default Router;
