import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { ArticlePage } from './pages/Article';
import { Layout } from './components/Layout/Layout';
import { PageNotFound } from './pages/PageNotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route index element={<HomePage />} />
          <Route path="article/:articleId" element={<ArticlePage />} />
        </Route>
      </Routes>
    </>
  );
};
