import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { TopBtn } from './ToTopBtn.styled';

export const ToTopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <TopBtn onClick={scrollToTop}>
      <VerticalAlignTopIcon />
    </TopBtn>
  );
};
