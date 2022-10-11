import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Offers from "./pages/Offers";
import Home from "./pages/Home";

const ProjectRoutes = () => {
  const ProtectRoutes = ({ redirectTo }: any) => {
    const isAuthenticated = false;

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  };

  return (
    <Routes>
      <Route path='/'>
        <Route path='/' element={<Offers />} />
        <Route path='/offers' element={<Offers />} />
      </Route>

      <Route element={<ProtectRoutes redirectTo='/' />}>
        <Route path='/home' element={<Home />} />
      </Route>
    </Routes>
  );
};

export default ProjectRoutes;
