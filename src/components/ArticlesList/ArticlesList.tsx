import { useGetArticlesQuery } from "../../redux/articlesSlice";
import { ArticlesItem } from "../ArticlesItem/ArticlesItem";
// import { IArticle } from "../../types/types";
import { customAlphabet } from "nanoid";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/selectors";

const nanoid = customAlphabet("1234567890", 5);

export const ArticlesList = () => {
  const filterValue = useSelector(selectFilter);
  const { data, error, isLoading } = useGetArticlesQuery();

  return (
    <>
      <Grid container component="ul" spacing={4}>
        {data?.map(({ title, summary, id, imageUrl, publishedAt }) => {
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
        })}
      </Grid>
    </>
  );
};
