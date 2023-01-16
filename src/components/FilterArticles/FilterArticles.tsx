import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilterArticles } from '../../redux/filterSlice';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './FilterArticles.styled';

export const FilterArticles: React.FC = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector<string>(selectFilter);

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Filter by keywords"
          inputProps={{ 'aria-label': 'Filter by keywords' }}
          value={filterValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(setFilterArticles(e.currentTarget.value))
          }
        />
      </Search>
    </>
  );
};
