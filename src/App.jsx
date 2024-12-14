import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {routes.map((item) => {
            const { path, Component, Layout } = item;
            let L = Layout ?? Fragment;

            return (
              <Route
                key={path}
                path={path}
                element={
                  <L>
                    <Component />
                  </L>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
