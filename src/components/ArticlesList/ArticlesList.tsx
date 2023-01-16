import { useGetArticlesQuery } from '../../redux/articlesSlice';
import { ArticlesItem } from '../ArticlesItem/ArticlesItem';
import { customAlphabet } from 'nanoid';
import { Grid, CircularProgress, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { PageNotFound } from '../../pages/PageNotFound';
import { IArticle } from '../../types/types';

const nanoid = customAlphabet('1234567890', 5);

export const ArticlesList: React.FC = () => {
  const filterValue = useSelector(selectFilter);
  const { data, error, isLoading } = useGetArticlesQuery();

  const filteredArticles = data?.filter(
    article =>
      article.title?.toLowerCase().includes(filterValue.toLowerCase().trim()) ||
      article.summary?.toLowerCase().includes(filterValue.toLowerCase().trim())
  );

  return (
    <>
      {error ? (
        <PageNotFound />
      ) : (
        <>
          <Box>
            <Typography variant="h6" component="p" display="block" sx={{ mb: '20px' }}>
              Results: {filteredArticles?.length}
            </Typography>
          </Box>
          <Grid container component="ul" spacing={4}>
            {isLoading ? (
              <CircularProgress />
            ) : (
              filteredArticles?.map(({ title, summary, id, imageUrl, publishedAt }: IArticle) => {
                return (
                  <ArticlesItem
                    key={nanoid()}
                    title={title}
                    summary={summary}
                    id={id}
                    imageUrl={imageUrl}
                    publishedAt={publishedAt}
                    filterValue={filterValue}
                  />
                );
              })
            )}
          </Grid>
        </>
      )}
    </>
  );
};
