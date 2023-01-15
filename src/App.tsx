import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ArticlePage } from "./pages/Article";
import { Layout } from "./components/Layout/Layout";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="article/:articleId" element={<ArticlePage />} />
        </Route>
      </Routes>
    </>
  );
};
