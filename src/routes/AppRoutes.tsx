import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import AppLayout from "../Layouts/AppLayout";
import AuthLayout from "../Layouts/AuthLayout";

const AppRoutes = () => {
  const currentUser = true;
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* Componente principal que envuelve todas las rutas */}
        <Route element={<App />}>
          {/* Rutas para usuarios autenticados */}
          {currentUser ? (
            <>
              {/* Aqui hay un navigate antes de entrar a las rutas privadas, para que redirija a /app/dashboard desde cualquier otra ruta */}
              <Route path="/*" element={<Navigate to="/app/dashboard" />} />

              {/* Ruta para el layout privado (app) */}
              <Route path="/app" element={<AppLayout />}>
                <Route
                  path="dashboard"
                  element={<h1>Este es el Dashboard</h1>}
                />
                {/* Ruta predeterminada al dashboard */}
                <Route index element={<Navigate to="/app/dashboard" />} />
              </Route>
            </>
          ) : (
            <>
              {/* Rutas de autenticación */}
              {/* Aqui hay un navigate antes de entrar a las rutas privadas, para que redirija a /auht/login desde cualquier otra ruta */}
              <Route path="/*" element={<Navigate to="/auth/login" />} />

              {/* Ruta para el layout de autenticación (auth) */}
              <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<h1>Este es el Login</h1>} />
                <Route path="register" element={<h1>Este es el Registro</h1>} />

                {/* Ruta predeterminada al login */}
                <Route index element={<Navigate to="/auth/login" />} />
              </Route>
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
