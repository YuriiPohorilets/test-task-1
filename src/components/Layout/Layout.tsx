import { Container, AppBar, Toolbar } from "@mui/material";
import { FilterArticles } from "../FilterArticles/FilterArticles";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <AppBar position="static" sx={{ mb: "40px" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <FilterArticles />
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="xl">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
