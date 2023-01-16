import { useGetArticlesByIdQuery } from '../redux/articlesSlice';
import { useLocation, useParams } from 'react-router-dom';
import { RouteLink } from '../components/ArticlesItem/ArticlesItem.styled';
import { ArticlesDetails } from '../components/ArticlesDetails/ArticlesDetails';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectFilter } from '../redux/selectors';
import { PageNotFound } from './PageNotFound';
import { IArticle } from '../types/types';

export const ArticlePage: React.FC = () => {
  const { articleId } = useParams();
  const { data, error, isLoading } = useGetArticlesByIdQuery<IArticle | any>(articleId);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const filterValue = useSelector(selectFilter);

  return (
    <>
      {error ? (
        <PageNotFound />
      ) : isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <RouteLink to={backLink}>Go back</RouteLink>
          <ArticlesDetails
            title={data.title}
            imageUrl={data?.imageUrl}
            summary={data?.summary}
            publishedAt={data!.publishedAt}
            filterValue={filterValue}
          />
        </>
      )}
    </>
  );
};
