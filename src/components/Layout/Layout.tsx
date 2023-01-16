import { Container, AppBar, Toolbar } from '@mui/material';
import { FilterArticles } from '../FilterArticles/FilterArticles';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { ToTopBtn } from '../ToTopBtn/ToTopBtn';
import { useToggleBtn } from '../../hooks/useToggleBtn';

export const Layout = () => {
  const { isShown, show, hide } = useToggleBtn(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        show();
      } else {
        hide();
      }
    });
  }, [hide, show]);

  return (
    <>
      <AppBar position="static" sx={{ mb: '40px' }}>
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

      {isShown && <ToTopBtn />}
    </>
  );
};
