import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { validateSession } from "../utils/workflow.js";

const ProtectedRoutes = () => {
  const [autoLoginCheck, setAutoLoginCheck] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    validateSession(dispatch).then(() => setAutoLoginCheck(true));
  }, [dispatch]);

  useEffect(() => {
    if (autoLoginCheck && !isAuthenticated && location.pathname !== "/auth") {
      navigate("/auth", { replace: true, state: { from: location } });
    }
  }, [location, navigate, isAuthenticated, autoLoginCheck]);
  return isAuthenticated ? <Outlet /> : null;
};

export default ProtectedRoutes;
